import "../globals.css";
import { pt } from "@/content/pt";
import { RootHtml, buildMetadata } from "@/lib/layout";

export { viewport } from "@/lib/layout";
export const metadata = buildMetadata(pt);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootHtml c={pt}>{children}</RootHtml>;
}
