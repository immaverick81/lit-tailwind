
import "./components/login-page";
import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('app-element')
export class AppElement extends LitElement {
  static styles = css`
    :host {
      padding: 15px;
    }
  `;

  render() {
    return html`
      <login-page></login-page>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-element': AppElement;
  }
}
