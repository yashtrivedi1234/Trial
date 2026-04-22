import React from 'react'
import HeroSection from './components/Herosection'
import KaashtKartAbout from './components/Kaashtkartabout'
import CategoryCarousel from './components/CategoryCarousel'
import FarmSection from './components/FarmSection'
import FeaturedProducts from './components/FeaturedProducts'

const HomePage = () => {
  return (
    <>
    <HeroSection />
    <KaashtKartAbout />
    {/* <CategoryCarousel /> */}
    <FarmSection />
    <FeaturedProducts />
    </>
  )
}

export default HomePage