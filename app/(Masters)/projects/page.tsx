"use client"

import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Projects() {
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-3">
        <Select>
          <SelectTrigger className="w-[160px] h-[30px] text-xs">
            <SelectValue placeholder="➕ Select a project" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className=" h-[30px] text-xs">Projects</SelectLabel>
              <SelectItem className=" h-[30px] text-xs" value="p-1">
                P-1
              </SelectItem>
              <SelectItem className=" h-[30px] text-xs" value="p-2">
                P-2
              </SelectItem>
              <SelectItem className=" h-[30px] text-xs" value="p-3">
                P-3
              </SelectItem>
              <SelectItem className=" h-[30px] text-xs" value="p-4">
                P-4
              </SelectItem>
              <SelectItem className=" h-[30px] text-xs" value="p-5">
                P-5
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>
    </>
  )
}
