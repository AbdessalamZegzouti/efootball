"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
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

interface Account {
  id: string
  title: string
  seller: string
  price: string
  date: string
  status: string
}

interface RecentAccountsProps {
  initialAccounts: Account[]
}

export function RecentAccounts({ initialAccounts }: RecentAccountsProps) {
  const [accounts, setAccounts] = useState(initialAccounts)
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [actionType, setActionType] = useState<"approve" | "reject" | null>(null)
  const { toast } = useToast()

  const handleAction = async (account: Account, type: "approve" | "reject") => {
    setSelectedAccount(account)
    setActionType(type)
    setShowConfirmDialog(true)
  }

  const confirmAction = async () => {
    if (!selectedAccount || !actionType) return

    setIsProcessing(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Remove the account from the list
      setAccounts((prev) => prev.filter((a) => a.id !== selectedAccount.id))

      toast({
        title: actionType === "approve" ? "تم قبول الحساب" : "تم رفض الحساب",
        description:
          actionType === "approve" ? "تم قبول الحساب وسيظهر في قائمة الحسابات المتاحة" : "تم رفض الحساب وإخطار البائع",
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
      setSelectedAccount(null)
      setActionType(null)
    }
  }

  if (accounts.length === 0) {
    return <div className="text-center py-8 text-muted-foreground">لا توجد حسابات في انتظار المراجعة</div>
  }

  return (
    <>
      <div className="space-y-4">
        {accounts.map((account) => (
          <div
            key={account.id}
            className="flex flex-col space-y-2 rounded-md border p-4 hover:border-efootball-pink/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="font-medium">{account.title}</div>
              <Badge variant="outline">{account.id}</Badge>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-muted-foreground">البائع:</div>
              <div>{account.seller}</div>

              <div className="text-muted-foreground">السعر:</div>
              <div className="font-medium">{account.price} درهم</div>

              <div className="text-muted-foreground">التاريخ:</div>
              <div>{account.date}</div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                className="border-red-500 text-red-500 hover:bg-red-50"
                onClick={() => handleAction(account, "reject")}
              >
                <X className="mr-2 h-4 w-4" />
                رفض
              </Button>
              <Button
                size="sm"
                className="bg-green-500 hover:bg-green-600"
                onClick={() => handleAction(account, "approve")}
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
            <AlertDialogTitle>{actionType === "approve" ? "تأكيد قبول الحساب" : "تأكيد رفض الحساب"}</AlertDialogTitle>
            <AlertDialogDescription>
              {actionType === "approve"
                ? "هل أنت متأكد من قبول هذا الحساب؟ سيظهر في قائمة الحسابات المتاحة."
                : "هل أنت متأكد من رفض هذا الحساب؟ سيتم إخطار البائع."}
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

