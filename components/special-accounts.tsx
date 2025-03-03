import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function SpecialAccounts() {
  const specialAccounts = [
    {
      id: "special1",
      title: "حساب Efootball ليونيل ميسي 2023",
      price: "3,500",
      features: ["ميسي 99 تقييم", "جميع لاعبي برشلونة التاريخيين", "عملات 100,000+"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "special2",
      title: "حساب Efootball كريستيانو رونالدو 2023",
      price: "3,200",
      features: ["رونالدو 98 تقييم", "جميع لاعبي ريال مدريد التاريخيين", "عملات 90,000+"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {specialAccounts.map((account) => (
        <Card key={account.id} className="overflow-hidden bg-white border-efootball-blue">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-full min-h-[200px]">
              <Image src={account.image || "/placeholder.svg"} alt={account.title} fill className="object-cover" />
              <div className="absolute top-2 right-2">
                <Badge className="bg-efootball-pink text-white">خاص</Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-efootball-blue mb-2">{account.title}</h3>
              <ul className="mb-4 space-y-1">
                {account.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <span className="mr-2 text-efootball-pink">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mb-4 text-2xl font-bold text-efootball-pink">{account.price} درهم</div>
              <Button className="w-full bg-efootball-pink hover:bg-efootball-pink/90 text-white" asChild>
                <Link href={`/accounts/${account.id}`}>عرض التفاصيل</Link>
              </Button>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  )
}

