import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Account {
  id: string
  title: string
  price: string
  rating: string
  level: number
  players: number
  image: string
  seller: string
  sellerId: string
  status: "pending" | "active" | "sold"
  date: string
}

export interface User {
  id: string
  name: string
  email: string
  role: "buyer" | "seller" | "admin"
  status: "active" | "suspended"
  joinDate: string
  balance: number
}

interface Settings {
  siteName: string
  whatsappNumber: string
  ribNumber: string
  contactEmail: string
}

interface StoreState {
  currentUser: User | null
  accounts: Account[]
  settings: Settings
  login: (user: User) => void
  logout: () => void
  addAccount: (account: Account) => void
  updateAccount: (id: string, updates: Partial<Account>) => void
  deleteAccount: (id: string) => void
  updateSettings: (updates: Partial<Settings>) => void
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      currentUser: null,
      accounts: [],
      settings: {
        siteName: "DexterShop",
        whatsappNumber: "+212621947493",
        ribNumber: "181 810 2116785150 0003 5199 0076",
        contactEmail: "azegzouti3@gmail.com",
      },
      login: (user) => set({ currentUser: user }),
      logout: () => set({ currentUser: null }),
      addAccount: (account) =>
        set((state) => ({
          accounts: [...state.accounts, account],
        })),
      updateAccount: (id, updates) =>
        set((state) => ({
          accounts: state.accounts.map((account) => (account.id === id ? { ...account, ...updates } : account)),
        })),
      deleteAccount: (id) =>
        set((state) => ({
          accounts: state.accounts.filter((account) => account.id !== id),
        })),
      updateSettings: (updates) =>
        set((state) => ({
          settings: { ...state.settings, ...updates },
        })),
    }),
    {
      name: "efootball-store",
    },
  ),
)

