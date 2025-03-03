'use server'

import { writeFile } from 'fs/promises'
import { join } from 'path'
import { nanoid } from 'nanoid'

export async function uploadAccountImage(formData: FormData) {
  try {
    const file = formData.get('file') as File
    if (!file) throw new Error('No file provided')

    // Convert File to Buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Create unique filename
    const ext = file.name.split('.').pop()
    const filename = `${nanoid()}.${ext}`
    
    // Save to public/uploads/accounts directory
    const path = join(process.cwd(), 'public', 'uploads', 'accounts', filename)
    await writeFile(path, buffer)

    // Return the public URL
    const url = `/uploads/accounts/${filename}`
    return { success: true, url }
  } catch (error) {
    return { success: false, error: (error as Error).message }
  }
}

export async function uploadPaymentReceipt(formData: FormData) {
  try {
    const file = formData.get('file') as File
    if (!file) throw new Error('No file provided')

    // Convert File to Buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Create unique filename
    const ext = file.name.split('.').pop()
    const filename = `${nanoid()}.${ext}`
    
    // Save to public/uploads/receipts directory
    const path = join(process.cwd(), 'public', 'uploads', 'receipts', filename)
    await writeFile(path, buffer)

    // Return the public URL
    const url = `/uploads/receipts/${filename}`
    return { success: true, url }
  } catch (error) {
    return { success: false, error: (error as Error).message }
  }
}

