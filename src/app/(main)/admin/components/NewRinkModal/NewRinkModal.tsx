"use client"

import React from "react"
import { Button, Flex, Form, Select } from "antd"
import Password from "antd/es/input/Password"
import Modal from "antd/es/modal/Modal"
import FormItem from "antd/es/form/FormItem"
import Input from "antd/es/input/Input"
import { RoleEnum } from "@/types/enums"

type FieldType = {
  name?: string
  login?: string
  password?: string
  role: RoleEnum
}

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function NewRinkModal({ open, setOpen }: Props) {
  const [form] = Form.useForm()

  const handleCancel = () => {
    form.resetFields()
    setOpen(false)
  }

  const handleSubmit = (value: FieldType) => {
    console.log(value)
    form.resetFields()
    setOpen(false)
  }

  return (
    <Modal title="Новый каток" open={open} footer={false} onCancel={handleCancel}>
      <Form
        form={form}
        name="newRink"
        layout="vertical"
        onFinish={handleSubmit}
        autoComplete="off"
        initialValues={{ role: RoleEnum.Admin }}
      >
        <FormItem<FieldType>
          label="Название катка"
          name="name"
          rules={[{ required: true, message: "Пожалуйста, введите название" }]}
        >
          <Input autoComplete="new-rink-name" placeholder="Название" />
        </FormItem>

        <FormItem<FieldType>
          label="Логин"
          name="login"
          rules={[{ required: true, message: "Пожалуйста, введите логин" }]}
        >
          <Input name="new-login" autoComplete="new-login" placeholder="Логин" />
        </FormItem>

        <FormItem<FieldType>
          label="Пароль"
          name="password"
          rules={[{ required: true, message: "Пожалуйста, введите пароль" }]}
        >
          <Password name="new-password" autoComplete="new-password" placeholder="Пароль" />
        </FormItem>
        <FormItem<FieldType>
          label="Роль"
          name="role"
          rules={[{ required: true, message: "Пожалуйста, выберите роль" }]}
        >
          <Select
            options={[
              { value: RoleEnum.Admin, label: "Админ" },
              { value: RoleEnum.SuperAdmin, label: "Суперадмин" },
            ]}
          />
        </FormItem>

        <FormItem>
          <Flex gap={15} justify="flex-end">
            <Button onClick={handleCancel}>Закрыть</Button>
            <Button type="primary" htmlType="submit">
              Добавить
            </Button>
          </Flex>
        </FormItem>
      </Form>
    </Modal>
  )
}
