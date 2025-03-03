import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from "lucide-react"

export function Pagination() {
  return (
    <div className="flex items-center justify-center gap-1">
      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">الصفحة السابقة</span>
      </Button>
      <Button variant="outline" size="sm" className="min-w-8">
        1
      </Button>
      <Button variant="outline" size="sm" className="min-w-8">
        2
      </Button>
      <Button variant="outline" size="sm" className="min-w-8">
        3
      </Button>
      <Button variant="outline" size="sm" className="min-w-8">
        ...
      </Button>
      <Button variant="outline" size="sm" className="min-w-8">
        8
      </Button>
      <Button variant="outline" size="icon">
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">الصفحة التالية</span>
      </Button>
    </div>
  )
}

