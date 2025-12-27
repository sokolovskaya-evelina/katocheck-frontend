import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { MetroStationEnum } from "../types/enums"
import { MetroStation } from "../ui/common/metro-station/metro-station"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getMetroStationColor(station: MetroStationEnum): string {
  switch (station) {
    // Линия 1 — Кировско-Выборгская (красная)
    case MetroStationEnum.Devyatkino:
    case MetroStationEnum.GrazhdanskiyProspekt:
    case MetroStationEnum.Akademichskaya:
    case MetroStationEnum.Politekhnicheskaya:
    case MetroStationEnum.PloshchadMuzhestva:
    case MetroStationEnum.Lesnaya:
    case MetroStationEnum.Vyborgskaya:
    case MetroStationEnum.PloshchadLenina:
    case MetroStationEnum.Chernyshevskaya:
    case MetroStationEnum.PloshchadVosstaniya:
    case MetroStationEnum.Vladimirskaya:
    case MetroStationEnum.Pushkinskaya:
    case MetroStationEnum.TekhnologicheskiyInstitut1:
    case MetroStationEnum.Baltiyskaya:
    case MetroStationEnum.Narvskaya:
    case MetroStationEnum.KirovskiyZavod:
    case MetroStationEnum.Avtovo:
    case MetroStationEnum.LeninskiyProspekt:
    case MetroStationEnum.ProspektVeteranov:
      return "bg-red-600"

    // Линия 2 — Московско-Петроградская (синяя)
    case MetroStationEnum.Parnas:
    case MetroStationEnum.ProspektProsveshcheniya:
    case MetroStationEnum.Ozerki:
    case MetroStationEnum.Udelnaya:
    case MetroStationEnum.Pionerskaya:
    case MetroStationEnum.ChyornayaRechka:
    case MetroStationEnum.Petrogradskaya:
    case MetroStationEnum.Gorkovskaya:
    case MetroStationEnum.NevskiyProspekt:
    case MetroStationEnum.SennayaPloshchad:
    case MetroStationEnum.TekhnologicheskiyInstitut2:
    case MetroStationEnum.Frunzenskaya:
    case MetroStationEnum.MoskovskieVorota:
    case MetroStationEnum.Elektrosila:
    case MetroStationEnum.ParkPobedy:
    case MetroStationEnum.Moskovskaya:
    case MetroStationEnum.Zvezdnaya:
    case MetroStationEnum.Kupchino:
      return "bg-blue-600"

    // Линия 3 — Невско-Василеостровская (зелёная)
    case MetroStationEnum.Begovaya:
    case MetroStationEnum.Zenit:
    case MetroStationEnum.Primorskaya:
    case MetroStationEnum.Vasileostrovskaya:
    case MetroStationEnum.GostinyDvor:
    case MetroStationEnum.Mayakovskaya:
    case MetroStationEnum.PloshchadAlexandraNevskogo1:
    case MetroStationEnum.Elizarovskaya:
    case MetroStationEnum.Lomonosovskaya:
    case MetroStationEnum.Proletarskaya:
    case MetroStationEnum.Obukhovo:
    case MetroStationEnum.Rybatskoye:
      return "bg-green-600"

    // Линия 4 — Правобережная (оранжевая)
    case MetroStationEnum.GornyInstitut:
    case MetroStationEnum.Spasskaya:
    case MetroStationEnum.Dostoevskaya:
    case MetroStationEnum.LigovskiyProspekt:
    case MetroStationEnum.PloshchadAlexandraNevskogo2:
    case MetroStationEnum.Novocherkasskaya:
    case MetroStationEnum.Ladozhskaya:
    case MetroStationEnum.ProspektBolshevikov:
    case MetroStationEnum.UlicaDybenko:
      return "bg-yellow-500"

    // Линия 5 — Фрунзенско-Приморская (фиолетовая)
    case MetroStationEnum.KomendantskiyProspekt:
    case MetroStationEnum.StarayaDerevnya:
    case MetroStationEnum.KrestovskiyOstrov:
    case MetroStationEnum.Chkalovskaya:
    case MetroStationEnum.Sportivnaya:
    case MetroStationEnum.Admiralteyskaya:
    case MetroStationEnum.Sadovaya:
    case MetroStationEnum.Zvenigorodskaya:
    case MetroStationEnum.ObvodnyyKanal:
    case MetroStationEnum.Volkovskaya:
    case MetroStationEnum.Bukharestskaya:
    case MetroStationEnum.Mezhdunarodnaya:
    case MetroStationEnum.ProspektSlavy:
    case MetroStationEnum.Dunaiskaya:
    case MetroStationEnum.Shushary:
      return "bg-purple-600"

    default:
      return "bg-muted-foreground"
  }
}

export function getMetroStationOptions() {
  const groupMap: Record<string, MetroStationEnum[]> = {
    "Кировско-Выборгская": [
      MetroStationEnum.Devyatkino,
      MetroStationEnum.GrazhdanskiyProspekt,
      MetroStationEnum.Akademichskaya,
      MetroStationEnum.Politekhnicheskaya,
      MetroStationEnum.PloshchadMuzhestva,
      MetroStationEnum.Lesnaya,
      MetroStationEnum.Vyborgskaya,
      MetroStationEnum.PloshchadLenina,
      MetroStationEnum.Chernyshevskaya,
      MetroStationEnum.PloshchadVosstaniya,
      MetroStationEnum.Vladimirskaya,
      MetroStationEnum.Pushkinskaya,
      MetroStationEnum.TekhnologicheskiyInstitut1,
      MetroStationEnum.Baltiyskaya,
      MetroStationEnum.Narvskaya,
      MetroStationEnum.KirovskiyZavod,
      MetroStationEnum.Avtovo,
      MetroStationEnum.LeninskiyProspekt,
      MetroStationEnum.ProspektVeteranov,
    ],
    "Московско-Петроградская": [
      MetroStationEnum.Parnas,
      MetroStationEnum.ProspektProsveshcheniya,
      MetroStationEnum.Ozerki,
      MetroStationEnum.Udelnaya,
      MetroStationEnum.Pionerskaya,
      MetroStationEnum.ChyornayaRechka,
      MetroStationEnum.Petrogradskaya,
      MetroStationEnum.Gorkovskaya,
      MetroStationEnum.NevskiyProspekt,
      MetroStationEnum.SennayaPloshchad,
      MetroStationEnum.TekhnologicheskiyInstitut2,
      MetroStationEnum.Frunzenskaya,
      MetroStationEnum.MoskovskieVorota,
      MetroStationEnum.Elektrosila,
      MetroStationEnum.ParkPobedy,
      MetroStationEnum.Moskovskaya,
      MetroStationEnum.Zvezdnaya,
      MetroStationEnum.Kupchino,
    ],
    "Невско-Василеостровская": [
      MetroStationEnum.Begovaya,
      MetroStationEnum.Zenit,
      MetroStationEnum.Primorskaya,
      MetroStationEnum.Vasileostrovskaya,
      MetroStationEnum.GostinyDvor,
      MetroStationEnum.Mayakovskaya,
      MetroStationEnum.PloshchadAlexandraNevskogo1,
      MetroStationEnum.Elizarovskaya,
      MetroStationEnum.Lomonosovskaya,
      MetroStationEnum.Proletarskaya,
      MetroStationEnum.Obukhovo,
      MetroStationEnum.Rybatskoye,
    ],
    "Правобережная": [
      MetroStationEnum.GornyInstitut,
      MetroStationEnum.Spasskaya,
      MetroStationEnum.Dostoevskaya,
      MetroStationEnum.LigovskiyProspekt,
      MetroStationEnum.PloshchadAlexandraNevskogo2,
      MetroStationEnum.Novocherkasskaya,
      MetroStationEnum.Ladozhskaya,
      MetroStationEnum.ProspektBolshevikov,
      MetroStationEnum.UlicaDybenko,
    ],
    "Фрунзенско-Приморская": [
      MetroStationEnum.KomendantskiyProspekt,
      MetroStationEnum.StarayaDerevnya,
      MetroStationEnum.KrestovskiyOstrov,
      MetroStationEnum.Chkalovskaya,
      MetroStationEnum.Sportivnaya,
      MetroStationEnum.Admiralteyskaya,
      MetroStationEnum.Sadovaya,
      MetroStationEnum.Zvenigorodskaya,
      MetroStationEnum.ObvodnyyKanal,
      MetroStationEnum.Volkovskaya,
      MetroStationEnum.Bukharestskaya,
      MetroStationEnum.Mezhdunarodnaya,
      MetroStationEnum.ProspektSlavy,
      MetroStationEnum.Dunaiskaya,
      MetroStationEnum.Shushary,
    ],
  }

  return Object.entries(groupMap).map(([lineName, stations]) => ({
    label: lineName,
    title: lineName,
    options: stations.map(station => ({
      value: station,
      label: <MetroStation name={station} indicatorPosition="start" />,
    })),
  }))
}
