import type { Nullable } from '@/utils'
import type { RouteInfo } from '@/entities/http'
import type { PageConfig } from './types'

const BASE_URL = "http://localhost:5555"

export const getPageConfig = async (routeInfo: RouteInfo): Promise<Nullable<PageConfig>> => {
  const response = await 
    (await fetch(`${BASE_URL}/api/v1/screens/details?screenName=home&platform=0&appVersion=1.0`))
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

  if (comp.properties) {
    if ((typeof comp.properties) === 'string') {
      const props = JSON.parse(comp.properties);
      mappedComp = { ...mappedComp, ...props };
    }
    else {
      mappedComp = { ...mappedComp, ...comp.properties };
    }
  }

  return mappedComp;
}
