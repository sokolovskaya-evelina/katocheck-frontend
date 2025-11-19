"use client"

import React from "react"
import {Button, Flex, Form, Select, message} from "antd"
import Password from "antd/es/input/Password"
import Modal from "antd/es/modal/Modal"
import FormItem from "antd/es/form/FormItem"
import Input from "antd/es/input/Input"
import {RoleEnum} from "../../types/enums"
import {roleOptions} from "@/app/lib/constsnts";

type FieldType = {
  email: string
  username: string
  password: string
  role: RoleEnum
  iceRinkId?: string
  isActive?: boolean
}

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
  rinkOptions: any
}

export default function NewUserModal({ open, setOpen, rinkOptions }: Props) {
  const [form] = Form.useForm()

  const handleCancel = () => {
    form.resetFields()
    setOpen(false)
  }

  const handleSubmit =async (values: FieldType) => {
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
          name="username"
        >
          <Input autoComplete="new-rink-name" placeholder="Название" />
        </FormItem>

        <FormItem<FieldType>
          label="Логин"
          name="email"
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

        <FormItem<FieldType> label="Роль" name="role">
          <Select
              defaultValue={RoleEnum.Admin}
            options={roleOptions}
          />
        </FormItem>

        <FormItem<FieldType> label="Каток для администрирования" name="iceRinkId">
          <Select
            options={rinkOptions}
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
