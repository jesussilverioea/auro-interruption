# auro-modal

auro-modal provides users a way to ...

## Properties

| Property   | Attribute  | Type      | Default      | Description                                      |
|------------|------------|-----------|--------------|--------------------------------------------------|
| `blocking` | `blocking` | `Boolean` |              | Blocking modals force the user to take an action (no close button) |
| `dom`      |            |           |              |                                                  |
| `open`     | `open`     | `open`    |              | this attr forces the modal to open               |
| `svg`      | `svg`      | `Object`  | "firstChild" | internal variable for holding the svg DOMElement. Do not use this. |

## Methods

| Method           | Type               |
|------------------|--------------------|
| `toggleViewable` | `(evt: any): void` |

## Slots

| Name            | Description                                 |
|-----------------|---------------------------------------------|
| `header`        | Text to display as the header of the modal. |
| `modal-content` | Injects content into the body of the modal. |
