'use client';

import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/accordion';
import { PieCharts } from './PieChart';
import { BarCharts } from './BarCharts';
import { BarChartHorizontal } from './BarChartHorizontal';
import { PlacementTable } from './placementTable';
import data from '../data/data.json';

const PlacementStatisticsUG = () => {
  const years = data.years;

  // Set the initial state to open the first item
  const [openYear, setOpenYear] = useState(years[0].year);

  return (
    <div
      id='placement-statistics-ug'
      className='h-full flex flex-col justify-center items-center'
    >
      <h2 className='font-bold text-xl mb-10 my-8'>Placement Statistics</h2>
      <div className='lg:mx-8 lg:w-[80%] lg:mb-4 w-[80%] mb-6 mx-5'>
        <Accordion
          className='gap-4 items-center'
          type='single'
          collapsible
          value={openYear}
          onValueChange={setOpenYear}
        >
          {years.map((yearData) => (
            <AccordionItem
              key={yearData.year}
              value={yearData.year}
              className='mb-4'
            >
              <AccordionTrigger className='flex items-center justify-between p-4 bg-[#B2C1AD] rounded-[10px] cursor-pointer hover:bg-gray-300 transition'>
                <span className='text-gray-800'>Year {yearData.year}</span>
              </AccordionTrigger>
              <AccordionContent className='w-full mt-6 bg-[#B2C1AD] rounded-[15px] flex flex-col items-center justify-center'>
                <div className='w-full h-full'>
                  <PlacementTable year={yearData.year} />
                </div>
                <div className='w-full h-full'>
                  <PieCharts />
                </div>
                <div className='w-full h-full'>
                  <BarCharts />
                </div>
                <div className='w-full h-full'>
                  <BarChartHorizontal />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default PlacementStatisticsUG;
