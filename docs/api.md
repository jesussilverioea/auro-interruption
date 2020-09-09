# auro-modal

auro-modal provides users a way to ...

## Properties

| Property   | Attribute  | Type         | Default      | Description                                      |
|------------|------------|--------------|--------------|--------------------------------------------------|
| `blocking` | `blocking` | `Boolean`    |              | Blocking modals force the user to take an action (no close button) |
| `dom`      |            |              |              |                                                  |
| `header`   | `header`   | `String`     |              | Text to display as the header of the modal.      |
| `open`     | `open`     | `open`       |              | this attr forces the modal to open               |
| `svg`      |            | `any \| any` | "firstChild" |                                                  |

## Methods

| Method           | Type               |
|------------------|--------------------|
| `toggleViewable` | `(evt: any): void` |

## Slots

| Name            | Description                                 |
|-----------------|---------------------------------------------|
| `modal-content` | Injects content into the body of the modal. |
