"use client"

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
import { MoreHorizontal, Eye, FileText } from "lucide-react"
import type { Transaction } from "@/lib/store"

interface TransactionsTableProps {
  transactions: Transaction[]
}

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
    <div className="rounded-md border border-white/20">
      <Table>
        <TableHeader>
          <TableRow className="border-white/20">
            <TableHead className="text-white">رقم المعاملة</TableHead>
            <TableHead className="text-white">الحساب</TableHead>
            <TableHead className="text-white">المبلغ</TableHead>
            <TableHead className="text-white">الحالة</TableHead>
            <TableHead className="text-white">التاريخ</TableHead>
            <TableHead className="text-white text-left">الإجراءات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id} className="border-white/20">
              <TableCell className="font-medium text-white">{transaction.id}</TableCell>
              <TableCell className="text-white">{transaction.accountTitle}</TableCell>
              <TableCell className="text-white">{transaction.amount} درهم</TableCell>
              <TableCell>
                <Badge
                  variant={
                    transaction.status === "completed"
                      ? "default"
                      : transaction.status === "pending"
                        ? "outline"
                        : "secondary"
                  }
                >
                  {transaction.status === "completed"
                    ? "مكتملة"
                    : transaction.status === "pending"
                      ? "قيد الانتظار"
                      : "ملغية"}
                </Badge>
              </TableCell>
              <TableCell className="text-white">{transaction.date}</TableCell>
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
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      <span>عرض التفاصيل</span>
                    </DropdownMenuItem>
                    {transaction.receiptUrl && (
                      <DropdownMenuItem>
                        <FileText className="mr-2 h-4 w-4" />
                        <span>عرض الإيصال</span>
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
  )
}

