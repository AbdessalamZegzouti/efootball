import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AdminTransactionsTable } from "@/components/admin/admin-transactions-table"

export default function AdminTransactionsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">إدارة المعاملات</h1>

      <div className="flex flex-wrap items-center gap-4">
        <Input placeholder="بحث عن معاملة..." className="max-w-xs" />

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="الحالة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">الكل</SelectItem>
            <SelectItem value="pending">قيد الانتظار</SelectItem>
            <SelectItem value="in_progress">قيد التنفيذ</SelectItem>
            <SelectItem value="completed">مكتملة</SelectItem>
            <SelectItem value="cancelled">ملغية</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline">تصفية</Button>
      </div>

      <AdminTransactionsTable />
    </div>
  )
}

