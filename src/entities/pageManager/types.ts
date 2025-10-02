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

export const COMPONENT_KIND = {
  BUTTON: 'button',
  TEXTBUTTON: 'textbutton',
  COLUMN: 'column',
  ROW: 'row',
  CHECKBOX: 'checkbox',
  INPUT: 'input',
  STEPPER: 'stepper',
  TEXT: 'text',
  SPACER: 'spacer',
  ICON: 'icon',
  IMAGE: 'image',
  ICONBUTTON: 'iconbutton',
  CONTAINER: 'container',
  SCROLLABLEROW: 'scrollable_row',
  SCAFFOLD: 'scaffold'
} as const
// TODO: вынести в отдельное место для автоматического создания типа
export type ComponentKind = ValueOf<typeof COMPONENT_KIND>

export interface PageConfig {
  states: Record<string, any>
  root: StatelessComponent
}

export interface StatelessComponent {
  kind: ComponentKind
  id?: string
  body?: Array<StatelessComponent>,
  properties?: Array<any>,
  value?: any
}

export interface StatefulComponent extends StatelessComponent {
  state: string
}
