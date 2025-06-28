import React from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { EyeIcon } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center">Вход</h1>

        <div className="space-y-2">
          <Label htmlFor="username">Логин</Label>
          <Input id="username" placeholder="Введите логин" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Пароль</Label>
          <div className="relative">
            <Input id="password" type="password" placeholder="Введите пароль" className="pr-10" />
            <EyeIcon className="absolute right-2 top-2.5 h-5 w-5 text-muted-foreground cursor-pointer" />
          </div>
        </div>

        <Button className="w-full" color="primary">
          Войти
        </Button>
      </Card>
    </div>
  )
}
