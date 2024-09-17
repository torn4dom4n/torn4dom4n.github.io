import { useEffect, useState, useMemo } from 'react'
import type { ImageMetadata } from 'astro'
import { getImage } from 'astro:assets'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

const importImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/gallery/*',
)

const GalleryCard = () => {
  const [imagePaths, setImagePaths] = useState<{ src: string; alt: string }[]>(
    [],
  )
  const [isLoading, setIsLoading] = useState(true)

  const paths = useMemo(
    () =>
      Object.keys(importImages).filter((imagePath) =>
        imagePath.startsWith('/src/assets/gallery/'),
      ),
    [],
  )

  useEffect(() => {
    const loadImages = async () => {
      const images = await Promise.all(
        paths.map(async (imagePath) => {
          const image = importImages[imagePath]()
          const optimizedImage = await getImage({
            src: image,
          })
          return {
            src: optimizedImage.src,
            alt: `Image at ${imagePath}`,
          }
        }),
      )
      setImagePaths(images)
      setIsLoading(false)
    }

    loadImages()
  }, [paths])

  const ImageDialog = ({ src, alt }: { src: string; alt: string }) => (
    <Dialog>
      <DialogTrigger asChild>
        <img
          className="mt-4 h-auto max-w-full cursor-pointer rounded-lg"
          src={src}
          alt={alt}
        />
      </DialogTrigger>
      <DialogContent className="rounded-lg p-0">
        <img className="rounded-lg object-contain" src={src} alt={alt} />
      </DialogContent>
    </Dialog>
  )

  return (
    <Card className="flex h-full flex-col justify-between p-2 md:grid md:grid-cols-2 md:items-center md:gap-12 lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:grid-cols-none lg:gap-0">
      <CardHeader>
        <CardTitle className="font-medium tracking-tight text-primary md:text-6xl">
          Gallery
        </CardTitle>
        <CardDescription className="mt-4 text-sm">
          One day, you'll leave this world behind, so live a life you will
          remember.
        </CardDescription>
      </CardHeader>
      <CardContent className="columns-1 gap-4 md:columns-2">
        {isLoading ? (
          <p>Loading images...</p>
        ) : (
          imagePaths.map((image, index) => (
            <ImageDialog key={index} src={image.src} alt={image.alt} />
          ))
        )}
      </CardContent>
    </Card>
  )
}

export default GalleryCard
