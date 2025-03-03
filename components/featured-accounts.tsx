import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function FeaturedAccounts() {
  const featuredAccounts = [
    {
      id: "1",
      title: "حساب Efootball ممتاز",
      price: "1,200",
      rating: "ممتاز",
      level: 45,
      players: 120,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "2",
      title: "حساب Efootball محترف",
      price: "2,500",
      rating: "نادر",
      level: 78,
      players: 200,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "3",
      title: "حساب Efootball مميز",
      price: "950",
      rating: "جيد جدا",
      level: 32,
      players: 85,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "4",
      title: "حساب Efootball للمبتدئين",
      price: "500",
      rating: "مبتدئ",
      level: 15,
      players: 40,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {featuredAccounts.map((account) => (
        <Link href={`/accounts/${account.id}`} key={account.id}>
          <Card className="h-full overflow-hidden transition-all hover:shadow-md bg-white border-efootball-pink">
            <div className="relative h-48 w-full">
              <Image src={account.image || "/placeholder.svg"} alt={account.title} fill className="object-cover" />
              <div className="absolute top-2 right-2">
                <Badge className="bg-efootball-pink text-white">{account.rating}</Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-efootball-blue">{account.title}</h3>
              <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
                <span>المستوى: {account.level}</span>
                <span>اللاعبين: {account.players}</span>
              </div>
              <div className="mt-2 font-bold text-efootball-pink text-lg text-center">{account.price} درهم</div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="w-full rounded-md bg-efootball-blue p-2 text-center text-sm font-medium text-white">
                عرض التفاصيل
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

