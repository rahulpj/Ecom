import React, { useState } from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button } from '@headlessui/react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { mens_kurta } from '../../../data/mens_kurta';

const HomeSectionCarousel = ({data,sectionName}) => {
    const [activeIndex,setActiveIndex]=useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4 },
    };
    const slidePrev=()=>{
        setActiveIndex(activeIndex-1)};
        
    const slideNext=()=>setActiveIndex(activeIndex+1);

    const syncActiveIndex=({item})=>setActiveIndex(item)
    const items = data.slice(activeIndex,data.length).map((item, index) => (
        <HomeSectionCard key={index} product={item} />
    ));

    return [
        <div className="relative px-4 lg:px-8 border">
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className="relative p-5 ">
                <AliceCarousel
                    
                    items={items}
                    disableButtonsControls
                    infinite={false}
                    responsive={responsive}
                    disableDotsControls
                    activeIndex={activeIndex}
                    onSlideChanged={syncActiveIndex}
                />
                {activeIndex!==0 &&<Button 
                    variant="contained" 
                    className="absolute z-50 top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"
                    onClick={slidePrev}
                    aria-label="previous"
                >
                    <KeyboardArrowRightIcon className="transform rotate-180" />
                </Button>}
                {activeIndex<=items.length+5 && <Button 
                    variant="contained"
                    onClick={slideNext} 
                    className="absolute z-50 top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-90"
                    aria-label="next"
                >
                    <KeyboardArrowLeftIcon className="transform rotate-90" />
                </Button>}
            </div>
        </div>
    ];
}

export default HomeSectionCarousel;





