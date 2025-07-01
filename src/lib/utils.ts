import { MetroStationEnum } from "@/types/enums"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

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
