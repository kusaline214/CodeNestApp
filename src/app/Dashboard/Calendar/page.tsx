"use client";

import React from 'react';
import Calendar from './components/calendar';
import MonthlySummary from './components/MonthlySummary';

const Page = () => {
  return (
    <div className='p-20' >
      <MonthlySummary monthlyTransactions={[]} />

      <Calendar
        monthlyTransactions={[]}
        setCurrentDay={() => { }}
        currentDay={''}
        setCurrentMonth={() => { }}
        today={''}
        onDateClick={() => { }}
      />
    </div>
  );
}

export default Page;