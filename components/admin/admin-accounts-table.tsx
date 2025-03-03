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
import { useStore, type Account } from "@/lib/store"
import { MoreHorizontal, Pencil, Trash } from "lucide-react"
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
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { EditAccountForm } from "./edit-account-form"

interface AdminAccountsTableProps {
  searchQuery: string
}

export function AdminAccountsTable({ searchQuery }: AdminAccountsTableProps) {
  const { accounts, deleteAccount } = useStore()
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [editAccount, setEditAccount] = useState<Account | null>(null)
  const { toast } = useToast()

  const filteredAccounts = accounts.filter(
    (account) =>
      account.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      account.seller.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleDelete = async (id: string) => {
    try {
      deleteAccount(id)
      toast({
        title: "تم حذف الحساب",
        description: "تم حذف الحساب بنجاح",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "خطأ",
        description: "حدث خطأ أثناء حذف الحساب",
      })
    }
    setDeleteConfirm(null)
  }

  return (
    <>
      <div className="rounded-md border border-white/20">
        <Table>
          <TableHeader>
            <TableRow className="border-white/20">
              <TableHead className="text-white">الحساب</TableHead>
              <TableHead className="text-white">البائع</TableHead>
              <TableHead className="text-white">السعر</TableHead>
              <TableHead className="text-white">الحالة</TableHead>
              <TableHead className="text-white">التاريخ</TableHead>
              <TableHead className="text-white text-left">الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAccounts.map((account) => (
              <TableRow key={account.id} className="border-white/20">
                <TableCell className="font-medium text-white">{account.title}</TableCell>
                <TableCell className="text-white">{account.seller}</TableCell>
                <TableCell className="text-white">{account.price} درهم</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      account.status === "active" ? "default" : account.status === "pending" ? "outline" : "secondary"
                    }
                  >
                    {account.status === "active" ? "نشط" : account.status === "pending" ? "قيد المراجعة" : "تم البيع"}
                  </Badge>
                </TableCell>
                <TableCell className="text-white">{account.date}</TableCell>
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
                      <DropdownMenuItem onClick={() => setEditAccount(account)}>
                        <Pencil className="mr-2 h-4 w-4" />
                        <span>تعديل</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600" onClick={() => setDeleteConfirm(account.id)}>
                        <Trash className="mr-2 h-4 w-4" />
                        <span>حذف</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>هل أنت متأكد من حذف هذا الحساب؟</AlertDialogTitle>
            <AlertDialogDescription>هذا الإجراء لا يمكن التراجع عنه. سيتم حذف الحساب نهائياً.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>إلغاء</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteConfirm && handleDelete(deleteConfirm)}
              className="bg-red-600 hover:bg-red-700"
            >
              حذف
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={!!editAccount} onOpenChange={() => setEditAccount(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>تعديل الحساب</DialogTitle>
            <DialogDescription>قم بتعديل تفاصيل الحساب</DialogDescription>
          </DialogHeader>
          {editAccount && <EditAccountForm account={editAccount} onClose={() => setEditAccount(null)} />}
        </DialogContent>
      </Dialog>
    </>
  )
}

