import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GetImageResult } from "astro";
import type { CollectionEntry } from "astro:content";

type ProgrammeImage =
  | CollectionEntry<"dosomegoodImages">
  | CollectionEntry<"take10Images">
  | CollectionEntry<"take10AucklandImages">
  | CollectionEntry<"take10arvosImages">
  | CollectionEntry<"genlinkImages">;

function Thumbnail({
  image,
  thumbnailImage,
  onExpand,
}: {
  image: ProgrammeImage;
  thumbnailImage: GetImageResult;
  onExpand: (image: ProgrammeImage) => void;
}) {
  return (
    <motion.img
      onClick={() => onExpand(image)}
      src={thumbnailImage.src}
      alt={image.data.title}
      className="aspect-[4/3] w-full cursor-pointer rounded-lg object-cover"
      layoutId={`image-${image.id}`}
    />
  );
}

export function Gallery({
  imageData,
  thumbnails,
}: {
  imageData: ProgrammeImage[];
  thumbnails: { [key: string]: GetImageResult };
}) {
  const [images, setImages] = useState<ProgrammeImage[]>(imageData);
  const [primaryImage, setPrimaryImage] = useState<ProgrammeImage>(images[0]);

  function setAsPrimary(selectedImage: ProgrammeImage) {
    // Reorder the images by placing the previous primary image at the bottom
    const newImages = [
      ...images.filter((image) => image.id !== selectedImage.id),
      primaryImage,
    ];

    // Re-render the gallery with updated image positions
    setPrimaryImage(selectedImage);
    setImages(newImages);
  }

  return (
    <div className="grid grid-cols-1 gap-6 overflow-hidden lg:grid-cols-4">
      <div className="relative h-[300px] lg:col-span-3 lg:h-full xl:col-span-2">
        <AnimatePresence>
          <motion.img
            key={primaryImage.id}
            src={primaryImage.data.image.src}
            alt={primaryImage.data.title}
            className="absolute left-0 top-0 h-full w-full rounded-lg object-cover"
            layoutId={`image-${primaryImage.id}`}
          />
        </AnimatePresence>
      </div>

      <div className="flex h-[200px] gap-6 overflow-auto pr-6 lg:grid lg:h-[400px] lg:grid-cols-1 xl:col-span-2 xl:grid-cols-2">
        <AnimatePresence>
          {images.slice(1).map((image) => (
            <Thumbnail
              key={image.id}
              image={image}
              thumbnailImage={thumbnails[image.id]}
              onExpand={setAsPrimary}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
