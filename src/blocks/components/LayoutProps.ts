export interface LayoutProps {
  weight?: number,
  borderRadius?: number,
  paddingTop?: number,
  paddingBottom?: number,
  paddingLeft?: number,
  paddingRight?: number
}

export function layoutPropsToStyle(props: LayoutProps): any {
  const style: any = {};
  if (props.weight != null) {
    style['flex'] = props.weight;
  }
  if (props.borderRadius != null) {
    style['border-radius'] = `${props.borderRadius}px`
  }
  if (props.paddingTop != null) {
    style['padding-top'] = `${props.paddingTop}px`
  }
  if (props.paddingBottom != null) {
    style['padding-bottom'] = `${props.paddingBottom}px`
  }
  if (props.paddingLeft != null) {
    style['padding-left'] = `${props.paddingLeft}px`
  }
  if (props.paddingRight != null) {
    style['padding-right'] = `${props.paddingRight}px`
  }
  return style;
}