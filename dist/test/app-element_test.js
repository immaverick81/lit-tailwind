/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { AppElement } from '../app-element.js';
import { fixture, html } from '@open-wc/testing';
var assert = chai.assert;
suite('app-element', function () {
    test('is defined', function () {
        var el = document.createElement('app-element');
        assert.instanceOf(el, AppElement);
    });
    test('renders with default values', function () { return __awaiter(void 0, void 0, void 0, function () {
        var el;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<app-element></app-element>"], ["<app-element></app-element>"]))))];
                case 1:
                    el = _a.sent();
                    assert.shadowDom.equal(el, "\n      <h1>Hello, World!</h1>\n      <button part=\"button\">Click Count: 0</button>\n      <slot></slot>\n    ");
                    return [2 /*return*/];
            }
        });
    }); });
    test('renders with a set name', function () { return __awaiter(void 0, void 0, void 0, function () {
        var el;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["<app-element name=\"Test\"></app-element>"], ["<app-element name=\"Test\"></app-element>"]))))];
                case 1:
                    el = _a.sent();
                    assert.shadowDom.equal(el, "\n      <h1>Hello, Test!</h1>\n      <button part=\"button\">Click Count: 0</button>\n      <slot></slot>\n    ");
                    return [2 /*return*/];
            }
        });
    }); });
    test('handles a click', function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, button;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["<app-element></app-element>"], ["<app-element></app-element>"]))))];
                case 1:
                    el = (_a.sent());
                    button = el.shadowRoot.querySelector('button');
                    button.click();
                    return [4 /*yield*/, el.updateComplete];
                case 2:
                    _a.sent();
                    assert.shadowDom.equal(el, "\n      <h1>Hello, World!</h1>\n      <button part=\"button\">Click Count: 1</button>\n      <slot></slot>\n    ");
                    return [2 /*return*/];
            }
        });
    }); });
    test('styling applied', function () { return __awaiter(void 0, void 0, void 0, function () {
        var el;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["<app-element></app-element>"], ["<app-element></app-element>"]))))];
                case 1:
                    el = (_a.sent());
                    return [4 /*yield*/, el.updateComplete];
                case 2:
                    _a.sent();
                    assert.equal(getComputedStyle(el).paddingTop, '16px');
                    return [2 /*return*/];
            }
        });
    }); });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=app-element_test.js.map