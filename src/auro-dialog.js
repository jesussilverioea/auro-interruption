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
 * auro-dialog appear above the page and require the user's attention.
 *
 * @attr {Boolean} modal - Modal dialog restricts the user to take an action (no default close actions)
 * @attr {Boolean} sm - Sets dialog box to small style
 * @attr {Boolean} md - Sets dialog box to medium style
 * @attr {Boolean} open - Sets state of dialog to open
 * @slot header - Text to display as the header of the modal
 * @slot content - Injects content into the body of the modal
 * @slot footer - Used for action options, e.g. buttons
 * @function toggleViewable - toggles the 'open' property on the element
 */

// build the component class
class AuroDialog extends LitElement {
  constructor() {
    super();

    /**
     * @private internal variable
     */
    this.dom = new DOMParser().parseFromString(closeIcon.svg, 'text/html');

    /**
     * @private internal variable
     */
    this.svg = this.dom.body.firstChild;

    /**
     * @private internal variable
     */
    this.zero = 0;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      modal: { type: Boolean },
      open:   {
        type: Boolean,
        reflect: true
        }
    };
  }

  // This function removes a CSS selector if the footer slot is empty
  firstUpdated() {
    const slot = this.shadowRoot.querySelector("#footer"),
      slotWrapper = this.shadowRoot.querySelector("#footerWrapper");

    this.slt = slot.assignedNodes();

    if (this.slt.length === this.zero) {
      return slotWrapper.classList.remove("dialog-footer");
    }

    return null
  }

  /**
   * @private function for the purpose of determining open/close state of modal
   * @param {object} evt - Accepts event
   * @returns {boolean} - Returns open state
   */
  toggleViewable(evt) {
    const toggleEvent = document.createEvent("HTMLEvents");
    const body = document.body;
    const scrollY = body.style.top;

    body.style.position = '';
    body.style.top = '';

    window.scrollTo(0, parseInt(scrollY || '0') * -1);

    toggleEvent.initEvent("toggle", true, false);
    evt.stopPropagation();
    this.open = !this.open;
    this.dispatchEvent(toggleEvent);
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const classes = {
      'dialogOverlay': true,
      'dialogOverlay--modal': this.modal && this.open,
      'dialogOverlay--open': this.open
    },

     contentClasses = {
      'dialog': true,
      'dialog--open': this.open,
    }


    return html`
      <div class="${classMap(classes)}" id="dialog-overlay" @click=${this.modal ? null : this.toggleViewable}>
      </div>

      <dialog class="${classMap(contentClasses)}" aria-labelledby="dialog-header">
        <div class="dialog-header">
          <h1 class="heading heading--700 util_stackMarginNone--top" id="dialog-header">
            <slot name="header">Default header ...</slot>
          </h1>
          ${this.modal
            ? html``
            : html`
              <button class="dialog-header--action" id="dialog-close" @click="${this.toggleViewable}">
                <div>${this.svg}</div>
                <div class="util_displayHiddenVisually">Click me to close</div>
              </button>
          `}
        </div>
        <div class="dialog-content">
          <slot name="content"></slot>
        </div>
        <div class="dialog-footer" id="footerWrapper">
          <slot name="footer" id="footer"></slot>
        </div>
      </dialog>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-dialog")) {
  customElements.define("auro-dialog", AuroDialog);
}
