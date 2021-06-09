var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css } from "lit";
import { html, LitElement } from "lit-element";
import { customElement } from "lit/decorators";
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginPage.prototype.render = function () {
        return html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <div>\n                Login Page\n            </div>\n        "], ["\n            <div>\n                Login Page\n            </div>\n        "])));
    };
    LoginPage.styles = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    :host {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      top: 50%;\n      left: 50%;\n    }\n  "], ["\n    :host {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      top: 50%;\n      left: 50%;\n    }\n  "])));
    LoginPage = __decorate([
        customElement('login-page')
    ], LoginPage);
    return LoginPage;
}(LitElement));
export default LoginPage;
var templateObject_1, templateObject_2;
//# sourceMappingURL=login-page.js.map