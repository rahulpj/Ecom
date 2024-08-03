import React from 'react'
import MainCarousel from '../HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../data/mens_kurta'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/>
            
        </div>
    </div>
  )
}

export default HomePage