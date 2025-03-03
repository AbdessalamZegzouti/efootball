"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, CopyIcon, PhoneIcon as WhatsappIcon, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useToast } from "@/components/ui/use-toast"
import { FileUpload } from "@/components/ui/file-upload"
import { uploadPaymentReceipt } from "@/app/actions/upload"
import { useStore } from "@/lib/store"

interface PaymentInstructionsProps {
  amount: string
  accountId: string
}

export function PaymentInstructions({ amount, accountId }: PaymentInstructionsProps) {
  const [copied, setCopied] = useState(false)
  const [receiptUrl, setReceiptUrl] = useState<string | null>(null)
  const { toast } = useToast()
  const { settings } = useStore()
  const { ribNumber, whatsappNumber } = settings

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    toast({
      title: "تم النسخ!",
      description: "تم نسخ رقم الحساب البنكي",
    })
    setTimeout(() => setCopied(false), 2000)
  }

  const openWhatsApp = () => {
    if (!receiptUrl) {
      toast({
        variant: "destructive",
        title: "خطأ",
        description: "يرجى رفع إيصال الدفع أولاً",
      })
      return
    }

    const message = `مرحباً، لقد قمت بتحويل المبلغ ${amount} درهم لشراء الحساب رقم ${accountId}. إيصال الدفع: ${receiptUrl}`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="space-y-6">
      <Card className="border-efootball-blue">
        <CardHeader className="bg-efootball-blue text-white">
          <CardTitle>تعليمات الدفع</CardTitle>
          <CardDescription className="text-gray-200">يرجى اتباع الخطوات التالية لإتمام عملية الشراء</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-efootball-blue">الخطوة 1: التحويل البنكي</h3>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>معلومات الحساب البنكي CIH Bank</AlertTitle>
                <AlertDescription className="mt-2">
                  <div className="flex items-center justify-between gap-4 p-2 bg-muted rounded-lg">
                    <code className="text-sm font-semibold">{ribNumber}</code>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => copyToClipboard(ribNumber)}
                    >
                      {copied ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <CopyIcon className="h-4 w-4" />}
                      <span className="sr-only">نسخ رقم الحساب</span>
                    </Button>
                  </div>
                  <p className="mt-2 text-sm">المبلغ المطلوب: {amount} درهم</p>
                </AlertDescription>
              </Alert>
            </div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-semibold text-lg text-efootball-blue">الخطوة 2: رفع إيصال الدفع</h3>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>رفع صورة إيصال الدفع</AlertTitle>
                <AlertDescription className="mt-2">
                  <div className="mt-4">
                    <FileUpload onUpload={uploadPaymentReceipt} onChange={setReceiptUrl} maxSize={5} />
                  </div>
                </AlertDescription>
              </Alert>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="font-semibold text-lg text-efootball-blue">الخطوة 3: التواصل عبر WhatsApp</h3>
              <Alert>
                <WhatsappIcon className="h-4 w-4" />
                <AlertTitle>إرسال إيصال الدفع عبر WhatsApp</AlertTitle>
                <AlertDescription className="mt-2">
                  <p className="text-sm mb-4">بعد رفع إيصال الدفع، اضغط على الزر أدناه للتواصل معنا عبر WhatsApp</p>
                  <Button
                    className="w-full bg-[#25D366] hover:bg-[#25D366]/90"
                    onClick={openWhatsApp}
                    disabled={!receiptUrl}
                  >
                    <WhatsappIcon className="mr-2 h-4 w-4" />
                    {receiptUrl ? "فتح WhatsApp" : "يرجى رفع الإيصال أولاً"}
                  </Button>
                </AlertDescription>
              </Alert>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

