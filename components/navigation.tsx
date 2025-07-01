"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Bell, MessageSquare, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      active: pathname === "/dashboard",
      icon: Calendar,
    },
    {
      href: "/messages",
      label: "Messages",
      active: pathname === "/messages",
      icon: MessageSquare,
    },
    {
      href: "/notifications",
      label: "Notifications",
      active: pathname === "/notifications",
      icon: Bell,
    },
    {
      href: "/profile",
      label: "Profile",
      active: pathname === "/profile",
      icon: User,
    },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#222222] border-b border-gray-700">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center">
          <div className="w-10 h-10 bg-[#222222] rounded-lg flex items-center justify-center border border-[#22b5f3]/20">
            <Image src="/images/logo.png" alt="Bookee" width={32} height={32} className="w-8 h-8" />
          </div>
          <span className="ml-2 text-xl font-bold text-white">Bookee</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center text-sm font-medium transition-colors hover:text-primary",
                route.active ? "text-primary" : "text-gray-300",
              )}
            >
              <route.icon className="w-4 h-4 mr-2" />
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="text-white hover:bg-gray-700">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col p-4 space-y-4 bg-[#222222] border-t border-gray-700">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-primary p-2 rounded-md",
                  route.active ? "text-primary bg-gray-700" : "text-gray-300",
                )}
                onClick={() => setIsOpen(false)}
              >
                <route.icon className="w-5 h-5 mr-2" />
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

