import type { VercelRequest, VercelResponse } from "@vercel/node";
const spotifyUrlInfo = require("spotify-url-info");

const { getPreview } = spotifyUrlInfo(fetch) as {
  getPreview: (url: string) => Promise<{
    title: string;
    artist: string;
    image: string;
    link: string;
    audio: string;
  }>;
};

function normalizeSpotifyUrl(url: string): string {
  return url.replace(/\/intl-[a-z]{2}\//, "/");
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
  const { url } = request.query;

  if (!url || typeof url !== "string") {
    return response.status(400).json({ error: "URL is required" });
  }

  try {
    const normalizedUrl = normalizeSpotifyUrl(url);
    const data = await getPreview(normalizedUrl);

    return response.status(200).json({
      title: data.title,
      artist: data.artist,
      image: data.image,
      link: data.link,
      audio: data.audio,
    });
  } catch (error) {
    console.error("Spotify fetch error:", error);
    return response.status(500).json({ error: "Failed to fetch Spotify data" });
  }
}
