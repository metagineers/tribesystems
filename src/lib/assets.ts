/**
 * Asset manifest — single source of truth for generated media paths.
 * All entries under /media are Higgsfield-generated; each usage site
 * must fall back gracefully when a file is missing (VideoAsset handles
 * video → poster; images ship with the repo once generated).
 */

export const media = {
  heroVideo: "/media/hero-loop.mp4",
  heroPoster: "/media/hero-poster.jpg",
  ambienceVideo: "/media/platform-ambience.mp4",
  aboutTexture: "/media/about-texture.jpg",
  ogCard: "/media/og-card.jpg",
  pillars: {
    "pillar-payments": "/media/pillar-payments.jpg",
    "pillar-data": "/media/pillar-data.jpg",
    "pillar-engage": "/media/pillar-engage.jpg",
  },
  verticals: {
    "vertical-sports": "/media/vertical-sports.jpg",
    "vertical-music": "/media/vertical-music.jpg",
    "vertical-esports": "/media/vertical-esports.jpg",
  },
} as const;

export const logo = {
  main: "/logo.png",
  dark: "/logo-dark.jpg",
  light: "/logo-light.jpg",
} as const;
