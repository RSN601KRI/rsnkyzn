export const dynamic = "force-dynamic";
import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

const socialPhotosDir = path.join(process.cwd(), "public/photos/social");
let socialPhotoFiles: string[] = [];
try {
  socialPhotoFiles = fs
    .readdirSync(socialPhotosDir)
    .filter((file) => /\.(jpe?g|png|gif|webp)$/i.test(file));
  console.log("Social photo files:", socialPhotoFiles);
} catch (e) {
  // Folder may not exist yet
  socialPhotoFiles = [];
  console.error("Error reading social photos:", e);
}

function isValidImageFile(file) {
  return /\.(jpe?g|png|webp)$/i.test(file);
}

const photosDir = path.join(process.cwd(), "public/photos");
let mainPhotoFiles = [];
try {
  mainPhotoFiles = fs
    .readdirSync(photosDir)
    .filter((file) => {
      const isImage = isValidImageFile(file);
      const isFile = isImage && fs.statSync(path.join(photosDir, file)).isFile();
      if (!isImage) console.log("Skipping non-image file:", file);
      if (isImage && !isFile) console.log("Skipping non-file entry:", file);
      return isImage && isFile;
    });
  console.log("Main photo files:", mainPhotoFiles);
} catch (e) {
  mainPhotoFiles = [];
  console.error("Error reading main photos:", e);
}

// Only use the first 10 valid images for the Photos section
const selectedPhotoFiles = mainPhotoFiles.slice(0, 10);

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Photos</h1>
      <ImageGrid
        columns={3}
        images={selectedPhotoFiles
          .map((file) => {
            try {
              return {
                src: `/photos/${file}`,
                alt: file.replace(/[-_]/g, ' ').replace(/\.[^.]+$/, '').replace(/\b\w/g, c => c.toUpperCase()),
              };
            } catch (err) {
              console.error("Error rendering image:", file, err);
              return null;
            }
          })
          .filter(Boolean)
        }
        borderFrame
      />
      {socialPhotoFiles.length > 0 && (
        <div className="mt-16 py-10 px-2 sm:px-6 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="mb-6 text-xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">Social & Design Work</h2>
          <p className="mb-8 text-neutral-400 text-sm">A selection of my social and design work. To add more, upload images to <code className='bg-neutral-800 px-2 py-1 rounded'>public/photos/social</code>.</p>
          <ImageGrid
            columns={3}
            images={socialPhotoFiles.map((file, i) => ({
              src: `/photos/social/${file}`,
              alt: `Social/Design Work ${i + 1}`,
              caption: file.replace(/[-_]/g, ' ').replace(/\.[^.]+$/, '').replace(/\b\w/g, c => c.toUpperCase()),
            }))}
            borderFrame
          />
        </div>
      )}
    </section>
  );
}
