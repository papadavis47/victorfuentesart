import { useState } from "react";
import Lightbox, { type LightboxImage } from "./Lightbox";

interface GalleryGridProps {
  paintings: LightboxImage[];
}

export default function GalleryGrid({ paintings }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? paintings.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === paintings.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paintings.map((painting, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden rounded-lg cursor-pointer bg-transparent border-0 p-0 text-left w-full"
            aria-label={`View ${painting.title}`}
          >
            <div className="gallery-image relative aspect-4/3 overflow-hidden rounded-lg">
              <img
                src={painting.src}
                srcSet={painting.srcSet}
                sizes={painting.sizes}
                alt={painting.alt}
                width={painting.width}
                height={painting.height}
                className="w-full h-full object-cover"
                style={painting.objectPosition ? { objectPosition: painting.objectPosition } : undefined}
                loading="lazy"
              />
              {/* Title overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p
                  className="p-4 text-white font-serif text-lg"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {painting.title}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={paintings}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      )}
    </>
  );
}
