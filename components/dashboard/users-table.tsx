import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, UserCheck, UserX } from "lucide-react"

export function UsersTable() {
  const users = [
    {
      id: "U1",
      name: "محمد أحمد",
      email: "mohamed@example.com",
      role: "مشتري",
      status: "نشط",
      joinDate: "15 يناير 2023",
    },
    {
      id: "U2",
      name: "علي محمود",
      email: "ali@example.com",
      role: "بائع",
      status: "نشط",
      joinDate: "10 فبراير 2023",
    },
    {
      id: "U3",
      name: "أحمد خالد",
      email: "ahmed@example.com",
      role: "بائع",
      status: "معلق",
      joinDate: "5 مارس 2023",
    },
    {
      id: "U4",
      name: "سارة محمد",
      email: "sara@example.com",
      role: "مشتري",
      status: "نشط",
      joinDate: "1 أبريل 2023",
    },
  ]

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>المستخدم</TableHead>
            <TableHead>البريد الإلكتروني</TableHead>
            <TableHead>الدور</TableHead>
            <TableHead>الحالة</TableHead>
            <TableHead>تاريخ الانضمام</TableHead>
            <TableHead className="text-left">الإجراءات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Badge variant={user.status === "نشط" ? "default" : "secondary"}>{user.status}</Badge>
              </TableCell>
              <TableCell>{user.joinDate}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">فتح القائمة</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>الإجراءات</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <UserCheck className="mr-2 h-4 w-4" />
                      <span>تفعيل</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <UserX className="mr-2 h-4 w-4" />
                      <span>تعليق</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

