import { useEffect, useState } from 'react'
import type { ImageMetadata } from 'astro'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const importImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/gallery/*',
)

const GalleryCard = () => {
  const [imagePaths, setImagePaths] = useState<{ src: string; alt: string }[]>(
    [],
  )

  useEffect(() => {
    const loadImages = async () => {
      const paths = Object.keys(importImages).filter((imagePath) =>
        imagePath.startsWith('/src/assets/gallery/'),
      )

      const images = await Promise.all(
        paths.map(async (imagePath) => {
          const image = await importImages[imagePath]()
          return {
            src: image.default.src,
            alt: `Image at ${imagePath}`,
          }
        }),
      )
      setImagePaths(images)
    }

    loadImages()
  }, [])

  return (
    <Card className="flex h-full flex-col justify-between p-2 md:grid md:grid-cols-2 md:items-center md:gap-12 lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:grid-cols-none lg:gap-0">
      <CardHeader>
        <CardTitle className="font-medium tracking-tight text-primary md:text-6xl">
          Gallery
        </CardTitle>
        <CardDescription className="mt-4 text-sm">
          One day, you'll leave this world behind so live a life you will
          remember.
        </CardDescription>
      </CardHeader>
      <CardContent className="columns-1 gap-4 md:columns-2">
        {imagePaths.map((image, index) => (
          <img
            key={index}
            className="mt-4 h-auto max-w-full rounded-lg"
            src={image.src}
            alt={image.alt}
          />
        ))}
      </CardContent>
    </Card>
  )
}

export default GalleryCard
