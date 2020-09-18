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
 * auro-modal appear above the page and require the user's attention.
 *
 * @attr {Boolean} blocking - Blocking modals force the user to take an action (no close button)
 * @attr {Object} svg - internal variable for holding the svg DOMElement. Do not use this.
 * @prop {String} dom - Internal property generates DOM from SVG string
 * @prop {String} zero - Internal property to set zero value
 * @attr {String} open - this attr forces the modal to open
 * @slot header - Text to display as the header of the modal
 * @slot content - Injects content into the body of the modal
 * @slot footer - Used for action options, e.g. buttons
 * @function toggleViewable - toggles the 'open' property on the element
 */

// build the component class
class AuroModal extends LitElement {
  constructor() {
    super();
    this.dom = new DOMParser().parseFromString(closeIcon.svg, 'text/html');
    this.svg = this.dom.body.firstChild;
    this.zero = 0;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      blocking: { type: Boolean },
      open:   {
        type: Boolean,
        reflect: true
        }
    };
  }

  // This
  firstUpdated() {
    const slot = this.shadowRoot.querySelector("#footer"),
      slotWrapper = this.shadowRoot.querySelector("#footerWrapper");

    this.slt = slot.assignedNodes();

    if (this.slt.length === this.zero) {
      return slotWrapper.classList.remove("modal-footer");
    }

    return null
  }

  /**
   * Private function for the purpose of determining open/close state of modal
   * @param {object} evt - Accepts event
   * @returns {boolean} - Returns open state
   */
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
      'modalOverlay': true,
      'modalOverlay--blocking': this.blocking,
      'modalOverlay--open': !this.blocking && this.open,
      'modalOverlay--blocking--open': this.blocking && this.open,
    },

     contentClasses = {
      'modal': true,
      'modal--open': this.open,
    }


    return html`
      <div class="${classMap(classes)}" id="modal-overlay" @click=${this.blocking ? null : this.toggleViewable}>
      </div>

      <div class="modalWrapper">
        <dialog class="${classMap(contentClasses)}" aria-labelledby="modal-header">
          <div class="modal-header">
            <h1 class="heading heading--700 util_stackMarginNone--top" id="modal-header">
              <slot name="header">Default header ...</slot>
            </h1>
            ${this.blocking
              ? html``
              : html`
                <button class="modal-header--action" id="modal-close" @click="${this.toggleViewable}">
                  <div>${this.svg}</div>
                  <div class="util_displayHiddenVisually">Click me to close</div>
                </button>
            `}
          </div>
          <div class="modal-content">
            <slot name="content"></slot>
          </div>
          <div class="modal-footer" id="footerWrapper">
            <slot name="footer" id="footer"></slot>
          </div>
        </dialog>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-modal")) {
  customElements.define("auro-modal", AuroModal);
}
