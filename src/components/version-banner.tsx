import { readFileSync } from "node:fs";
import path from "node:path";
import { Banner } from "fumadocs-ui/components/banner";

interface BuildInfo {
  sha: string;
  committedAt: string;
  latestRelease: string | null;
  isRelease: boolean;
}

// Read rather than imported so a sync from an older Lumi checkout, which wrote no build-info.json, still builds.
function readBuildInfo(): BuildInfo | null {
  try {
    return JSON.parse(readFileSync(path.join(process.cwd(), "data", "build-info.json"), "utf8")) as BuildInfo;
  } catch {
    return null;
  }
}

export function VersionBanner() {
  const info = readBuildInfo();
  if (!info || info.isRelease) return null;

  const commitUrl = `https://github.com/lumi-devs/Lumi/commit/${info.sha}`;
  const date = info.committedAt.slice(0, 10);

  return (
    <Banner>
      <span>
        These docs track Lumi&apos;s <code>main</code> branch (
        <a href={commitUrl} className="underline">
          {info.sha.slice(0, 7)}
        </a>
        , {date})
        {info.latestRelease
          ? `, ahead of the latest release ${info.latestRelease}; some of it may not be released yet.`
          : "."}
      </span>
    </Banner>
  );
}
