# Компоненты

Здесь описаны все компоненты и их параметры

## Структура компонента

Каждый компонент сохраняет следующую структуру:
```
{
	kind: тип компонента,
	properties: {
		ключ: значение
	},
	body: [ ...вложенные компоненты... ]
}
```

У каждого компонента есть свои особые properties, но есть и общие для всех компонентов:
```
weight: number - управляет тем, как сильно растягивается элемент внутри строки/столбца
borderRadius: number - значение скругления углов в пикселях
paddingTop: number - отступ сверху в пикселях
paddingBottom: number - отступ снизу в пикселях
paddingLeft: number - отступ слева в пикселях
paddingRight: number - отступ справа в пикселях
```

## Текст | VText

```
kind: text
body: -
properties: { 
	value: string,
	textStyle: string = "m20"
	textColor: string = *'normal'* | 'variant' | 'accent' | 'pay',
	singleLine: boolean = false,
	lineThrough: boolean = false
}
```

## Строка | VRow

```
kind: row
body: [ ... ]
properties: {
	spacing: number = 0,
	valign: string = "top"
}
```

## Строка с прокруткой | ScrollableRow

```
kind: scrollable_row
properties: -
body: [ {expected single component, probably row/column} ]
```

## Столбец | VColumn

```
kind: column,
body: [ ... ]
properties: {
	spacing: number = 0
}
```

## Кнопка | VButton

```
kind: button
body: -
properties: {
	text: string,
	subtext: string = "",
	color: string = *'primary'* | 'secondary' | 'overlay-secondary' | 'ghost' | 'accent' | 'accent2' | 'pay' | 'pay2' | 'success' | 'error'
	size: string = 'xs' | 's' | *'m'* | 'l' | 'xl'
	disabled: boolean = false
}
```

## Чекбокс | VCheckbox

```
kind: checkbox
body: -
properties: {
	text: string = ""
}
```
## Текстовая кнопка | TextButton

```
kind: textbutton
properties: -
body: [ {expected single text component} ]
```

## Контейнер | VContainer

```
kind: container
properties: {
	background: string = *'background'* | 'variant'
}
body: [ {expected single component} ]
```

## Иконка | VIcon

```
kind: icon
properties: {
	iconId: string = 'rating' | 'favorite' | 'delete' | 'corner-down-right' | 'chevron-right'
	size: number
	fill: string = *'default'* | 'orange'
}
body: -
```

## Изображение | VImage

```
kind: image
properties: {
	url: string,
	width: number,
	height: number
}
body: -
```

## Поле ввода | VInput

```
kind: input
properties: {
	placeholder: string = "",
	error: boolean = false
}
body: -
```

## Базовая разметка экрана | VScaffold

```
kind: scaffold
properties: -
body: [
	{ nav bar component },
	{ content component },
	{ bottom bar component }
]
```

## Пустое место | VSpacer

```
kind: spacer
properties: -
body: -
```

## Степпер | VStepper

```
kind: stepper
properties: {
	preset: string = *"default"* | "overlay"
	hint: string = ""
	error: string = ""
}
body: -
```
