"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { DropdownMenuNotification } from "./notification-dropdown"
import { DropdownMenuProfile } from "./profile-header-dropdown"
import { SidebarToggle } from "./sidebar-toggle"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <SidebarToggle />
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href={siteConfig.links.twitter} rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.settings className="h-5 w-5 " />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <DropdownMenuNotification />
            <ThemeToggle />
            <DropdownMenuProfile />
          </nav>
        </div>
      </div>
    </header>
  )
}
