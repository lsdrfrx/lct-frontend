import type { Nullable } from '@/utils'
import type { RouteInfo } from '@/entities/http'
import type { ComponentConfig } from './types'

import { http } from '@/entities/http'
import { isValidPlatform } from './validation'

interface ComponentConfigDTO {
  Id: string
  Name: string
  Type: string
  Platform?: string
  Version: string
  ConfigSchema: any
  DefaultConfig: any
  IsActive: boolean
  CreatedAt: Date
  UpdatedAt: Date
}

const mapPageConfig = (dto: ComponentConfigDTO): Nullable<ComponentConfig> =>
  !isValidPlatform(dto.Platform)
    ? null
    : {
        id: dto.Id,
        name: dto.Name,
        type: dto.Type,
        platform: dto.Platform,
        configSchema: dto.ConfigSchema,
        defaultConfig: dto.DefaultConfig,
        createdAt: dto.CreatedAt,
        updatedAt: dto.UpdatedAt,
        isActive: dto.IsActive,
        version: dto.Version,
      }

export const getPageConfig = async (routeInfo: RouteInfo): Promise<Nullable<ComponentConfig>> =>
  await http.post('http://localhost:5555/api/config', routeInfo, mapPageConfig, {
    'Content-Type': 'application/json',
  })
