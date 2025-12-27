import { Card, Divider, Flex, Space } from "antd"
import TextLink from "antd/es/typography/Link"
import Text from "antd/es/typography/Text"
import Title from "antd/es/typography/Title"
import { Map, MapPin, Phone, Train } from "lucide-react"
import Image from "next/image"
import { FaFacebook, FaGlobe, FaInstagram, FaTelegramPlane, FaVk } from "react-icons/fa"
import { IoMailOutline } from "react-icons/io5"

import { translateDistrict } from "@/app/lib/translations/admin/enum.translationts"
import { getIceRinkInfoById } from "@/lib/data/ice-rinks"

import { MetroStations } from "../common/metro-station/metro-stations"

const getSocialIcon = (name: string) => {
  switch (name) {
    case "VK":
      return <FaVk className="w-4 h-4 fill-slate-500" />
    case "TELEGRAM":
      return <FaTelegramPlane className="w-4 h-4 fill-slate-500" />
    case "INSTAGRAM":
      return <FaInstagram className="w-4 h-4 fill-slate-500" />
    case "FACEBOOK":
      return <FaFacebook className="w-4 h-4 fill-slate-500" />
    default:
      return <FaGlobe className="w-4 h-4 fill-slate-500" />
  }
}

type Props = { id: string }

export default async function IceRinkFullInfo({ id }: Props) {
  const rink = await getIceRinkInfoById(id).catch(e => console.log(e))

  return (
    <Card
      className="overflow-hidden p-0"
      cover={
        <Image
          src="/images/fallback-rink.png"
          alt={rink.name}
          width={1280}
          height={250}
          className="w-full h-[250px] object-cover"
        />
      }
    >
      <Title level={3}>{rink.name}</Title>
      <div className="flex gap-6">
        <Flex vertical gap={8} className="max-w-full">
          {rink.address &&
            <Space size="small" align="center">
              <MapPin className="w-4 h-4 stroke-slate-500" />
              <Text>{rink.address}</Text>
            </Space>
          }
          {rink.district && (
            <Space size="small" align="center">
              <Map className="w-4 h-4 stroke-slate-500" />
              <Text>{translateDistrict(rink.district)} район</Text>
            </Space>
          )}

          {rink.metroStations?.length > 0 && (
            <Space size="small" align="center" wrap>
              <Train className="w-4 h-4 stroke-slate-500" />
              <MetroStations metroStations={rink.metroStations} />
            </Space>
          )}
        </Flex>
        <Flex vertical gap={8} justify="end">
          {rink.socialLinks?.length > 0 && (
            <Space
              size="small"
              className="flex flex-wrap items-center mt-1"
              split={<Divider type="vertical" />}
            >
              {rink.socialLinks.map((social) => (
                <span key={`social-${social.id}`} className="flex items-center gap-1">
                              {getSocialIcon(social.type)}
                  <TextLink target="_blank" rel="noopener noreferrer"
                            href={social.url}>{social.type}</TextLink>
                            </span>
              ))}
            </Space>
          )}
          {rink.website && <span className="flex items-center gap-1">
                              <FaGlobe className="w-4 h-4 fill-slate-500" />
                <TextLink target="_blank" rel="noopener noreferrer"
                          href={rink.website}>Сайт: {rink.website}</TextLink>
                            </span>}
          {rink.phones?.length > 0 && (
            <Space size="small" align="center">
              <Phone className="w-4 h-4 stroke-slate-500" />
              <Space
                size="small"
                className="flex flex-wrap items-center"
                split={<Divider type="vertical" />}
              >
                {rink.phones.map((phone) => (
                  <TextLink key={`phone-${phone.id}`} href={`tel:${phone.number}`}>
                    {phone.number} ({phone.comment})
                  </TextLink>
                ))}
              </Space>
            </Space>
          )}
          {rink.email && <span className="flex items-center gap-1">
                        <IoMailOutline className="w-4 h-4 fill-slate-500" />
                        <TextLink target="_blank" rel="noopener noreferrer" href={rink.website}>{rink.email}</TextLink>
                    </span>}
        </Flex>
      </div>
    </Card>
  )
}
