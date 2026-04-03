"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
};

export default function ImageZoomModal({ src, alt }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <div
        className="w-full h-96 relative cursor-pointer bg-gray-100"
        onClick={() => setIsOpen(true)}
      >
        <Image src={src} alt={alt} fill className="object-contain p-4" />
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => {
            setIsOpen(false);
            setZoomed(false);
          }}
        >
          <button
            className="absolute top-4 right-6 text-white text-3xl font-bold z-50"
            onClick={() => {
              setIsOpen(false);
              setZoomed(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="relative w-[80vw] h-[80vh]"
            onClick={(e) => {
              e.stopPropagation();
              setZoomed((prev) => !prev);
            }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className={`object-contain transition-transform duration-300 ${
                zoomed
                  ? "scale-150 cursor-zoom-out"
                  : "scale-100 cursor-zoom-in"
              }`}
            />
          </div>
        </div>
      )}
    </>
  );
}
