// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";
import closeIcon from '@alaskaairux/orion-icons/dist/icons/close-lg_es6.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-modal provides users a way to ...
 *
 * @attr {Boolean} blocking - Blocking modals force the user to take an action (no close button)
 * @attr {Object} svg - internal variable for holding the svg DOMElement. Do not use this.
 * @attr {open} open - this attr forces the modal to open
 * @slot modal-content - Injects content into the body of the modal.
 * @slot {String} header - Text to display as the header of the modal.
 * @function toggleViewable - toggles the 'open' property on the element
 */

// build the component class
class AuroModal extends LitElement {
  constructor() {
    super();
    this.dom = new DOMParser().parseFromString(closeIcon.svg, 'text/html');
    this.svg = this.dom.body.firstChild;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      blocking: { type: Boolean },
      open:   { type: Boolean }
    };
  }

  toggleViewable(evt) {
    evt.stopPropagation();
    this.open = !this.open;
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const classes = {
      'auro-modal': true,
      'auro-modalBlocking': this.blocking,
      'auro-modal--open': !this.blocking && this.open,
      'auro-modalBlocking--open': this.blocking && this.open,
    },

     contentClasses = {
      'util_insetXxxl--squish': true,
      'modal': true,
      'modal--open': this.open,
    }


    return html`
      <div class="${classMap(classes)}" id="modal-overlay" @click=${this.blocking ? null : this.toggleViewable}>
      </div>
      <div class="${classMap(contentClasses)}">
        <div class="modalHeader">
          <h1 class="auro_heading auro_heading--700 modalHeader--noMargin">
            <slot name="modal-header"></slot>
          </h1>
          ${this.blocking
            ? html``
            : html`
              <div class="modalHeader--action" id="modal-close" @click="${this.toggleViewable}">
                ${this.svg}
              </div>
          `}
        </div>
        <slot name="modal-content">
        </slot>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-modal")) {
  customElements.define("auro-modal", AuroModal);
}
