import React from 'react'
import Hero from './HomeComponents/Hero'
import HomeCategory from './HomeComponents/HomeCategory'
import PopularProduct from './HomeComponents/PopularProducts/PopularProduct'


const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <HomeCategory></HomeCategory>
      <PopularProduct></PopularProduct>
    </div>
  )
}

export default Home