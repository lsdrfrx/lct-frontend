import type { Nullable } from '@/utils'
import type { RouteInfo } from '@/entities/http'
import type { StatelessComponent, PageConfig } from './types'

import { http } from '@/entities/http'

interface PageConfigDTO {
  states: Record<string, any>
  root: StatelessComponent
}

const mapPageConfig = (dto: PageConfigDTO): Nullable<PageConfig> => ({
  root: dto.root,
  states: dto.states,
})

export const getPageConfig = async (routeInfo: RouteInfo): Promise<Nullable<PageConfig>> =>
  await http.post('http://localhost:5555/api/config', routeInfo, mapPageConfig, {
    'Content-Type': 'application/json',
  })
