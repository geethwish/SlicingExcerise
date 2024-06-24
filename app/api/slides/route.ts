import { NextRequest, NextResponse } from "next/server";

const slides = [
  {
    video: "http://www.w3schools.com/html/mov_bbb.mp4",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    isVideo: true,
  },
  {
    image:
      "https://drive.google.com/uc?export=view&id=1xFtP5rLA_DNMfx9kWWmMrGVHQf8LAGsL",
    content: "Donec nec justo eget felis facilisis fermentum.",
    isVideo: false,
  },
];

export function GET(req: NextRequest) {
  return NextResponse.json(slides);
}
