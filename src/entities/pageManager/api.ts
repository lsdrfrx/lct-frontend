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

export const getPageConfig = async (routeInfo: RouteInfo): Promise<Nullable<PageConfig>> => {
  const response = await 
    (await fetch("http://26.189.27.145:5270/api/v1/screens/details?screenName=home&platform=0&appVersion=1.0"))
    .json()

  const comp = {
    states: response.states,
    root: parseComponent(response.root)
  };
  console.log(comp);
  return comp;
}

const parseComponent = (comp: any): any => {
  let mappedComp: any = {
    kind: comp.kind
  };

  if (comp.body) {
    mappedComp['body'] = comp.body.map((it: any) => parseComponent(it));
  }

  if (comp.child) {
    mappedComp['child'] = parseComponent(comp.child);
  }

  if (comp.properties) {
    const props = JSON.parse(comp.properties);
    mappedComp = { ...mappedComp, ...props };
  }

  return mappedComp;
}
