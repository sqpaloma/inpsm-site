import type { MediaItem } from "./types";

// Lâmina de Vídeos e Artigos. Para publicar, adicione itens nas listas abaixo.
// Vídeos: URL do YouTube (watch, youtu.be ou shorts) — é exibido o player incorporado.
// Artigos: qualquer URL (LinkedIn, blog, PDF…) — é exibido um card com link.
//
// Exemplo:
// { title: "Título do vídeo", url: "https://www.youtube.com/watch?v=XXXXXXXXXXX" }
// { title: "Título do artigo", url: "https://www.linkedin.com/pulse/...", meta: "LinkedIn · Out/2026" }
export const videos: MediaItem[] = [];

export const articles: MediaItem[] = [];
