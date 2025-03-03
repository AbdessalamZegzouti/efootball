import { Check, X } from "lucide-react"

export function AccountDetails() {
  const details = [
    { label: "المستوى", value: "45" },
    { label: "عدد اللاعبين", value: "120" },
    { label: "العملات", value: "50,000" },
    { label: "النقاط", value: "25,000" },
    { label: "تاريخ الإنشاء", value: "2022" },
    { label: "المنصة", value: "PlayStation 5" },
  ]

  const features = [
    { feature: "لاعبين نادرين", available: true },
    { feature: "مدربين مميزين", available: true },
    { feature: "أطقم نادرة", available: true },
    { feature: "تشكيلات خاصة", available: true },
    { feature: "عملات إضافية", available: false },
    { feature: "تذاكر سوق اللاعبين", available: false },
  ]

  return (
    <div className="space-y-6 rounded-md border p-4">
      <div>
        <h3 className="mb-4 text-lg font-medium">معلومات الحساب</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {details.map((detail, index) => (
            <div key={index} className="flex justify-between">
              <span className="text-muted-foreground">{detail.label}:</span>
              <span className="font-medium">{detail.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-medium">المميزات</h3>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              {feature.available ? (
                <Check className="h-5 w-5 text-green-500" />
              ) : (
                <X className="h-5 w-5 text-red-500" />
              )}
              <span>{feature.feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-medium">وصف الحساب</h3>
        <p className="text-muted-foreground">
          حساب Efootball ممتاز مع العديد من اللاعبين النادرين والمميزين. الحساب يحتوي على تشكيلة قوية ومستوى متقدم.
          مناسب للاعبين المحترفين والهواة على حد سواء. يأتي الحساب مع جميع البيانات اللازمة للوصول الكامل.
        </p>
      </div>
    </div>
  )
}

