import { Button } from "@/components/ui/button"
import { FeaturedAccounts } from "@/components/featured-accounts"
import { HowItWorks } from "@/components/how-it-works"
import { Hero } from "@/components/hero"
import { LatestListings } from "@/components/latest-listings"
import { InfoSection } from "@/components/info-section"
import { SpecialAccounts } from "@/components/special-accounts"
import { YellowLightning } from "@/components/decorations/yellow-lightning"

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />

      <div className="relative bg-efootball-yellow py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-efootball-blue">أحدث الحسابات</h2>
          <LatestListings />
        </div>
      </div>

      <div className="relative bg-efootball-blue py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">معلومات</h2>
          <InfoSection />
        </div>
      </div>

      <div className="relative bg-efootball-blue py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">كيف يعمل</h2>
          <HowItWorks />
        </div>
      </div>

      <div className="relative bg-efootball-blue py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">حسابات مميزة</h2>
          <FeaturedAccounts />
        </div>
      </div>

      <div className="relative bg-efootball-yellow py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-efootball-blue">حسابات خاصة</h2>
          <SpecialAccounts />
        </div>
        <YellowLightning className="absolute -bottom-1 left-0 right-0 z-10" />
      </div>

      <div className="mt-12 text-center">
        <Button size="lg" className="bg-efootball-pink hover:bg-efootball-pink/90 text-white">
          <a href="/accounts">تصفح جميع الحسابات</a>
        </Button>
      </div>
    </div>
  )
}

