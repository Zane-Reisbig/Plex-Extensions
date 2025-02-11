// ==UserScript==
// @name         Auto Skip Intro
// @namespace    http://tampermonkey.net/
// @version      2025-02-09
// @description  Skip it!
// @author       Zane Reisbig
// @match        https://app.plex.tv/desktop/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=plex.tv
// @grant        none
// ==/UserScript==
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
(function () {
    "use strict";
    var _this = this;
    // Generated By Create New Playground
    // Generated At: 2025-02-10 00:13:52.533946
    // Author: Zane Reisbig
    var TIME = {
        SECOND: 1000,
        MINUTE: 1000 * 60,
        HOUR: 1000 * 60 * 60
    };
    var CONFIG = {
        WAIT_BEFORE_CLICK_DELAY: TIME.SECOND * 5,
        AFTER_CLICK_COOLDOWN: TIME.MINUTE
    };
    var sleep = function (delayMS) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (res) {
                    setTimeout(function () { return res(true); }, delayMS);
                })];
        });
    }); };
    var elementFound = function (selector) { return __awaiter(_this, void 0, void 0, function () {
        var iter;
        var _this = this;
        return __generator(this, function (_a) {
            iter = 0;
            return [2 /*return*/, new Promise(function (res) { return __awaiter(_this, void 0, void 0, function () {
                    var found;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                found = document.querySelector(selector);
                                _a.label = 1;
                            case 1:
                                if (!(found == null)) return [3 /*break*/, 3];
                                if (iter % 100 === 0) {
                                    console.log("Keep Alive From - ELEMENT FOUND BODY");
                                }
                                found = document.querySelector(selector);
                                return [4 /*yield*/, sleep(20)];
                            case 2:
                                _a.sent();
                                iter = iter + 1;
                                return [3 /*break*/, 1];
                            case 3:
                                res(found);
                                return [2 /*return*/];
                        }
                    });
                }); })];
        });
    }); };
    var selectorClassList = [
        "AudioVideoFullPlayer-overlayButton-D2xSex",
        "Button-button-TxWeuE",
        "Link-link-SxPFpG",
        "Button-default-sxqP0M",
        "Button-large-mFYLSo",
        "Link-default-BXtKLo",
    ];
    var main = function () { return __awaiter(_this, void 0, void 0, function () {
        var skipIntro;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 4];
                    return [4 /*yield*/, elementFound("button." + selectorClassList.join("."))];
                case 1:
                    skipIntro = _a.sent();
                    // A little delay to hear the intro start to play
                    // Also because sometimes the intro detection is a little off
                    // Adjust to your liking
                    return [4 /*yield*/, sleep(CONFIG.WAIT_BEFORE_CLICK_DELAY)];
                case 2:
                    // A little delay to hear the intro start to play
                    // Also because sometimes the intro detection is a little off
                    // Adjust to your liking
                    _a.sent();
                    skipIntro.click();
                    return [4 /*yield*/, sleep(CONFIG.AFTER_CLICK_COOLDOWN)];
                case 3:
                    _a.sent();
                    console.log("\n\n\n\n--- SKIPPER RE-ACTIVATED ---\n\n\n");
                    return [3 /*break*/, 0];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    main();
    console.log("\n\n\n\n--- INTRO SKIPPER CALLED ---\n\n\n");
})();
