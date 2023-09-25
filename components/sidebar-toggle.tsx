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
          {" "}
          <Icons.menu className="h-5 w-5 fill-current" />
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
