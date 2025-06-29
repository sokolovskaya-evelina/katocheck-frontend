import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Train, Map } from "lucide-react"
import { Heart } from "lucide-react"
import { FaVk, FaTelegramPlane, FaInstagram, FaFacebook, FaGlobe } from "react-icons/fa"
import { MetroStations } from "@/components/MetroStation/MetroStations"
import { RinkType } from "@/types/types"

const getSocialIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "vk":
    case "вконтакте":
      return <FaVk className="w-4 h-4" />
    case "telegram":
      return <FaTelegramPlane className="w-4 h-4" />
    case "instagram":
      return <FaInstagram className="w-4 h-4" />
    case "facebook":
      return <FaFacebook className="w-4 h-4" />
    default:
      return <FaGlobe className="w-4 h-4" />
  }
}

type Props = { rink: RinkType }

export default function IceRinkFullInfo({ rink }: Props) {
  return (
    <Card className="mb-4 overflow-hidden p-0">
      <Image
        src={rink?.imageUrl ?? "/images/ice-rink.jpg"}
        alt="Каток"
        width={1200}
        height={400}
        className="w-full h-[250px] object-cover"
      />
      <div className="flex flex-col md:flex-row justify-between gap-4 p-6 pt-0">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold mb-2">{rink.name}</h1>

          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{rink.address}</span>
          </div>

          {rink.district && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Map className="w-4 h-4" />
              <span>{rink.district}</span>
            </div>
          )}

          {rink.metro?.length > 0 && (
            <div className="flex items-center gap-2 text-muted-foreground flex-wrap">
              <Train className="w-4 h-4" />
              <MetroStations metroStations={rink.metro} />
            </div>
          )}

          {rink.phones?.length > 0 && (
            <div className="flex items-center gap-2 text-muted-foreground flex-wrap">
              <Phone className="w-4 h-4" />
              {rink.phones.map((phone, i) => (
                <a
                  key={i}
                  href={`tel:${phone}`}
                  className="underline underline-offset-2 hover:text-primary transition"
                >
                  {phone}
                </a>
              ))}
            </div>
          )}

          {rink.socials?.map((social, i) => (
            <div
              key={social.name}
              className="flex items-center gap-2 text-muted-foreground flex-wrap"
            >
              {getSocialIcon(social.name)}
              <a
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                href={social.url}
                aria-label={`Перейти в ${social.name}`}
                className="underline underline-offset-2 hover:text-primary transition"
              >
                <span>{social.name}</span>
              </a>
            </div>
          ))}
        </div>

        <Button variant="outline" className="flex gap-2">
          <Heart
            className={rink.isFavorite ? "fill-primary text-primary" : "text-muted-foreground"}
          />
          Добавить в избранное
        </Button>
      </div>
    </Card>
  )
}
