"use client"

import { useCallback, useEffect, useState } from "react"

interface GalleryItem {
  src: string
  title: string
  tag?: string
}

function shuffle(items: GalleryItem[]) {
  const array = [...items]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export function GalleryGrid() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    fetch("/gallery.json")
      .then((response) =>
        response.ok
          ? response.json()
          : Promise.reject(new Error("Could not load gallery.json"))
      )
      .then((data: GalleryItem[]) => setItems(shuffle(data)))
      .catch((error) => console.error(error))
  }, [])

  const close = useCallback(() => setLightboxIndex(null), [])

  useEffect(() => {
    if (lightboxIndex === null) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close()
      if (event.key === "ArrowLeft") {
        setLightboxIndex((idx) =>
          idx === null ? idx : (idx - 1 + items.length) % items.length
        )
      }
      if (event.key === "ArrowRight") {
        setLightboxIndex((idx) =>
          idx === null ? idx : (idx + 1) % items.length
        )
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [lightboxIndex, items.length, close])

  const current = lightboxIndex !== null ? items[lightboxIndex] : null

  return (
    <>
      <div className="gallery-masonry" aria-live="polite">
        {items.map((item, index) => (
          <figure
            key={`${item.src}-${index}`}
            className="g-item"
            tabIndex={0}
            role="button"
            aria-label={`Open photo: ${item.title}`}
            onClick={() => setLightboxIndex(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault()
                setLightboxIndex(index)
              }
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.src} alt={item.title} loading="lazy" />
            <figcaption>
              <span>{item.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      {items.length === 0 && (
        <p className="mt-6" style={{ opacity: 0.7 }}>
          No photos yet.
        </p>
      )}

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-50 grid place-items-center p-4"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
          onClick={(event) => {
            if (event.target === event.currentTarget) close()
          }}
        >
          <div
            className="card w-full"
            style={{
              maxWidth: "min(92vw, 1000px)",
              maxHeight: "92vh",
              overflow: "auto",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.src}
              alt={current.title}
              style={{
                maxHeight: "76vh",
                width: "100%",
                objectFit: "contain",
                background: "#000",
              }}
            />
            <div className="flex items-center justify-between gap-4 p-4">
              <p className="text-sm" style={{ opacity: 0.75 }}>
                {(lightboxIndex ?? 0) + 1} / {items.length} — {current.title}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="btn btn-sm btn-outline"
                  onClick={() =>
                    setLightboxIndex(
                      ((lightboxIndex ?? 0) - 1 + items.length) % items.length
                    )
                  }
                >
                  Prev
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline"
                  onClick={() =>
                    setLightboxIndex(((lightboxIndex ?? 0) + 1) % items.length)
                  }
                >
                  Next
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                  onClick={close}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
