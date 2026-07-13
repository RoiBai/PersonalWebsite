import type { ProjectGalleryItem } from "../data/projects";
import ImageWithFallback from "./ImageWithFallback";

type ProcessGalleryProps = {
  items: ProjectGalleryItem[];
  title: string;
  reverse?: boolean;
};

type GalleryCardProps = {
  item: ProjectGalleryItem;
  title: string;
};

function GalleryCard({ item, title }: GalleryCardProps) {
  return (
    <figure className="process-gallery-card" tabIndex={0}>
      <div className="process-gallery-card-inner">
        <div className="process-gallery-image">
          <ImageWithFallback
            src={item.src}
            alt={item.alt}
            title={item.caption ?? title}
            className={`h-full w-full ${item.fit === "contain" ? "!object-contain bg-[#f3eee6]" : ""}`}
          />
        </div>
        {item.caption ? (
          <figcaption className="process-gallery-caption">
            {item.caption}
          </figcaption>
        ) : null}
      </div>
    </figure>
  );
}

export default function ProcessGallery({ items, title, reverse = false }: ProcessGalleryProps) {
  return (
    <div className="process-gallery-viewport">
      <div className={`process-gallery-track ${reverse ? "process-gallery-track-reverse" : ""}`}>
        {items.map((item) => (
          <GalleryCard key={item.src} item={item} title={title} />
        ))}
      </div>
    </div>
  );
}
