import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `bra-ket`
 * Combine HTML Template with a custom element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BraKet extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'bra-ket',
      },
    };
  }
}

window.customElements.define('bra-ket', BraKet);
