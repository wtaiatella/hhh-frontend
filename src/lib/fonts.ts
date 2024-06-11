import { JetBrains_Mono, Inter, Bitter } from "next/font/google";
//import { JetBrains_Mono as FontMono } from "next/font/google"

//import { GeistMono } from "geist/font/mono"
//import { GeistSans } from "geist/font/sans"
//export const fontSans = GeistSans

export const fontSansInter = Inter({
  subsets: ["latin"],
  variable: "--font-sansInter",
});

export const fontMonoJetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-monoJetBrains",
});

export const fontSerifBitter = Bitter({
  subsets: ["latin"],
  variable: "--font-serifBitter",
});
