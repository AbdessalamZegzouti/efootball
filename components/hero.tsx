"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="relative overflow-hidden">
      {/* Hero Banner */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main_page_1-FebAqxQFhn4gRdSYP3WXRfdGtTmJ2M.png"
          alt="eFootball Hero Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-efootball-pink/90 to-efootball-pink/50" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="min-h-[90vh] flex items-center"
        >
          <div className="max-w-2xl text-white">
            <motion.h1 variants={itemVariants} className="mb-6 text-5xl font-bold md:text-7xl">
              سوق حسابات
              <br />
              <span className="text-efootball-yellow">Efootball</span>
              <br />
              الآمن
            </motion.h1>
            <motion.p variants={itemVariants} className="mb-8 text-lg md:text-xl text-gray-100">
              بيع وشراء حسابات Efootball بكل أمان وضمان. نحن نتوسط بين البائع والمشتري لضمان عملية آمنة وسريعة.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                size="lg"
                className="bg-efootball-yellow hover:bg-efootball-yellow/90 text-efootball-blue w-full sm:w-auto
                          transform transition-all hover:scale-105 active:scale-95"
                asChild
              >
                <Link href="/accounts">تصفح الحسابات</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto
                          transform transition-all hover:scale-105 active:scale-95"
                asChild
              >
                <Link href="/login">بيع حسابك</Link>
              </Button>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              className="absolute top-1/4 right-[10%] glass rounded-lg p-4 hidden md:block"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <span className="text-white font-bold">+1000 حساب</span>
            </motion.div>
            <motion.div
              className="absolute bottom-1/4 right-[20%] glass rounded-lg p-4 hidden md:block"
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <span className="text-white font-bold">ضمان 100%</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

