import { ChevronRight } from 'lucide-react';
import React from 'react';
import Features from '../Features/Features';

const PricingCard = ({pricing}) => {
    console.log(pricing)
    return (
        <div className='  rounded-2xl p-4'>
            <h1 className='text-black font-bold text-4xl'>{pricing.name}</h1>
            <h2 className='text-black font-bold'>{pricing.price}</h2>
            {/* <h4 className='text-white '>{pricing.duration}</h4> */}
            <Features pricing={pricing}></Features>
            <button className='btn w-full mt-5 font-bold text-2xl'>Subscribe</button>
        </div>
    );
};

export default PricingCard;