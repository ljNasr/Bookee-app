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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Bookee" width={40} height={40} className="w-10 h-10" />
          <span className="ml-2 text-xl font-bold text-primary">Bookee</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center text-sm font-medium transition-colors hover:text-primary",
                route.active ? "text-primary" : "text-muted-foreground",
              )}
            >
              <route.icon className="w-4 h-4 mr-2" />
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col p-4 space-y-4 bg-white">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-primary p-2 rounded-md",
                  route.active ? "text-primary bg-blue-50" : "text-muted-foreground",
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

