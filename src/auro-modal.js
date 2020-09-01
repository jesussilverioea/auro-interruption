// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";
import closeIcon from '@alaskaairux/orion-icons/dist/icons/close-lg_es6.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-modal provides users a way to ...
 *
 * @attr {String} header - Text to display as the header of the modal.
 * @attr {Boolean} blocking - Blocking modals force the user to take an action (no close button)
 * @attr {open} open - this attr forces the modal to open
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
      header: { type: String },
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
    return html`
            <div class="auro modal ${this.open ? 'modal-open' : ''}">
              <div class="modal-overlay ${this.open ? 'open' : 'overlay-closed'} ${this.blocking ? 'blocking' : ''}"
              @click=${this.blocking ? null : this.toggleViewable} id="modal-overlay">
                <div class="main-modal-bottom ${this.open ? 'open' : 'modal-closed'} util_insetXxxl--squish">
                  <div class="header-container">
                    <div class="modal-header" id="modal-header">
                      ${this.header}
                    </div>
                    ${this.blocking
                    ? html``
                     : html`
                      <div class="modal-close" @click="${this.toggleViewable}" id="modal-close">
                        ${this.svg}
                      </div>
                      `}
                  </div>
                  <slot name="modal-content" class="modal-container">
                  </slot>
                </div>
              </div>
            </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-modal")) {
  customElements.define("auro-modal", AuroModal);
}
