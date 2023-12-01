"use client";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { MapPin } from "lucide-react";

import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import DatePicker from "./DatePicker";

const SearchBox = () => {
  return (
    <div className="bg-pink">
      {/* input, calendar, date picker */}
      <div>
        <Label htmlFor="destination">Where are you going?</Label>
        {/* input & icon */}
        <div className="relative flex items-center mb-[20px]">
          <Input id="destination" placeholder='try "Singapore"' />
          <MapPin size={24} className="absolute right-6 text-black" />
        </div>
        {/* date picker */}
        <div>
          {/* check-in */}
          <div>
            <Label>Check in</Label>
            <DatePicker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
