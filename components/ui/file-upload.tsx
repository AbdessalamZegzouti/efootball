"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/components/ui/use-toast"
import { Upload, X } from "lucide-react"
import Image from "next/image"

interface FileUploadProps {
  onUpload: (formData: FormData) => Promise<{ success: boolean; url?: string; error?: string }>
  accept?: string
  maxSize?: number // in MB
  className?: string
  defaultValue?: string
  onChange?: (url: string | null) => void
}

export function FileUpload({
  onUpload,
  accept = "image/*",
  maxSize = 5,
  className,
  defaultValue,
  onChange,
}: FileUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [preview, setPreview] = useState<string | null>(defaultValue || null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file size
    if (file.size > maxSize * 1024 * 1024) {
      toast({
        variant: "destructive",
        title: "خطأ",
        description: `يجب أن يكون حجم الملف أقل من ${maxSize}MB`,
      })
      return
    }

    setIsUploading(true)
    setProgress(0)

    try {
      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setProgress((prev) => (prev >= 90 ? 90 : prev + 10))
      }, 100)

      const formData = new FormData()
      formData.append("file", file)

      const result = await onUpload(formData)

      clearInterval(progressInterval)
      setProgress(100)

      if (result.success && result.url) {
        setPreview(result.url)
        onChange?.(result.url)
        toast({
          title: "تم الرفع بنجاح",
          description: "تم رفع الملف بنجاح",
        })
      } else {
        throw new Error(result.error || "حدث خطأ أثناء الرفع")
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "خطأ",
        description: (error as Error).message,
      })
    } finally {
      setIsUploading(false)
      setProgress(0)
      if (inputRef.current) {
        inputRef.current.value = ""
      }
    }
  }

  const handleRemove = () => {
    setPreview(null)
    onChange?.(null)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  return (
    <div className={className}>
      {preview ? (
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src={preview || "/placeholder.svg"}
            alt="Preview"
            width={300}
            height={200}
            className="w-full h-auto object-cover"
          />
          <Button variant="destructive" size="icon" className="absolute top-2 right-2" onClick={handleRemove}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="relative">
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            onChange={handleFileSelect}
            className="hidden"
            disabled={isUploading}
          />
          <Button
            variant="outline"
            className="w-full h-32 flex flex-col items-center justify-center border-dashed"
            onClick={() => inputRef.current?.click()}
            disabled={isUploading}
          >
            <Upload className="h-8 w-8 mb-2" />
            <span>{isUploading ? "جاري الرفع..." : "اختر ملفاً للرفع"}</span>
            <span className="text-xs text-muted-foreground mt-1">الحد الأقصى: {maxSize}MB</span>
          </Button>
          {isUploading && <Progress value={progress} className="mt-2" />}
        </div>
      )}
    </div>
  )
}

