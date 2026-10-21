import "../globals.css";
import { en } from "@/content/en";
import { RootHtml, buildMetadata } from "@/lib/layout";

export { viewport } from "@/lib/layout";
export const metadata = buildMetadata(en);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootHtml c={en}>{children}</RootHtml>;
}
