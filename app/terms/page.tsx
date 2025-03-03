import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
  const sections = [
    {
      title: "شروط الاستخدام العامة",
      content: [
        "يجب أن يكون عمر المستخدم 18 عاماً أو أكثر.",
        "يجب استخدام معلومات صحيحة عند التسجيل.",
        "يحظر استخدام المنصة لأي أغراض غير مشروعة.",
        "نحتفظ بالحق في تعليق أو إنهاء أي حساب يخالف الشروط.",
      ],
    },
    {
      title: "شروط البيع",
      content: [
        "يجب أن تكون الحسابات مملوكة بشكل قانوني للبائع.",
        "يجب تقديم جميع المعلومات الصحيحة عن الحساب.",
        "عمولة المنصة 5% من سعر البيع النهائي.",
        "يلتزم البائع بتسليم الحساب بالحالة المعلن عنها.",
      ],
    },
    {
      title: "شروط الشراء",
      content: [
        "المشتري مسؤول عن التحقق من تفاصيل الحساب قبل الشراء.",
        "الدفع يتم حصراً من خلال منصتنا.",
        "فترة الضمان 48 ساعة من وقت استلام الحساب.",
        "يحق للمشتري طلب استرداد المبلغ خلال فترة الضمان.",
      ],
    },
    {
      title: "الضمان والحماية",
      content: [
        "نضمن حماية المعاملات من خلال نظام الوساطة.",
        "نحتفظ بالمبلغ حتى يتم التحقق من الحساب.",
        "نوفر الدعم الفني على مدار الساعة.",
        "نتحقق من جميع الحسابات قبل عرضها.",
      ],
    },
  ]

  return (
    <div className="bg-efootball-yellow min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-efootball-blue mb-8">الشروط والأحكام</h1>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index} className="border-efootball-blue">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-efootball-blue mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-efootball-pink mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>آخر تحديث: {new Date().toLocaleDateString("ar-MA")}</p>
          <p>تحتفظ المنصة بحق تحديث هذه الشروط والأحكام في أي وقت.</p>
        </div>
      </div>
    </div>
  )
}

