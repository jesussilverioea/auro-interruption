# auro-modal

auro-modal appear above the page and require the user's attention.

## Properties

| Property   | Attribute  | Type      | Default      | Description                                      |
|------------|------------|-----------|--------------|--------------------------------------------------|
| `blocking` | `blocking` | `Boolean` |              | Blocking modals force the user to take an action (no close button) |
| `dom`      |            | `String`  |              | Internal property generates DOM from SVG string  |
| `open`     | `open`     | `String`  |              | this attr forces the modal to open               |
| `svg`      | `svg`      | `Object`  | "firstChild" | internal variable for holding the svg DOMElement. Do not use this. |
| `zero`     |            | `String`  | 0            | Internal property to set zero value              |

## Methods

| Method           | Type                     | Description                                      |
|------------------|--------------------------|--------------------------------------------------|
| `toggleViewable` | `(evt: object): boolean` | Private function for the purpose of determining open/close state of modal<br /><br />**evt**: Accepts event |

## Slots

| Name      | Description                                |
|-----------|--------------------------------------------|
| `content` | Injects content into the body of the modal |
| `footer`  | Used for action options, e.g. buttons      |
| `header`  | Text to display as the header of the modal |
