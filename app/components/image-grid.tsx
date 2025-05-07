import React from "react";
import Image from "next/image";

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
    href?: string;
    caption?: string; // Optional caption
  }[];
  columns?: 2 | 3 | 4; // Accepts 2, 3, or 4 columns
  borderFrame?: boolean; // Optional border frame
  imageClassName?: string; // Optional className for images
}

export const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  columns = 3,
  borderFrame = false,
  imageClassName = '',
}) => {
  const gridClass = {
    2: "grid-cols-2 sm:grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  }[columns];

  return (
    <section>
      <div className={`grid ${gridClass} gap-6 my-8`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`group flex flex-col items-center bg-white/80 dark:bg-neutral-900/80 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200${borderFrame ? ' border border-white/80 dark:border-white/30' : ''}`}
          >
            {image.href ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={image.href}
                className="block w-full"
              >
                <Image
                  alt={image.alt}
                  src={image.src}
                  fill={false}
                  className={`w-auto h-auto max-w-full max-h-[60vh] object-contain transition-transform duration-200 group-hover:scale-105 ${imageClassName}`}
                  priority
                />
              </a>
            ) : (
              <Image
                alt={image.alt}
                src={image.src}
                fill={false}
                className={`w-auto h-auto max-w-full max-h-[60vh] object-contain transition-transform duration-200 group-hover:scale-105 ${imageClassName}`}
                priority
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
