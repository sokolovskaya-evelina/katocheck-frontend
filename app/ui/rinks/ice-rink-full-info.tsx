import Image from "next/image"
import { Card, Divider, Flex, Space } from "antd"
import { Map, MapPin, Phone, Train } from "lucide-react"
import { FaFacebook, FaGlobe, FaInstagram, FaTelegramPlane, FaVk } from "react-icons/fa"
import { MetroStations } from "../common/metro-station/metro-stations"
import { RinkType } from "../../types/types"
import Text from "antd/es/typography/Text"
import Title from "antd/es/typography/Title"
import TextLink from "antd/es/typography/Link"
import { FavoriteButton } from "../common/favorite-button"

const getSocialIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "vk":
    case "вконтакте":
      return <FaVk className="w-4 h-4 fill-slate-500" />
    case "telegram":
      return <FaTelegramPlane className="w-4 h-4 fill-slate-500" />
    case "instagram":
      return <FaInstagram className="w-4 h-4 fill-slate-500" />
    case "facebook":
      return <FaFacebook className="w-4 h-4 fill-slate-500" />
    default:
      return <FaGlobe className="w-4 h-4 fill-slate-500" />
  }
}

type Props = { rink: RinkType }

export default function IceRinkFullInfo({ rink }: Props) {
  const imageSrc = rink.imageUrl || "/images/fallback-rink.png"

  return (
    <Card
      className="overflow-hidden p-0"
      cover={
        <Image
          src={imageSrc}
          alt={rink.name}
          width={1280}
          height={250}
          className="w-full h-[250px] object-cover"
        />
      }
    >
      <div className="flex justify-between gap-6 px-6 pb-6">
        <Flex vertical gap={8} className="max-w-full">
          <Title level={3}>{rink.name}</Title>

          <Space size="small" align="center">
            <MapPin className="w-4 h-4 stroke-slate-500" />
            <Text>{rink.address}</Text>
          </Space>

          {rink.district && (
            <Space size="small" align="center">
              <Map className="w-4 h-4 stroke-slate-500" />
              <Text>{rink.district}</Text>
            </Space>
          )}

          {rink.metroStations?.length > 0 && (
            <Space size="small" align="center" wrap>
              <Train className="w-4 h-4 stroke-slate-500" />
              <MetroStations metroStations={rink.metroStations} />
            </Space>
          )}

          <Space size="small" align="center">
            <Phone className="w-4 h-4 stroke-slate-500" />
            {rink.phones?.length > 0 && (
              <Space
                size="small"
                className="flex flex-wrap items-center"
                split={<Divider type="vertical" />}
              >
                {rink.phones.map((phone, i) => (
                  <TextLink key={`phone-${i}`} href={`tel:${phone}`}>
                    {phone}
                  </TextLink>
                ))}
              </Space>
            )}
          </Space>

          {rink.socials?.length > 0 && (
            <Space
              size="small"
              className="flex flex-wrap items-center mt-1"
              split={<Divider type="vertical" />}
            >
              {rink.socials.map((social, i) => (
                <span key={`social-${i}`} className="flex items-center gap-1">
                  {getSocialIcon(social.name)}
                  <TextLink target="_blank" rel="noopener noreferrer" href={social.url}>
                    {social.name}
                  </TextLink>
                </span>
              ))}
            </Space>
          )}
        </Flex>
        <FavoriteButton id={rink.rinkId} />
      </div>
    </Card>
  )
}
