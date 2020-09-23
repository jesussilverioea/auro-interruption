# auro-dialog

auro-dialog appear above the page and require the user's attention.

## Properties

| Property | Attribute | Type      | Default      | Description                                      |
|----------|-----------|-----------|--------------|--------------------------------------------------|
| `dom`    |           | `String`  |              | Internal property generates DOM from SVG string  |
| `modal`  | `modal`   | `Boolean` |              | Modal dialog force the user to take an action (no close button) |
| `open`   | `open`    | `String`  |              | this attr forces the modal to open               |
| `svg`    | `svg`     | `Object`  | "firstChild" | internal variable for holding the svg DOMElement. Do not use this. |
| `zero`   |           | `String`  | 0            | Internal property to set zero value              |

## Slots

| Name      | Description                                |
|-----------|--------------------------------------------|
| `content` | Injects content into the body of the modal |
| `footer`  | Used for action options, e.g. buttons      |
| `header`  | Text to display as the header of the modal |
