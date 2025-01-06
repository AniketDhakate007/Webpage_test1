import React from 'react'
import { Spotlight } from './ui/spotlight'
import { HeroParallax } from './ui/hero-parallax'
import { products } from '@/app/page'
import { NavbarDemo } from '@/app/page'

  function Hero() {
    return (
      <div className="pb-20 pt-36">
        <div>
          <HeroParallax products={products} />
          <NavbarDemo />
        </div>

      </div>
    )
  }

export default Hero
