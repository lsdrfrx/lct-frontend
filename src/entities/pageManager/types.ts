export const PLATFORMS = {
  IOS: 'ios',
  ANDROID: 'android',
  WEB: 'web',
} as const

export const CHANGE_TYPE = {
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
} as const

type ValueOf<T> = T[keyof T]

export type Platform = ValueOf<typeof PLATFORMS>
export type ChangeType = ValueOf<typeof CHANGE_TYPE>
export type ConfigSchema = Record<string, any>

export interface ComponentConfig {
  id: string
  name: string
  // TODO: Написать enum для типов компонентов
  type: string
  platform?: Platform
  version: string
  configSchema: ConfigSchema
  defaultConfig: ConfigSchema
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface ScreenConfig {
  id: string
  name: string
  description?: string
  platform?: Platform
  minAppVersion: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface CompositionConfig {
  id: string
  screenId: string
  componentId: string
  orderIndex: number
  config: ConfigSchema
  conditions: Record<string, string | Array<string>>
  isActive: boolean
  validFrom: Date
  validTo: Date
}

export interface Experiment {
  id: string
  name: string
  description?: string
  key: string
  platforms: Array<Platform>
  minVersion: string
  maxVersion: string
  trafficPercentage: number
  buckets: Record<string, number>
  isActive: boolean
  startDate: Date
  endDate: Date
}

export interface ChangeHistory {
  id: string
  screenId: string
  componentId: string
  ChangeType: ChangeType
  ChangeData: ChangeData
  changedBy: string
  changedAt: Date
}

export interface ChangeData {
  old: Record<string, any>
  new: Record<string, any>
}
