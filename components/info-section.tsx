"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function InfoSection() {
  const [openItem, setOpenItem] = useState<number | null>(0)

  const infoItems = [
    {
      title: "كيف يمكنني بيع حسابي؟",
      content:
        "يمكنك بيع حسابك بسهولة عن طريق التسجيل في الموقع، ثم إضافة تفاصيل حسابك في لوحة التحكم الخاصة بك. سيقوم فريقنا بمراجعة الحساب والموافقة عليه قبل عرضه للبيع.",
    },
    {
      title: "كيف تتم عملية الشراء؟",
      content:
        "عند شراء حساب، ستقوم بدفع المبلغ إلى منصتنا، وسنحتفظ به حتى تستلم الحساب وتتأكد من صحة المعلومات. بعد ذلك، سيتم تحويل المبلغ إلى البائع.",
    },
    {
      title: "هل هناك ضمان على الحسابات؟",
      content:
        "نعم، جميع الحسابات المباعة عبر منصتنا تخضع لضمان لمدة 48 ساعة. إذا واجهت أي مشكلة خلال هذه الفترة، يمكنك التواصل معنا وسنساعدك في حل المشكلة أو استرداد أموالك.",
    },
  ]

  return (
    <div className="space-y-4">
      {infoItems.map((item, index) => (
        <Card
          key={index}
          className={cn(
            "border-efootball-pink overflow-hidden transition-all",
            openItem === index ? "bg-efootball-pink text-white" : "bg-white text-efootball-blue",
          )}
        >
          <CardHeader
            className="p-4 cursor-pointer flex flex-row items-center justify-between"
            onClick={() => setOpenItem(openItem === index ? null : index)}
          >
            <h3 className="font-medium text-lg">{item.title}</h3>
            <ChevronDown
              className={cn("h-5 w-5 transition-transform", openItem === index ? "transform rotate-180" : "")}
            />
          </CardHeader>
          {openItem === index && (
            <CardContent className="p-4 pt-0 text-white">
              <p>{item.content}</p>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  )
}

