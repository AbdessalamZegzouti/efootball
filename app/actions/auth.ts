"use server"

import { promises as fs } from "fs"
import { join } from "path"
import { hash, compare } from "bcryptjs"

const USERS_FILE = join(process.cwd(), "data", "users.json")

interface User {
  id: string
  name: string
  email: string
  password: string
  role: "buyer" | "seller" | "admin"
  status: "active" | "suspended"
  joinDate: string
  balance: number
}

async function readUsersFile() {
  try {
    const data = await fs.readFile(USERS_FILE, "utf8")
    return JSON.parse(data)
  } catch (error) {
    // If file doesn't exist, create it with empty users array
    await fs.writeFile(USERS_FILE, JSON.stringify({ users: [] }))
    return { users: [] }
  }
}

async function writeUsersFile(data: { users: User[] }) {
  await fs.writeFile(USERS_FILE, JSON.stringify(data, null, 2))
}

export async function registerUser(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    // Validate input
    if (!name || !email || !password) {
      return { success: false, error: "جميع الحقول مطلوبة" }
    }

    const data = await readUsersFile()

    // Check if user already exists
    if (data.users.some((user: User) => user.email === email)) {
      return { success: false, error: "البريد الإلكتروني مستخدم بالفعل" }
    }

    // Hash password
    const hashedPassword = await hash(password, 12)

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password: hashedPassword,
      role: "seller" as const,
      status: "active" as const,
      joinDate: new Date().toISOString(),
      balance: 0,
    }

    // Add user to database
    data.users.push(newUser)
    await writeUsersFile(data)

    // Return user without password
    const { password: _, ...userWithoutPassword } = newUser
    return { success: true, user: userWithoutPassword }
  } catch (error) {
    return { success: false, error: "حدث خطأ أثناء التسجيل" }
  }
}

export async function loginUser(formData: FormData) {
  try {
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    // Validate input
    if (!email || !password) {
      return { success: false, error: "جميع الحقول مطلوبة" }
    }

    const data = await readUsersFile()

    // Find user
    const user = data.users.find((user: User) => user.email === email)
    if (!user) {
      return { success: false, error: "البريد الإلكتروني أو كلمة المرور غير صحيحة" }
    }

    // Verify password
    const isValid = await compare(password, user.password)
    if (!isValid) {
      return { success: false, error: "البريد الإلكتروني أو كلمة المرور غير صحيحة" }
    }

    // Check if user is suspended
    if (user.status === "suspended") {
      return { success: false, error: "تم تعليق حسابك" }
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user
    return { success: true, user: userWithoutPassword }
  } catch (error) {
    return { success: false, error: "حدث خطأ أثناء تسجيل الدخول" }
  }
}

