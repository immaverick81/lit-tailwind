import { css } from "lit";
import { html, LitElement } from "lit-element";
import { customElement } from "lit/decorators";

@customElement('login-page')
class LoginPage extends LitElement {
    static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      top: 50%;
      left: 50%;
    }
  `;

    render() {
        return html`
            <div>
                Login Page
            </div>
        `
    }
}
export default LoginPage;