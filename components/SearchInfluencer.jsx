import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";

export function SearchInfluencer() {
  return (
    <div className="flex items-center justify-center gap-x-5">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Platform (Any)" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Platform</SelectLabel>
            <SelectItem value="apple">YouTube</SelectItem>
            <SelectItem value="blueberry">Instagram</SelectItem>
            <SelectItem value="pineapple">Facebook</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Location (Any)" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Location</SelectLabel>
            <SelectItem value="apple">New Delhi</SelectItem>
            <SelectItem value="banana">Bengaluru</SelectItem>
            <SelectItem value="blueberry">Mumbai</SelectItem>
            <SelectItem value="grapes">Chandigarh</SelectItem>
            <SelectItem value="pineapple">Chennai</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Followers (Any)" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Followers</SelectLabel>
            <SelectItem value="apple">0 to 1K</SelectItem>
            <SelectItem value="banana">1K to 10K</SelectItem>
            <SelectItem value="blueberry">10K to 100K</SelectItem>
            <SelectItem value="grapes">100K to 1M</SelectItem>
            <SelectItem value="pineapple">1M+</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button>Search</Button>
    </div>
  );
}
