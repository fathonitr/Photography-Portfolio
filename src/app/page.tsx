"use client";
import { useState } from "react";
//Mansory Style Grid
type Pictures = {
  id: number;
  title: string;
  imageUrl: string;
};

const pictures: Pictures[] = [
  { id: 1, title: "bagus", imageUrl: "/bagus.jpg" },
  { id: 2, title: "lichtenberg", imageUrl: "/lichtenberg.jpeg" },
  { id: 9, title: "goro", imageUrl: "/goro.jpg" },
  { id: 6, title: "lichtenberg2", imageUrl: "/lichtenberg2.jpeg" },
  { id: 4, title: "umar", imageUrl: "/umar.jpg" },
  { id: 11, title: "alex", imageUrl: "/alex.JPG" },
  { id: 9, title: "wana", imageUrl: "/wanna.jpg" },
  { id: 9, title: "rio", imageUrl: "/rio.jpg" },
  { id: 10, title: "umarutsman", imageUrl: "/umarutsman.jpg" },
  { id: 7, title: "lichtenberg3", imageUrl: "/lichtenberg3.jpeg" },
  { id: 3, title: "novan", imageUrl: "/novan.jpg" },
  { id: 9, title: "fauzi", imageUrl: "/fauzi.jpg" },
  { id: 5, title: "ilham", imageUrl: "/ilham.jpg" },
  { id: 8, title: "kaegar", imageUrl: "/kaegar.jpg" },
  { id: 9, title: "dimas", imageUrl: "/dimas.jpg" },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Pictures | null>(null);

  const openLightbox = (image: Pictures) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4 space-y-4">
      {pictures.map((item) => (
        <div key={item.id} className="break-inside-avoid overflow-hidden">
          <img src={item.imageUrl} alt={item.title} width={600} height={800} className="w-full h-auto" onClick={() => openLightbox(item)} />
        </div>
      ))}
      {/* Lightbox Modal */}
      {isOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={closeLightbox}>
          <div className="relative bg-white p-4 rounded-lg" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-white text-xl" onClick={closeLightbox}>
              &times;
            </button>
            <picture>
              <img src={selectedImage.imageUrl} alt={selectedImage.title} className="max-w-full max-h-screen object-contain" />
            </picture>
          </div>
        </div>
      )}
    </div>
  );
}
