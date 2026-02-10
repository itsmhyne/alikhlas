// app/fonts.ts
import { Amiri, Inter } from "next/font/google";

export const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const inter = Inter({
  subsets: ["latin"],
});
