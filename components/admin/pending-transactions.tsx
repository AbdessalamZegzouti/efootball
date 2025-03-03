"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, ExternalLink } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"

interface Transaction {
  id: string
  account: string
  seller: string
  buyer: string
  amount: string
  date: string
  receiptImage?: string
  whatsappNumber: string
}

export function PendingTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "T5",
      account: "حساب Efootball ممتاز",
      seller: "أحمد محمد",
      buyer: "خالد علي",
      amount: "1,200",
      date: "20 مارس 2023",
      receiptImage: "/placeholder.svg?height=400&width=300",
      whatsappNumber: "+212621947493",
    },
    {
      id: "T6",
      account: "حساب Efootball محترف",
      seller: "محمد علي",
      buyer: "سارة أحمد",
      amount: "2,500",
      date: "18 مارس 2023",
      receiptImage: "/placeholder.svg?height=400&width=300",
      whatsappNumber: "+212621947493",
    },
    {
      id: "T7",
      account: "حساب Efootball للمبتدئين",
      seller: "علي محمود",
      buyer: "فاطمة خالد",
      amount: "500",
      date: "15 مارس 2023",
      receiptImage: "/placeholder.svg?height=400&width=300",
      whatsappNumber: "+212621947493",
    },
  ])

  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [actionType, setActionType] = useState<"approve" | "reject" | null>(null)
  const { toast } = useToast()

  const handleAction = async (transaction: Transaction, type: "approve" | "reject") => {
    setSelectedTransaction(transaction)
    setActionType(type)
    setShowConfirmDialog(true)
  }

  const confirmAction = async () => {
    if (!selectedTransaction || !actionType) return

    setIsProcessing(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Remove the transaction from the list
      setTransactions((prev) => prev.filter((t) => t.id !== selectedTransaction.id))

      toast({
        title: actionType === "approve" ? "تم قبول المعاملة" : "تم رفض المعاملة",
        description:
          actionType === "approve" ? "سيتم إخطار المشتري وإتمام العملية" : "سيتم إخطار المشتري برفض المعاملة",
        variant: actionType === "approve" ? "default" : "destructive",
      })
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "لم نتمكن من معالجة طلبك. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
      setShowConfirmDialog(false)
      setSelectedTransaction(null)
      setActionType(null)
    }
  }

  const openWhatsApp = (number: string) => {
    window.open(`https://wa.me/${number}`, "_blank")
  }

  if (transactions.length === 0) {
    return <div className="text-center py-8 text-muted-foreground">لا توجد معاملات في انتظار المراجعة</div>
  }

  return (
    <>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex flex-col space-y-2 rounded-md border p-4 hover:border-efootball-pink/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="font-medium">{transaction.account}</div>
              <Badge variant="outline">{transaction.id}</Badge>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-muted-foreground">البائع:</div>
              <div>{transaction.seller}</div>

              <div className="text-muted-foreground">المشتري:</div>
              <div>{transaction.buyer}</div>

              <div className="text-muted-foreground">المبلغ:</div>
              <div className="font-medium">{transaction.amount} درهم</div>

              <div className="text-muted-foreground">التاريخ:</div>
              <div>{transaction.date}</div>
            </div>

            {transaction.receiptImage && (
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
                <Image
                  src={transaction.receiptImage || "/placeholder.svg"}
                  alt="إيصال الدفع"
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex items-center justify-between gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => openWhatsApp(transaction.whatsappNumber)}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-red-500 text-red-500 hover:bg-red-50"
                onClick={() => handleAction(transaction, "reject")}
              >
                <X className="mr-2 h-4 w-4" />
                رفض
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-green-500 hover:bg-green-600"
                onClick={() => handleAction(transaction, "approve")}
              >
                <Check className="mr-2 h-4 w-4" />
                قبول
              </Button>
            </div>
          </div>
        ))}
      </div>

      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {actionType === "approve" ? "تأكيد قبول المعاملة" : "تأكيد رفض المعاملة"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {actionType === "approve"
                ? "هل أنت متأكد من قبول هذه المعاملة؟ سيتم إخطار المشتري وإتمام العملية."
                : "هل أنت متأكد من رفض هذه المعاملة؟ سيتم إخطار المشتري برفض المعاملة."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isProcessing}>إلغاء</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmAction}
              disabled={isProcessing}
              className={actionType === "approve" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}
            >
              {isProcessing ? "جاري المعالجة..." : actionType === "approve" ? "تأكيد القبول" : "تأكيد الرفض"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

