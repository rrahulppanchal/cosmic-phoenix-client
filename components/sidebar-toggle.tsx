"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Icons } from "./icons"

export function SidebarToggle() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 448 512"
          >
            <path
              fill={"dark" ? "#555" : "#11111"}
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <SheetClose asChild>
              <Link href="/" className="flex items-center space-x-2">
                <Icons.logo className="h-6 w-6" />
                <span className="inline-block font-bold">
                  {siteConfig.name}
                </span>
              </Link>
            </SheetClose>
          </SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <SheetClose asChild>
            <Link href="/tasks" className="flex items-center space-x-2">
              <Button className="w-full">Tasks</Button>
            </Link>
          </SheetClose>
        </div>{" "}
        <SheetFooter>
          {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
