import { MetroStationEnum } from "@/types/enums"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { MetroStation } from "@/components/MetroStation/MetroStation"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getMetroStationColor(station: MetroStationEnum): string {
  switch (station) {
    // Линия 1 — Кировско-Выборгская (красная)
    case MetroStationEnum.DEVYATKINO:
    case MetroStationEnum.GRAZHDANSKIY_PROSPEKT:
    case MetroStationEnum.AKADEMICHSKAYA:
    case MetroStationEnum.POLITEKHNICHESKAYA:
    case MetroStationEnum.PLOSHCHAD_MUZHESTVA:
    case MetroStationEnum.LESNAYA:
    case MetroStationEnum.VYBORGSKAYA:
    case MetroStationEnum.PLOSHCHAD_LENINA:
    case MetroStationEnum.CHERNYSHEVSKAYA:
    case MetroStationEnum.PLOSHCHAD_VOSSTANIYA:
    case MetroStationEnum.VLADIMIRSKAYA:
    case MetroStationEnum.PUSHKINSKAYA:
    case MetroStationEnum.TEKHNOLOGICHESKIY_INSTITUT_1:
    case MetroStationEnum.BALTIYSKAYA:
    case MetroStationEnum.NARVSKAYA:
    case MetroStationEnum.KIROVSKIY_ZAVOD:
    case MetroStationEnum.AVTOVO:
    case MetroStationEnum.LENINSKIY_PROSPEKT:
    case MetroStationEnum.PROSPEKT_VETERANOV:
      return "bg-red-600"

    // Линия 2 — Московско-Петроградская (синяя)
    case MetroStationEnum.PARNAS:
    case MetroStationEnum.PROSPEKT_PROSVESHCHENIYA:
    case MetroStationEnum.OZERKI:
    case MetroStationEnum.UDELNAYA:
    case MetroStationEnum.PIONERSKAYA:
    case MetroStationEnum.CHYORNAYA_RECHKA:
    case MetroStationEnum.PETROGRADSKAYA:
    case MetroStationEnum.GORKOVSKAYA:
    case MetroStationEnum.NEVSKIY_PROSPEKT:
    case MetroStationEnum.SENNAYA_PLOSHCHAD:
    case MetroStationEnum.TEKHNOLOGICHESKIY_INSTITUT_2:
    case MetroStationEnum.FRUNZENSKAYA:
    case MetroStationEnum.MOSKOVSKIE_VOROTA:
    case MetroStationEnum.ELEKTROSILA:
    case MetroStationEnum.PARK_POBEDY:
    case MetroStationEnum.MOSKOVSKAYA:
    case MetroStationEnum.ZVEZDNAYA:
    case MetroStationEnum.KUPCHINO:
      return "bg-blue-600"

    // Линия 3 — Невско-Василеостровская (зелёная)
    case MetroStationEnum.BEGOVAYA:
    case MetroStationEnum.ZENIT:
    case MetroStationEnum.PRIMORSKAYA:
    case MetroStationEnum.VASILEOSTROVSKAYA:
    case MetroStationEnum.GOSTINY_DVOR:
    case MetroStationEnum.MAYAKOVSKAYA:
    case MetroStationEnum.PLOSHCHAD_ALEXANDRA_NEVSKOGO_1:
    case MetroStationEnum.ELIZAROVSKAYA:
    case MetroStationEnum.LOMONOSOVSKAYA:
    case MetroStationEnum.PROLETARSKAYA:
    case MetroStationEnum.OBUKHOVO:
    case MetroStationEnum.RYBATSKOYE:
      return "bg-green-600"

    // Линия 4 — Правобережная (оранжевая)
    case MetroStationEnum.GORNY_INSTITUT:
    case MetroStationEnum.SPASSKAYA:
    case MetroStationEnum.DOSTOEVSKAYA:
    case MetroStationEnum.LIGOVSKIY_PROSPEKT:
    case MetroStationEnum.PLOSHCHAD_ALEXANDRA_NEVSKOGO_2:
    case MetroStationEnum.NOVOCHERKASSKAYA:
    case MetroStationEnum.LADOZHSKAYA:
    case MetroStationEnum.PROSPEKT_BOLSHEVIKOV:
    case MetroStationEnum.ULICA_DYBENKO:
      return "bg-yellow-500"

    // Линия 5 — Фрунзенско-Приморская (фиолетовая)
    case MetroStationEnum.KOMENDANTSKIY_PROSPEKT:
    case MetroStationEnum.STARAYA_DEREVNYA:
    case MetroStationEnum.KRESTOVSKIY_OSTROV:
    case MetroStationEnum.CHKALOVSKAYA:
    case MetroStationEnum.SPORTIVNAYA:
    case MetroStationEnum.ADMIRALTEYSKAYA:
    case MetroStationEnum.SADOVAYA:
    case MetroStationEnum.ZVENIGORODSKAYA:
    case MetroStationEnum.OBVODNYY_KANAL:
    case MetroStationEnum.VOLKOVSKAYA:
    case MetroStationEnum.BUKHARESTSKAYA:
    case MetroStationEnum.MEZHDUNARODNAYA:
    case MetroStationEnum.PROSPEKT_SLAVY:
    case MetroStationEnum.DUNAISKAYA:
    case MetroStationEnum.SHUSHARY:
      return "bg-purple-600"

    default:
      return "bg-muted-foreground"
  }
}

export function getMetroStationOptions() {
  const groupMap: Record<string, MetroStationEnum[]> = {
    "Кировско-Выборгская": [
      MetroStationEnum.DEVYATKINO,
      MetroStationEnum.GRAZHDANSKIY_PROSPEKT,
      MetroStationEnum.AKADEMICHSKAYA,
      MetroStationEnum.POLITEKHNICHESKAYA,
      MetroStationEnum.PLOSHCHAD_MUZHESTVA,
      MetroStationEnum.LESNAYA,
      MetroStationEnum.VYBORGSKAYA,
      MetroStationEnum.PLOSHCHAD_LENINA,
      MetroStationEnum.CHERNYSHEVSKAYA,
      MetroStationEnum.PLOSHCHAD_VOSSTANIYA,
      MetroStationEnum.VLADIMIRSKAYA,
      MetroStationEnum.PUSHKINSKAYA,
      MetroStationEnum.TEKHNOLOGICHESKIY_INSTITUT_1,
      MetroStationEnum.BALTIYSKAYA,
      MetroStationEnum.NARVSKAYA,
      MetroStationEnum.KIROVSKIY_ZAVOD,
      MetroStationEnum.AVTOVO,
      MetroStationEnum.LENINSKIY_PROSPEKT,
      MetroStationEnum.PROSPEKT_VETERANOV,
    ],
    "Московско-Петроградская": [
      MetroStationEnum.PARNAS,
      MetroStationEnum.PROSPEKT_PROSVESHCHENIYA,
      MetroStationEnum.OZERKI,
      MetroStationEnum.UDELNAYA,
      MetroStationEnum.PIONERSKAYA,
      MetroStationEnum.CHYORNAYA_RECHKA,
      MetroStationEnum.PETROGRADSKAYA,
      MetroStationEnum.GORKOVSKAYA,
      MetroStationEnum.NEVSKIY_PROSPEKT,
      MetroStationEnum.SENNAYA_PLOSHCHAD,
      MetroStationEnum.TEKHNOLOGICHESKIY_INSTITUT_2,
      MetroStationEnum.FRUNZENSKAYA,
      MetroStationEnum.MOSKOVSKIE_VOROTA,
      MetroStationEnum.ELEKTROSILA,
      MetroStationEnum.PARK_POBEDY,
      MetroStationEnum.MOSKOVSKAYA,
      MetroStationEnum.ZVEZDNAYA,
      MetroStationEnum.KUPCHINO,
    ],
    "Невско-Василеостровская": [
      MetroStationEnum.BEGOVAYA,
      MetroStationEnum.ZENIT,
      MetroStationEnum.PRIMORSKAYA,
      MetroStationEnum.VASILEOSTROVSKAYA,
      MetroStationEnum.GOSTINY_DVOR,
      MetroStationEnum.MAYAKOVSKAYA,
      MetroStationEnum.PLOSHCHAD_ALEXANDRA_NEVSKOGO_1,
      MetroStationEnum.ELIZAROVSKAYA,
      MetroStationEnum.LOMONOSOVSKAYA,
      MetroStationEnum.PROLETARSKAYA,
      MetroStationEnum.OBUKHOVO,
      MetroStationEnum.RYBATSKOYE,
    ],
    Правобережная: [
      MetroStationEnum.GORNY_INSTITUT,
      MetroStationEnum.SPASSKAYA,
      MetroStationEnum.DOSTOEVSKAYA,
      MetroStationEnum.LIGOVSKIY_PROSPEKT,
      MetroStationEnum.PLOSHCHAD_ALEXANDRA_NEVSKOGO_2,
      MetroStationEnum.NOVOCHERKASSKAYA,
      MetroStationEnum.LADOZHSKAYA,
      MetroStationEnum.PROSPEKT_BOLSHEVIKOV,
      MetroStationEnum.ULICA_DYBENKO,
    ],
    "Фрунзенско-Приморская": [
      MetroStationEnum.KOMENDANTSKIY_PROSPEKT,
      MetroStationEnum.STARAYA_DEREVNYA,
      MetroStationEnum.KRESTOVSKIY_OSTROV,
      MetroStationEnum.CHKALOVSKAYA,
      MetroStationEnum.SPORTIVNAYA,
      MetroStationEnum.ADMIRALTEYSKAYA,
      MetroStationEnum.SADOVAYA,
      MetroStationEnum.ZVENIGORODSKAYA,
      MetroStationEnum.OBVODNYY_KANAL,
      MetroStationEnum.VOLKOVSKAYA,
      MetroStationEnum.BUKHARESTSKAYA,
      MetroStationEnum.MEZHDUNARODNAYA,
      MetroStationEnum.PROSPEKT_SLAVY,
      MetroStationEnum.DUNAISKAYA,
      MetroStationEnum.SHUSHARY,
    ],
  }

  return Object.entries(groupMap).map(([lineName, stations]) => ({
    label: lineName,
    title: lineName,
    options: stations.map(station => ({
      value: station,
      label: <MetroStation name={station} indicatorPosition={"start"} />,
    })),
  }))
}
