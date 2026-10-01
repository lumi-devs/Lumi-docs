import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { VersionBanner } from "@/components/version-banner";
import { source } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <VersionBanner />
      <DocsLayout
        tree={source.pageTree}
        nav={{ title: "Lumi Docs" }}
        githubUrl="https://github.com/lumi-devs/Lumi"
      >
        {children}
      </DocsLayout>
    </>
  );
}
