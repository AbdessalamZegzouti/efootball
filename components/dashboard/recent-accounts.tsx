import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentAccounts() {
  const accounts = [
    {
      id: "1",
      title: "حساب Efootball ممتاز",
      price: "1,200",
      status: "للبيع",
      date: "منذ 2 أيام",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      title: "حساب Efootball محترف",
      price: "2,500",
      status: "للبيع",
      date: "منذ 5 أيام",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "3",
      title: "حساب Efootball مميز",
      price: "950",
      status: "تم البيع",
      date: "منذ أسبوع",
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="space-y-4">
      {accounts.map((account) => (
        <div key={account.id} className="flex items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={account.image} alt={account.title} />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{account.title}</p>
              <Badge variant={account.status === "للبيع" ? "outline" : "secondary"}>{account.status}</Badge>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <p>{account.price} درهم</p>
              <p>{account.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

