"use client"

import React from "react"
import type { FormProps } from "antd"
import { Button, Card, Form, Input } from "antd"
import FormItem from "antd/es/form/FormItem"
import Password from "antd/es/input/Password"

type FieldType = {
  username?: string
  password?: string
}

const onFinish: FormProps<FieldType>["onFinish"] = values => {
  console.log("Success:", values)
}

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = errorInfo => {
  console.log("Failed:", errorInfo)
}

export default function Page() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card title="Вход" className="w-full max-w-sm p-6 space-y-4 text-center">
        <Form
          name="login"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
        >
          <FormItem<FieldType>
            label="Логин"
            name="username"
            rules={[{ required: true, message: "Пожалуйста, введите логин" }]}
          >
            <Input placeholder="Логин" />
          </FormItem>

          <FormItem<FieldType>
            label="Пароль"
            name="password"
            rules={[{ required: true, message: "Пожалуйста, введите пароль" }]}
          >
            <Password placeholder="Пароль" />
          </FormItem>
          <FormItem className="flex justify-center" label={null}>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </FormItem>
        </Form>
      </Card>
    </div>
  )
}
