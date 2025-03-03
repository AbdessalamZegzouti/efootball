import { CheckCircle, ShieldCheck, CreditCard } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: CheckCircle,
      title: "اختر حسابك",
      description: "تصفح مجموعة واسعة من حسابات Efootball واختر الحساب المناسب لك.",
    },
    {
      icon: CreditCard,
      title: "ادفع بأمان",
      description: "قم بالدفع من خلال منصتنا الآمنة. نحتفظ بالمبلغ حتى تستلم الحساب.",
    },
    {
      icon: ShieldCheck,
      title: "استلم حسابك",
      description: "بعد التحقق من الحساب، سنقوم بتسليمه لك وإتمام عملية البيع.",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center bg-efootball-blue p-6 rounded-lg border border-efootball-pink"
        >
          <div className="mb-4 rounded-full bg-efootball-pink p-4">
            <step.icon className="h-8 w-8 text-white" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
          <p className="text-gray-300">{step.description}</p>
        </div>
      ))}
    </div>
  )
}

