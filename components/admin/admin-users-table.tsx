"use client"

import { useState } from "react"
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
import { useStore } from "@/lib/store"
import { MoreHorizontal, UserCheck, UserX } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/components/ui/use-toast"

interface AdminUsersTableProps {
  searchQuery: string
}

export function AdminUsersTable({ searchQuery }: AdminUsersTableProps) {
  const { users, updateUser } = useStore()
  const [actionConfirm, setActionConfirm] = useState<{
    userId: string
    action: "activate" | "suspend"
  } | null>(null)
  const { toast } = useToast()

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleAction = async () => {
    if (!actionConfirm) return

    try {
      updateUser(actionConfirm.userId, {
        status: actionConfirm.action === "activate" ? "active" : "suspended",
      })
      toast({
        title: actionConfirm.action === "activate" ? "تم تفعيل المستخدم" : "تم تعليق المستخدم",
        description:
          actionConfirm.action === "activate" ? "تم تفعيل حساب المستخدم بنجاح" : "تم تعليق حساب المستخدم بنجاح",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "خطأ",
        description: "حدث خطأ أثناء تحديث حالة المستخدم",
      })
    }
    setActionConfirm(null)
  }

  return (
    <>
      <div className="rounded-md border border-white/20">
        <Table>
          <TableHeader>
            <TableRow className="border-white/20">
              <TableHead className="text-white">المستخدم</TableHead>
              <TableHead className="text-white">البريد الإلكتروني</TableHead>
              <TableHead className="text-white">الدور</TableHead>
              <TableHead className="text-white">الحالة</TableHead>
              <TableHead className="text-white">تاريخ الانضمام</TableHead>
              <TableHead className="text-white text-left">الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id} className="border-white/20">
                <TableCell className="font-medium text-white">{user.name}</TableCell>
                <TableCell className="text-white">{user.email}</TableCell>
                <TableCell className="text-white">
                  {user.role === "buyer" ? "مشتري" : user.role === "seller" ? "بائع" : "مسؤول"}
                </TableCell>
                <TableCell>
                  <Badge variant={user.status === "active" ? "default" : "secondary"}>
                    {user.status === "active" ? "نشط" : "معلق"}
                  </Badge>
                </TableCell>
                <TableCell className="text-white">{user.joinDate}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">فتح القائمة</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>الإجراءات</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {user.status === "active" ? (
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() =>
                            setActionConfirm({
                              userId: user.id,
                              action: "suspend",
                            })
                          }
                        >
                          <UserX className="mr-2 h-4 w-4" />
                          <span>تعليق</span>
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem
                          onClick={() =>
                            setActionConfirm({
                              userId: user.id,
                              action: "activate",
                            })
                          }
                        >
                          <UserCheck className="mr-2 h-4 w-4" />
                          <span>تفعيل</span>
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={!!actionConfirm} onOpenChange={() => setActionConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {actionConfirm?.action === "activate"
                ? "هل أنت متأكد من تفعيل هذا المستخدم؟"
                : "هل أنت متأكد من تعليق هذا المستخدم؟"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {actionConfirm?.action === "activate"
                ? "سيتمكن المستخدم من استخدام حسابه بشكل طبيعي."
                : "لن يتمكن المستخدم من استخدام حسابه حتى يتم تفعيله مرة أخرى."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>إلغاء</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleAction}
              className={actionConfirm?.action === "activate" ? "bg-green-600" : "bg-red-600"}
            >
              {actionConfirm?.action === "activate" ? "تفعيل" : "تعليق"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

