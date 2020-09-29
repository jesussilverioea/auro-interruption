// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";

// build the component class
class LongText extends LitElement {
  // constructor() {
  //   super();
  // }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      count: { type: Number }
    };
  }

  returnText(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789          ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <p>${this.returnText(this.count)}<p>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("long-text")) {
  customElements.define("long-text", LongText);
}
