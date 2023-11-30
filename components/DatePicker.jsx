'use client';
import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';

import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

const DatePicker = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* <Button vatiant={'default'} className={
          cn('w-full ju')
        }> 

        </Button> */}
      </PopoverTrigger>
    </Popover>
  )
}

export default DatePicker