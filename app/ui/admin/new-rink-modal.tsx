"use client"

import React, {useState} from "react"
import {Button, Flex, Form} from "antd"
import Modal from "antd/es/modal/Modal"
import FormItem from "antd/es/form/FormItem"
import Input from "antd/es/input/Input"
import {RoleEnum} from "../../types/enums"
import {createRink, getAllRinks} from "@/app/lib/actions/admin/ice-rinks";

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
  const [loading, setLoading] = useState(false)

  const handleCancel = () => {
    form.resetFields()
    setOpen(false)
  }

  const handleSubmit = async (values: any) => {
    try {
      await createRink(values)
      await getAllRinks()
      form.resetFields()
      handleCancel()
    } catch (e) {
      console.log(e)
    }

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
        <FormItem>
          <Flex gap={15} justify="flex-end">
            <Button onClick={handleCancel}>Закрыть</Button>
            <Button type="primary" loadinп={loading} htmlType="submit">
              Добавить
            </Button>
          </Flex>
        </FormItem>
      </Form>
    </Modal>
  )
}
