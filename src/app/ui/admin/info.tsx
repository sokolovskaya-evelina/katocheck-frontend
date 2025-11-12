"use client"

import { useMemo, useState } from "react"
import { Button, Card, Form, Input, Select, Space, Row, Col, Descriptions } from "antd"
import { Controller, useForm } from "react-hook-form"
import { Plus, Save, SquarePen } from "lucide-react"
import { DistrictEnum } from "@/app/types/enums"
import Map from "@/app/ui/rinks/map"
import Title from "antd/es/typography/Title"

const descriptionItems = [
  { key: "name", label: "Название катка", children: "Озерки" },
  { key: "address", label: "Адресс", children: "Озерки" },
  { key: "metro", label: "Станции метро", children: "Озерки" },
  { key: "district", label: "Район", children: "Озерки" },
  { key: "phones", label: "Номера телефонов", children: "Озерки" },
  { key: "socials", label: "Социальные сети", children: "Озерки" },
]

export default function Info() {
  const [mode, setMode] = useState<"view" | "edit">("view")
  const [socials, setSocials] = useState([{ name: "", url: "" }])

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      address: "",
      district: "",
      metroStations: [],
      phones: "",
      arenas: "",
      sessionTypes: "",
    },
  })

  const districtOptions = useMemo(() => {
    return Object.values(DistrictEnum).map(district => ({ label: district, value: district }))
  }, [])

  const addSocial = () => {
    setSocials(prev => [...prev, { name: "", url: "" }])
  }

  const onSubmit = (data: any) => {
    console.log({ ...data, socials })
  }

  return (
    <Card
      title={
        <Space>
          <Title level={4} style={{ margin: 0 }}>
            Общая информация
          </Title>
          {mode === "edit" ? (
            <Button icon={<Save />} type="text" onClick={handleSubmit(onSubmit)} />
          ) : (
            <Button icon={<SquarePen />} type="text" onClick={() => setMode("edit")} />
          )}
        </Space>
      }
    >
      {mode === "edit" ? (
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Row gutter={[16, 16]}>
            <Col xs={24} lg={12}>
              <Form.Item label="Название катка">
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>
              <Form.Item label="Адрес">
                <Controller
                  name="address"
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>
              <Form.Item label="Район">
                <Controller
                  name="district"
                  control={control}
                  render={({ field }) => (
                    <Select
                      options={districtOptions}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </Form.Item>
              <Form.Item label="Станции метро">
                <Input placeholder="Станции метро" />
              </Form.Item>
              <Form.Item label="Номера телефонов">
                <Controller
                  name="phones"
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>
              <Form.Item label="Социальные сети">
                <Space direction="vertical" style={{ width: "100%" }}>
                  {socials.map((_, index) => (
                    <Space key={index} style={{ width: "100%" }}>
                      <Input placeholder="Название" style={{ width: "33%" }} />
                      <Input placeholder="URL" style={{ width: "67%" }} />
                    </Space>
                  ))}
                  <Button onClick={addSocial} icon={<Plus />} size="small">
                    Добавить
                  </Button>
                </Space>
              </Form.Item>
              <Form.Item label="Арены">
                <Controller
                  name="arenas"
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>
              <Form.Item label="Типы сеансов">
                <Controller
                  name="sessionTypes"
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Map location={[60.036484, 30.306125]} />
            </Col>
          </Row>
        </Form>
      ) : (
        <Descriptions items={descriptionItems} column={{ xs: 1, sm: 1, md: 2 }} size="small" />
      )}
    </Card>
  )
}
