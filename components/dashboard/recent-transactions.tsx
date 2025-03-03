import { Badge } from "@/components/ui/badge"

export function RecentTransactions() {
  const transactions = [
    {
      id: "T1",
      account: "حساب Efootball مميز",
      amount: "950",
      status: "مكتملة",
      date: "15 مارس 2023",
    },
    {
      id: "T2",
      account: "حساب Efootball للمبتدئين",
      amount: "500",
      status: "قيد الانتظار",
      date: "10 مارس 2023",
    },
    {
      id: "T3",
      account: "حساب Efootball محترف",
      amount: "2,500",
      status: "ملغية",
      date: "5 مارس 2023",
    },
  ]

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium">{transaction.account}</p>
            <p className="text-xs text-muted-foreground">{transaction.date}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{transaction.amount} درهم</span>
            <Badge
              variant={
                transaction.status === "مكتملة"
                  ? "default"
                  : transaction.status === "قيد الانتظار"
                    ? "outline"
                    : "secondary"
              }
            >
              {transaction.status}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
}

