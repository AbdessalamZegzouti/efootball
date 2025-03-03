import { nanoid } from 'nanoid'

export async function uploadFile(file: File, prefix: 'accounts' | 'receipts') {
  try {
    if (!file) throw new Error('No file provided')
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      throw new Error('Only image files are allowed')
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      throw new Error('File size must be less than 5MB')
    }

    // Generate unique filename
    const ext = file.name.split('.').pop()
    const filename = `${nanoid()}.${ext}`
    
    // Instead of uploading to a service, we'll save the file URL
    // Files should be placed in the public/uploads/{prefix} folder
    const url = `/uploads/${prefix}/${filename}`

    return url
  } catch (error) {
    console.error('Upload error:', error)
    throw error
  }
}

