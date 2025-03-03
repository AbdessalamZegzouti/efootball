import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function AccountSellerInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>معلومات البائع</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="صورة البائع" />
            <AvatarFallback>بائع</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">أحمد محمد</div>
            <div className="flex items-center text-sm text-muted-foreground">
              <div className="flex items-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                  ))}
              </div>
              <span className="mr-1">(25 تقييم)</span>
            </div>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">تاريخ الانضمام:</span>
            <span>يناير 2023</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">عدد المبيعات:</span>
            <span>42 حساب</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">معدل الاستجابة:</span>
            <span>98%</span>
          </div>
        </div>

        <Button className="w-full">تواصل مع البائع</Button>
      </CardContent>
    </Card>
  )
}

