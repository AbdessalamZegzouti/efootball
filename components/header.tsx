"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, User, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "الرئيسية" },
    { href: "/accounts", label: "تصفح الحسابات" },
    { href: "/how-it-works", label: "كيف يعمل" },
    { href: "/contact", label: "اتصل بنا" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-efootball-blue/95 backdrop-blur-md shadow-lg" : "bg-efootball-blue"
      }`}
    >
      <div className="container flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">القائمة</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-gradient-to-br from-efootball-blue to-efootball-pink/90 text-white border-0"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8 mt-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-lg font-bold">DexterShop</span>
                  </motion.div>
                </div>
                <nav className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors
                          ${pathname === item.href ? "bg-white/20 text-white" : "hover:bg-white/10 text-white/80"}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-efootball-yellow">DexterShop</span>
              <span className="text-xs text-white/80">متجر حسابات Efootball</span>
            </div>
          </Link>

          <nav className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors
                  ${
                    pathname === item.href
                      ? "text-efootball-yellow bg-white/10"
                      : "text-white hover:text-efootball-yellow hover:bg-white/5"
                  }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-efootball-yellow"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Search className="h-4 w-4 text-white/60" />
            </div>
            <Input
              type="search"
              placeholder="بحث..."
              className="w-[250px] lg:w-[300px] pr-9 border-white/20 focus:border-white
                       bg-white/10 text-white placeholder:text-white/60
                       backdrop-blur-sm transition-all duration-300
                       focus:ring-2 focus:ring-white/20 hover:border-white/50"
            />
          </div>

          <AnimatePresence mode="wait">
            {isLoggedIn ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", bounce: 0.3 }}
              >
                <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10" asChild>
                  <Link href="/dashboard">
                    <User className="h-5 w-5" />
                    <span className="sr-only">الحساب الشخصي</span>
                    <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-efootball-yellow">
                      <span className="absolute inset-0 rounded-full bg-efootball-yellow animate-ping" />
                    </span>
                  </Link>
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", bounce: 0.3 }}
              >
                <Button
                  className="bg-efootball-yellow hover:bg-efootball-yellow/90 text-efootball-blue
                           shadow-lg shadow-black/20
                           transform transition-all duration-300 hover:scale-105 active:scale-95"
                  asChild
                >
                  <Link href="/login">تسجيل الدخول</Link>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}

