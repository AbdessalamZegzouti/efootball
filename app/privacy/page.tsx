import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  const sections = [
    {
      title: "جمع المعلومات",
      content: [
        {
          subtitle: "المعلومات الشخصية",
          details: ["الاسم الكامل", "عنوان البريد الإلكتروني", "رقم الهاتف", "معلومات الدفع"],
        },
        {
          subtitle: "المعلومات التلقائية",
          details: ["عنوان IP", "نوع المتصفح", "نظام التشغيل", "سجل التصفح في الموقع"],
        },
      ],
    },
    {
      title: "استخدام المعلومات",
      content: [
        {
          subtitle: "نستخدم معلوماتك من أجل",
          details: [
            "توفير وتحسين خدماتنا",
            "التواصل معك بخصوص معاملاتك",
            "إرسال تحديثات وإشعارات مهمة",
            "حماية حسابك وضمان أمان المنصة",
          ],
        },
      ],
    },
    {
      title: "حماية المعلومات",
      content: [
        {
          subtitle: "إجراءات الأمان",
          details: [
            "تشفير جميع المعلومات الحساسة",
            "مراقبة مستمرة لأي نشاط مشبوه",
            "تحديثات أمنية دورية",
            "صلاحيات وصول محدودة للموظفين",
          ],
        },
      ],
    },
    {
      title: "حقوق المستخدم",
      content: [
        {
          subtitle: "يحق لك",
          details: [
            "طلب نسخة من بياناتك الشخصية",
            "تصحيح معلوماتك غير الدقيقة",
            "حذف حسابك وبياناتك",
            "الاعتراض على معالجة بياناتك",
          ],
        },
      ],
    },
  ]

  return (
    <div className="bg-efootball-yellow min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-efootball-blue mb-8">سياسة الخصوصية</h1>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index} className="border-efootball-blue">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-efootball-blue mb-4">{section.title}</h2>
                {section.content.map((subsection, subIndex) => (
                  <div key={subIndex} className="mb-4 last:mb-0">
                    <h3 className="font-semibold text-efootball-pink mb-2">{subsection.subtitle}</h3>
                    <ul className="space-y-2">
                      {subsection.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="text-efootball-pink mr-2">•</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>آخر تحديث: {new Date().toLocaleDateString("ar-MA")}</p>
          <p>إذا كان لديك أي أسئلة حول سياسة الخصوصية، يرجى التواصل معنا.</p>
        </div>
      </div>
    </div>
  )
}

