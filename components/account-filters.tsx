"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { motion, AnimatePresence } from "framer-motion"

interface FilterValues {
  search: string
  priceRange: { min: string; max: string }
  level: number
  ratings: string[]
}

interface AccountFiltersProps {
  onFilterChange: (filters: FilterValues) => void
  isLoading?: boolean
}

export function AccountFilters({ onFilterChange, isLoading = false }: AccountFiltersProps) {
  const [filters, setFilters] = useState<FilterValues>({
    search: "",
    priceRange: { min: "", max: "" },
    level: 50,
    ratings: [],
  })

  const ratings = [
    { id: "premium", label: "ممتاز" },
    { id: "rare", label: "نادر" },
    { id: "good", label: "جيد" },
    { id: "beginner", label: "مبتدئ" },
  ]

  const handleSearchChange = (value: string) => {
    const newFilters = { ...filters, search: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handlePriceChange = (field: "min" | "max", value: string) => {
    const newFilters = {
      ...filters,
      priceRange: { ...filters.priceRange, [field]: value },
    }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleLevelChange = (value: number[]) => {
    const newFilters = { ...filters, level: value[0] }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleRatingChange = (rating: string, checked: boolean) => {
    const newRatings = checked ? [...filters.ratings, rating] : filters.ratings.filter((r) => r !== rating)
    const newFilters = { ...filters, ratings: newRatings }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const resetFilters = () => {
    const defaultFilters = {
      search: "",
      priceRange: { min: "", max: "" },
      level: 50,
      ratings: [],
    }
    setFilters(defaultFilters)
    onFilterChange(defaultFilters)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 rounded-lg border border-efootball-blue/20 bg-white p-4"
    >
      <div>
        <h3 className="mb-4 font-medium text-efootball-blue">تصفية النتائج</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="search">بحث</Label>
            <Input
              id="search"
              placeholder="ابحث عن حساب..."
              value={filters.search}
              onChange={(e) => handleSearchChange(e.target.value)}
              disabled={isLoading}
              className="border-efootball-pink/20 focus:border-efootball-pink focus:ring-efootball-pink/20"
            />
          </div>

          <div className="space-y-2">
            <Label>نطاق السعر (درهم)</Label>
            <div className="flex items-center gap-4">
              <Input
                type="number"
                placeholder="من"
                className="w-24 border-efootball-pink/20 focus:border-efootball-pink focus:ring-efootball-pink/20"
                value={filters.priceRange.min}
                onChange={(e) => handlePriceChange("min", e.target.value)}
                disabled={isLoading}
              />
              <span>-</span>
              <Input
                type="number"
                placeholder="إلى"
                className="w-24 border-efootball-pink/20 focus:border-efootball-pink focus:ring-efootball-pink/20"
                value={filters.priceRange.max}
                onChange={(e) => handlePriceChange("max", e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>المستوى: {filters.level}</Label>
            <Slider
              defaultValue={[filters.level]}
              max={100}
              step={1}
              disabled={isLoading}
              onValueChange={handleLevelChange}
              className="py-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0</span>
              <span>100</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label>التصنيف</Label>
            <div className="space-y-2">
              {ratings.map((rating) => (
                <div key={rating.id} className="flex items-center gap-2">
                  <Checkbox
                    id={`rating-${rating.id}`}
                    checked={filters.ratings.includes(rating.id)}
                    onCheckedChange={(checked) => handleRatingChange(rating.id, checked as boolean)}
                    disabled={isLoading}
                  />
                  <Label htmlFor={`rating-${rating.id}`} className="text-sm font-normal cursor-pointer select-none">
                    {rating.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          className="flex-1 bg-efootball-pink hover:bg-efootball-pink/90"
          disabled={isLoading}
          onClick={() => onFilterChange(filters)}
        >
          تطبيق الفلتر
        </Button>
        <Button
          variant="outline"
          className="border-efootball-pink text-efootball-pink hover:bg-efootball-pink/10"
          disabled={isLoading}
          onClick={resetFilters}
        >
          إعادة ضبط
        </Button>
      </div>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-efootball-pink" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

