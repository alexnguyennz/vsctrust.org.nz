import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CollectionEntry } from "astro:content";

function ProductImage({
  image,
  onExpand,
}: {
  image: any;
  onExpand: (image: CollectionEntry<"dosomegoodImages">) => void;
}) {
  return (
    <motion.img
      onClick={() => onExpand(image)}
      src={image.data.image.src}
      alt={image.data.title}
      className="cursor-pointer rounded-lg object-cover"
      layoutId={`image-${image.id}`}
    />
  );
}

export function Gallery({
  imageData,
}: {
  imageData: CollectionEntry<"dosomegoodImages">[];
}) {
  const [images, setImages] = useState(imageData);
  const [primaryImage, setPrimaryImage] = useState<
    CollectionEntry<"dosomegoodImages">
  >(images[0]);

  function setAsPrimary(selectedImage: CollectionEntry<"dosomegoodImages">) {
    // Reorder the images by placing the previously primary image at the bottom
    const newImages = [
      ...images.filter((image) => image.id !== selectedImage.id),
      primaryImage,
    ];

    // Re-render the gallery with updated image positions
    setPrimaryImage(selectedImage);
    setImages(newImages);
  }

  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`,
  );

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

      <aside className="flex h-[200px] gap-6 overflow-auto pr-6 lg:grid lg:h-[600px] lg:grid-cols-1 xl:col-span-2 xl:grid-cols-2">
        <AnimatePresence>
          {images.slice(1).map((image) => (
            <ProductImage
              key={image.id}
              image={image}
              onExpand={setAsPrimary}
            />
          ))}
        </AnimatePresence>
      </aside>
    </div>
  );
}
