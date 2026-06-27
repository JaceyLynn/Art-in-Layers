import { ConceptSection } from './components/ConceptSection'
import { ContactCTA } from './components/ContactCTA'
import { ExplodedLayersSection } from './components/ExplodedLayersSection'
import { Footer } from './components/Footer'
import { GallerySection } from './components/GallerySection'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className="bg-[var(--background)] text-[var(--text)]">
      <Navbar />
      <main className="overflow-x-clip">
        <HeroSection />
        <ConceptSection />
        <ExplodedLayersSection />
        <GallerySection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
