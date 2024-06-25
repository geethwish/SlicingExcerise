import { NextRequest, NextResponse } from "next/server";

export interface SlidesTypes {
  id: number;
  title: string;
  description: string;
}
const slides: SlidesTypes[] | [] = [
  {
    id: 1,
    title: "Lorem ipsum #1",
    description:
      "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.",
  },
  {
    id: 2,
    title: "Lorem ipsum #2",
    description:
      "Aenean dignissim pellentesque felis sed egestas, ante et vulputate volutpat.",
  },
  {
    id: 3,
    title: "Lorem ipsum #3",
    description: "Eros pede semper est, vitae luctus metus libero eu augue.",
  },
  {
    id: 4,
    title: "Lorem ipsum #4",
    description:
      "Sed libero. In hac habitasse platea dictumst. Morbi nec nunc condimentum.",
  },
  {
    id: 5,
    title: "Lorem ipsum #5",
    description:
      "Sed libero. In hac habitasse platea dictumst. Morbi nec nunc condimentum.",
  },
];

export function GET(req: NextRequest) {
  return NextResponse.json(slides);
}
