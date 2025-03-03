"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<number | null>(0)

  const faqCategories = [
    {
      title: "عام",
      questions: [
        {
          q: "ما هو سوق Efootball؟",
          a: "سوق Efootball هو منصة آمنة لبيع وشراء حسابات Efootball. نحن نعمل كوسيط موثوق به لضمان عمليات تداول آمنة وشفافة.",
        },
        {
          q: "كيف تضمنون أمان المعاملات؟",
          a: "نستخدم نظام الضمان حيث نحتفظ بالمبلغ حتى يتم تسليم الحساب والتحقق منه. إذا كان هناك أي مشكلة، يمكن استرداد المبلغ.",
        },
      ],
    },
    {
      title: "البيع",
      questions: [
        {
          q: "كيف يمكنني بيع حسابي؟",
          a: "قم بالتسجيل في الموقع، أضف تفاصيل حسابك، وانتظر موافقة الإدارة. بمجرد الموافقة، سيظهر حسابك في قائمة الحسابات المعروضة.",
        },
        {
          q: "كم تبلغ العمولة على البيع؟",
          a: "نأخذ عمولة 5% من سعر البيع النهائي لتغطية تكاليف الخدمة والحماية.",
        },
      ],
    },
    {
      title: "الشراء",
      questions: [
        {
          q: "كيف يمكنني شراء حساب؟",
          a: "اختر الحساب المناسب، اضغط على زر الشراء، وقم بالدفع. سنتواصل معك لإتمام عملية نقل الحساب.",
        },
        {
          q: "ما هي طرق الدفع المتاحة؟",
          a: "نقبل الدفع عبر البطاقات البنكية، التحويل البنكي، وخدمات الدفع الإلكتروني المحلية.",
        },
      ],
    },
  ]

  return (
    <div className="bg-efootball-yellow min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-efootball-blue mb-8">الأسئلة الشائعة</h1>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-xl font-semibold text-efootball-blue mb-4">{category.title}</h2>
              <div className="space-y-4">
                {category.questions.map((item, index) => {
                  const itemIndex = categoryIndex * 100 + index
                  return (
                    <Card
                      key={itemIndex}
                      className={cn(
                        "border-efootball-pink overflow-hidden transition-all",
                        openItem === itemIndex ? "bg-efootball-pink text-white" : "bg-white text-efootball-blue",
                      )}
                    >
                      <div
                        className="p-4 cursor-pointer flex flex-row items-center justify-between"
                        onClick={() => setOpenItem(openItem === itemIndex ? null : itemIndex)}
                      >
                        <h3 className="font-medium text-lg">{item.q}</h3>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform",
                            openItem === itemIndex ? "transform rotate-180" : "",
                          )}
                        />
                      </div>
                      {openItem === itemIndex && (
                        <div className="px-4 pb-4 text-white">
                          <p>{item.a}</p>
                        </div>
                      )}
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

