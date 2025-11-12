"use client"

import React from "react"
import { Button, Flex, Form, Select } from "antd"
import Password from "antd/es/input/Password"
import Modal from "antd/es/modal/Modal"
import FormItem from "antd/es/form/FormItem"
import Input from "antd/es/input/Input"
import { RoleEnum } from "@/app/types/enums"

type FieldType = {
  name?: string
  login?: string
  password?: string
  userType: RoleEnum
}

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function NewUserModal({ open, setOpen }: Props) {
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
    <Modal title="Новый пользователь" open={open} footer={false} onCancel={handleCancel}>
      <Form
        form={form}
        name="newRink"
        layout="vertical"
        onFinish={handleSubmit}
        autoComplete="off"
        initialValues={{ userType: RoleEnum.Sportsman }}
      >
        <FormItem<FieldType>
          label="Имя"
          name="name"
          rules={[{ required: true, message: "Пожалуйста, введите имя" }]}
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

        <FormItem<FieldType> label="Тип" name="userType">
          <Select
            options={[
              { value: RoleEnum.Sportsman, label: "Спортсмен" },
              { value: RoleEnum.Coach, label: "Тренер" },
              { value: RoleEnum.Parent, label: "Родитель" },
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
