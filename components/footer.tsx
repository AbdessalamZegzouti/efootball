import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Youtube, Instagram, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-efootball-blue via-efootball-blue to-black" />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat animate-slide" />
      </div>

      <div className="relative container px-4 py-16">
        {/* Newsletter Section */}
        <div className="mb-16 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">اشترك في نشرتنا البريدية</h2>
          <p className="text-gray-300 mb-6">احصل على آخر العروض والتحديثات مباشرة إلى بريدك الإلكتروني</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400
                       focus:border-white focus:ring-2 focus:ring-white/20"
            />
            <Button
              className="bg-white text-efootball-blue hover:bg-white/90
                       transform transition-all hover:scale-105 active:scale-95"
            >
              اشتراك
              <ArrowRight className="mr-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-xl overflow-hidden bg-white/10 p-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IY4nmtzcRb6dNfOn0RVlovahchI4c3.png"
                  alt="DexterShop Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">DexterShop</span>
                <span className="text-sm text-gray-400">متجر حسابات Efootball</span>
              </div>
            </Link>
            <p className="text-gray-300">المنصة الأولى لبيع وشراء حسابات Efootball بأمان وضمان.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/accounts"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  تصفح الحسابات
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  كيف يعمل
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">المساعدة</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  شروط الاستخدام
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  الدعم الفني
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">تواصل معنا</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-efootball-pink" />
                azegzouti3@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <span className="flex items-center gap-2">
                  <span className="text-efootball-pink">📞</span>
                  212621947493+
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex items-center gap-2">
                  <span className="text-efootball-pink">📍</span>
                  مراكش، المغرب
                </span>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-center text-gray-400 space-y-2">
            <p className="text-sm">
              Made By Zegzouti Abdessalam &copy; {new Date().getFullYear()} DexterShop. جميع الحقوق محفوظة.
            </p>
            <div className="text-xs">
              <Link href="/terms" className="hover:text-white">
                شروط الاستخدام
              </Link>
              <span className="mx-2">•</span>
              <Link href="/privacy" className="hover:text-white">
                سياسة الخصوصية
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

