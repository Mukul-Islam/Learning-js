import { Check, ChevronRight } from 'lucide-react';
import React from 'react';

const Features = ({ pricing }) => {
  const { features } = pricing;

  return (
    <div className=' p-4'>
      <ul className='space-y-2'>
        {
          features.map((roll, index) => (
            <li
              key={index}
              className='flex items-center gap-2 text-black text-lg'
            >
              <Check className='text-red-500' size={20} />
              {roll}
            </li>
          ))

        }
      </ul>
      
    </div>
  );
};

export default Features;