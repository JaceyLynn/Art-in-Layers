import assemblyProcess from '../assets/assembly-process.jpg'
import completedRelief from '../assets/completed-relief.png'
import handsOnInteraction from '../assets/hands-on-interaction.jpg'
import laserCutPieces from '../assets/laser-cut-pieces.png'
import printedGuide from '../assets/printed-guide.png'

export type GalleryLayout = 'feature' | 'small-left' | 'small-right' | 'tall' | 'wide'

export type GalleryItem = {
  image: string
  alt: string
  caption: string
  layout: GalleryLayout
  ratio: 'square' | 'landscape'
}

export const galleryItems: GalleryItem[] = [
  {
    image: completedRelief,
    alt: 'Completed layered wood relief puzzle on a warm neutral backdrop.',
    caption: 'Completed relief',
    layout: 'feature',
    ratio: 'square',
  },
  {
    image: assemblyProcess,
    alt: 'Puzzle assembly in progress with pieces aligned over the artwork card.',
    caption: 'Assembly process',
    layout: 'small-left',
    ratio: 'landscape',
  },
  {
    image: laserCutPieces,
    alt: 'Laser-cut wood layers separated around the puzzle base.',
    caption: 'Laser-cut pieces',
    layout: 'small-right',
    ratio: 'square',
  },
  {
    image: printedGuide,
    alt: 'Printed guide card and pieces arranged for visual reference.',
    caption: 'Printed guide',
    layout: 'wide',
    ratio: 'square',
  },
  {
    image: handsOnInteraction,
    alt: 'Hands interacting with the puzzle during tactile assembly.',
    caption: 'Hands-on interaction',
    layout: 'tall',
    ratio: 'landscape',
  },
]
