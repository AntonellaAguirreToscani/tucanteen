"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppProfile = void 0;
const core_1 = require("@stencil/core");
const router_1 = require("@stencil/router");
let AppProfile = class AppProfile {
    normalize(name) {
        if (name) {
            return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
        }
        return '';
    }
    render() {
        if (this.match && this.match.params.name) {
            return (<div class="app-profile">
          <p>Hello! My name is {this.normalize(this.match.params.name)}. My name was passed in through a route param!</p>
        </div>);
        }
    }
};
__decorate([
    core_1.Prop(),
    __metadata("design:type", typeof (_a = typeof router_1.MatchResults !== "undefined" && router_1.MatchResults) === "function" ? _a : Object)
], AppProfile.prototype, "match", void 0);
AppProfile = __decorate([
    core_1.Component({
        tag: 'app-profile',
        styleUrl: 'app-profile.css',
        shadow: true,
    })
], AppProfile);
exports.AppProfile = AppProfile;
//# sourceMappingURL=app-profile.js.map