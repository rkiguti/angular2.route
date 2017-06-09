"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const photos_routing_1 = require("./photos.routing");
const photos_component_1 = require("./photos.component");
const photo_details_component_1 = require("./photo-details.component");
let PhotosModule = class PhotosModule {
};
PhotosModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, photos_routing_1.photosRouting],
        declarations: [photos_component_1.PhotosComponent, photo_details_component_1.PhotoDetailsComponent],
    })
], PhotosModule);
exports.PhotosModule = PhotosModule;
//# sourceMappingURL=photos.module.js.map