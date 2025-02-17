"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VastService = void 0;
const common_1 = require("@nestjs/common");
const xmlbuilder2_1 = require("xmlbuilder2");
let VastService = class VastService {
    generateVastXml(assets, tracking) {
        const vastObj = {
            VAST: {
                '@version': '4.1',
                Ad: {
                    InLine: {
                        AdSystem: 'YourAdSystem',
                        AdTitle: 'Interactive CTV Ad',
                        Impression: { '#': tracking.impressionUrl },
                        Creatives: {
                            Creative: {
                                Linear: {
                                    Duration: '00:00:30',
                                    MediaFiles: {
                                        MediaFile: [
                                            {
                                                '@delivery': 'progressive',
                                                '@type': 'video/mp4',
                                                '@width': '1920',
                                                '@height': '1080',
                                                '#': assets.video
                                            }
                                        ]
                                    },
                                    TrackingEvents: {
                                        Tracking: [
                                            { '@event': 'start', '#': tracking.startUrl },
                                            { '@event': 'firstQuartile', '#': tracking.firstQuartileUrl },
                                            { '@event': 'midpoint', '#': tracking.midpointUrl },
                                            { '@event': 'thirdQuartile', '#': tracking.thirdQuartileUrl },
                                            { '@event': 'complete', '#': tracking.completeUrl }
                                        ]
                                    }
                                }
                            }
                        },
                        Extensions: {
                            Extension: [
                                { Name: 'Background', Url: assets.background },
                                { Name: 'QRCode', Url: assets.qr }
                            ]
                        }
                    }
                }
            }
        };
        let xmlStr = (0, xmlbuilder2_1.create)(vastObj).end({ prettyPrint: true });
        xmlStr = xmlStr.replace(/\[CACHEBUSTING\]/g, Math.floor(Math.random() * 1000000).toString());
        xmlStr = xmlStr.replace(/\[TIMESTAMP\]/g, Date.now().toString());
        return xmlStr;
    }
};
VastService = __decorate([
    (0, common_1.Injectable)()
], VastService);
exports.VastService = VastService;
//# sourceMappingURL=vast.service.js.map