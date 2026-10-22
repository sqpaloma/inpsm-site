"use client";

import { ArrowUpRight, FileText, Linkedin, PlayCircle } from "lucide-react";
import { useContent } from "@/lib/i18n";
import { delay } from "@/lib/reveal";
import { articles, videos } from "@/content/media";
import { SITE } from "@/content/site";
import type { MediaItem } from "@/content/types";
import SectionHead from "./SectionHead";

function youtubeId(url: string) {
  const m = url.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/);
  return m ? m[1] : null;
}

function Empty({ text }: { text: string }) {
  return <p className="md-empty">{text}</p>;
}

function VideoCard({ item }: { item: MediaItem }) {
  const id = youtubeId(item.url);
  return (
    <article className="md-card">
      {id ? (
        <div className="md-video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            title={item.title}
            loading="lazy"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : null}
      <h4>{item.title}</h4>
      {item.meta ? <p className="md-meta">{item.meta}</p> : null}
    </article>
  );
}

function ArticleCard({ item, cta }: { item: MediaItem; cta: string }) {
  return (
    <a className="md-card md-article" href={item.url} target="_blank" rel="noopener noreferrer">
      <h4>{item.title}</h4>
      {item.meta ? <p className="md-meta">{item.meta}</p> : null}
      <span className="md-cta">
        {cta}
        <ArrowUpRight size={15} strokeWidth={2.2} />
      </span>
    </a>
  );
}

export default function Media() {
  const c = useContent();
  const m = c.media;

  return (
    <section className="sec" id="conteudos">
      <div className="container">
        <SectionHead label={m.label} title={m.title} />

        <div className="md-grid">
          <div className="md-col" data-rv>
            <h3>
              <PlayCircle size={20} strokeWidth={1.75} />
              {m.videosTitle}
            </h3>
            {videos.length ? (
              <div className="md-list">
                {videos.map((v) => (
                  <VideoCard key={v.url} item={v} />
                ))}
              </div>
            ) : (
              <Empty text={m.empty} />
            )}
          </div>

          <div className="md-col" data-rv style={delay(1, 140)}>
            <h3>
              <FileText size={20} strokeWidth={1.75} />
              {m.articlesTitle}
            </h3>
            {articles.length ? (
              <div className="md-list">
                {articles.map((a) => (
                  <ArticleCard key={a.url} item={a} cta={m.read} />
                ))}
              </div>
            ) : (
              <Empty text={m.empty} />
            )}
          </div>
        </div>

        <a className="md-follow" href={SITE.linkedin} target="_blank" rel="noopener noreferrer" data-rv>
          <Linkedin size={18} strokeWidth={1.75} />
          {m.follow}
          <ArrowUpRight size={15} strokeWidth={2.2} />
        </a>
      </div>
    </section>
  );
}
