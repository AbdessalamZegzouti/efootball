import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AccountGallery } from "@/components/account-gallery"
import { AccountDetails } from "@/components/account-details"
import { AccountSellerInfo } from "@/components/account-seller-info"

export default function AccountPage({ params }: { params: { id: string } }) {
  return (
    <div className="bg-efootball-yellow py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-efootball-blue">حساب Efootball ممتاز</h1>
            <div className="mt-2 flex items-center gap-2">
              <Badge className="bg-efootball-pink text-white">مميز</Badge>
              <span className="text-sm text-efootball-blue">رقم الحساب: {params.id}</span>
            </div>
          </div>
          <div className="text-left">
            <div className="text-2xl font-bold text-efootball-blue">1,200 درهم</div>
            <Button size="lg" className="mt-2 bg-efootball-pink hover:bg-efootball-pink/90 text-white">
              شراء الآن
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <AccountGallery />

            <Tabs defaultValue="details" className="mt-8">
              <TabsList className="grid w-full grid-cols-3 bg-efootball-blue">
                <TabsTrigger value="details" className="data-[state=active]:bg-efootball-pink">
                  تفاصيل الحساب
                </TabsTrigger>
                <TabsTrigger value="players" className="data-[state=active]:bg-efootball-pink">
                  اللاعبين
                </TabsTrigger>
                <TabsTrigger value="achievements" className="data-[state=active]:bg-efootball-pink">
                  الإنجازات
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details">
                <AccountDetails />
              </TabsContent>
              <TabsContent value="players">
                <div className="rounded-md border border-efootball-blue bg-white p-4">
                  <h3 className="mb-4 text-lg font-medium text-efootball-blue">اللاعبين المميزين</h3>
                  <ul className="space-y-2">
                    <li>ميسي - 96 تقييم</li>
                    <li>رونالدو - 95 تقييم</li>
                    <li>نيمار - 94 تقييم</li>
                    <li>امبابي - 93 تقييم</li>
                    <li>هالاند - 92 تقييم</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="achievements">
                <div className="rounded-md border border-efootball-blue bg-white p-4">
                  <h3 className="mb-4 text-lg font-medium text-efootball-blue">الإنجازات</h3>
                  <ul className="space-y-2">
                    <li>بطل الدوري 3 مرات</li>
                    <li>كأس العالم للأندية</li>
                    <li>دوري أبطال أوروبا</li>
                    <li>100+ فوز في المباريات التنافسية</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="md:col-span-1">
            <AccountSellerInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

