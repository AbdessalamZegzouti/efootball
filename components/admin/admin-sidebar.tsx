"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Home, Package, CreditCard, Users, Settings, Menu, LogOut, Shield } from "lucide-react"

export function AdminSidebar() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/admin/dashboard",
      label: "لوحة التحكم",
      icon: Home,
      active: pathname === "/admin/dashboard",
    },
    {
      href: "/admin/accounts",
      label: "الحسابات",
      icon: Package,
      active: pathname === "/admin/accounts",
    },
    {
      href: "/admin/transactions",
      label: "المعاملات",
      icon: CreditCard,
      active: pathname === "/admin/transactions",
    },
    {
      href: "/admin/users",
      label: "المستخدمين",
      icon: Users,
      active: pathname === "/admin/users",
    },
    {
      href: "/admin/settings",
      label: "الإعدادات",
      icon: Settings,
      active: pathname === "/admin/settings",
    },
  ]

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">فتح القائمة</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="p-0">
          <ScrollArea className="h-full py-6">
            <div className="flex flex-col gap-4 px-4 py-2">
              <Link href="/admin/dashboard" className="flex items-center gap-2 px-4 py-2 text-lg font-semibold">
                <Shield className="h-5 w-5" />
                لوحة المسؤول
              </Link>
              <nav className="flex flex-col gap-1">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted",
                      route.active ? "bg-muted" : "transparent",
                    )}
                  >
                    <route.icon className="h-5 w-5" />
                    {route.label}
                  </Link>
                ))}
              </nav>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      <div className="hidden w-64 flex-col border-l bg-muted/40 md:flex">
        <ScrollArea className="flex-1">
          <div className="flex flex-col gap-4 px-4 py-6">
            <Link href="/admin/dashboard" className="flex items-center gap-2 px-4 py-2 text-lg font-semibold">
              <Shield className="h-5 w-5" />
              لوحة المسؤول
            </Link>
            <nav className="flex flex-col gap-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted",
                    route.active ? "bg-muted" : "transparent",
                  )}
                >
                  <route.icon className="h-5 w-5" />
                  {route.label}
                </Link>
              ))}
            </nav>
          </div>
        </ScrollArea>
        <div className="border-t p-4">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/">
              <LogOut className="mr-2 h-4 w-4" />
              تسجيل الخروج
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}

