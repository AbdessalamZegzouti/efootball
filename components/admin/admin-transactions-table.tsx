"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"
import { MoreHorizontal, Eye, Check, X, ExternalLink } from "lucide-react"
import Image from "next/image"

export function AdminTransactionsTable() {
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null)
  const [isVerifying, setIsVerifying] = useState(false)

  const transactions = [
    {
      id: "T1",
      account: "حساب Efootball مميز",
      buyer: "محمد أحمد",
      amount: "950",
      status: "قيد الانتظار",
      date: "15 مارس 2023",
      receiptImage: "/placeholder.svg?height=400&width=300",
      whatsappNumber: "+212612345678",
    },
    {
      id: "T2",
      account: "حساب Efootball للمبتدئين",
      buyer: "علي محمود",
      amount: "500",
      status: "قيد الانتظار",
      date: "10 مارس 2023",
      receiptImage: "/placeholder.svg?height=400&width=300",
      whatsappNumber: "+212612345679",
    },
    {
      id: "T3",
      account: "حساب Efootball محترف",
      buyer: "أحمد خالد",
      amount: "2,500",
      status: "ملغية",
      date: "5 مارس 2023",
      receiptImage: "/placeholder.svg?height=400&width=300",
      whatsappNumber: "+212612345680",
    },
    {
      id: "T4",
      account: "حساب Efootball احترافي",
      buyer: "سارة محمد",
      amount: "1,800",
      status: "قيد التنفيذ",
      date: "1 مارس 2023",
      receiptImage: "/placeholder.svg?height=400&width=300",
      whatsappNumber: "+212612345681",
    },
  ]

  const handleVerify = async (approved: boolean) => {
    setIsVerifying(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsVerifying(false)
    setSelectedTransaction(null)

    toast({
      title: approved ? "تم قبول الدفع" : "تم رفض الدفع",
      description: approved ? "سيتم إخطار المشتري وإتمام العملية" : "سيتم إخطار المشتري برفض الدفع",
    })
  }

  const openWhatsApp = (number: string) => {
    window.open(`https://wa.me/${number}`, "_blank")
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>رقم المعاملة</TableHead>
              <TableHead>الحساب</TableHead>
              <TableHead>المشتري</TableHead>
              <TableHead>المبلغ</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>التاريخ</TableHead>
              <TableHead className="text-left">الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.id}</TableCell>
                <TableCell>{transaction.account}</TableCell>
                <TableCell>{transaction.buyer}</TableCell>
                <TableCell>{transaction.amount} درهم</TableCell>
                <TableCell>
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
                </TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">فتح القائمة</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>الإجراءات</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => setSelectedTransaction(transaction)}>
                        <Eye className="mr-2 h-4 w-4" />
                        <span>التحقق من الدفع</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => openWhatsApp(transaction.whatsappNumber)}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        <span>فتح WhatsApp</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!selectedTransaction} onOpenChange={() => setSelectedTransaction(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>التحقق من الدفع</DialogTitle>
            <DialogDescription>مراجعة إيصال الدفع للمعاملة رقم {selectedTransaction?.id}</DialogDescription>
          </DialogHeader>
          {selectedTransaction && (
            <div className="space-y-4">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                <Image
                  src={selectedTransaction.receiptImage || "/placeholder.svg"}
                  alt="إيصال الدفع"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  className="w-full border-red-500 text-red-500 hover:bg-red-50"
                  onClick={() => handleVerify(false)}
                  disabled={isVerifying}
                >
                  <X className="mr-2 h-4 w-4" />
                  رفض الدفع
                </Button>
                <Button
                  className="w-full bg-green-500 hover:bg-green-600"
                  onClick={() => handleVerify(true)}
                  disabled={isVerifying}
                >
                  <Check className="mr-2 h-4 w-4" />
                  قبول الدفع
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

