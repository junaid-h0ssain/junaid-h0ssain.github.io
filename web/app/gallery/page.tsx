import type { Metadata } from "next"
import { GalleryGrid } from "@/components/gallery-grid"

export const metadata: Metadata = {
  title: "Junaid Hossain - Gallery",
  description:
    "Photos and memories by Junaid Hossain — travel, builds, and everyday moments.",
}

export default function GalleryPage() {
  return (
    <div className="wrap section-pad" style={{ paddingBottom: 0 }}>
      <div className="section-head">
        <p className="mono-label">Gallery</p>
        <h1
          className="font-display mt-3"
          style={{
            fontSize: "clamp(2.2rem,5vw,3.6rem)",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          Photos and Memories
        </h1>
        <p className="mt-4">Travel, builds, and everyday moments...</p>
      </div>
      <div className="rule my-8" />
      <GalleryGrid />
    </div>
  )
}
