import { Injectable } from '@nestjs/common';
import { create } from 'xmlbuilder2';

@Injectable()
export class VastService {
  generateVastXml(
    assets: { background: string; video: string; qr: string },
    tracking: {
      impressionUrl: string;
      startUrl: string;
      firstQuartileUrl: string;
      midpointUrl: string;
      thirdQuartileUrl: string;
      completeUrl: string;
    }
  ): string {
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

    // Generar XML con pretty print
    let xmlStr = create(vastObj).end({ prettyPrint: true });
    // Reemplazar macros globales
    xmlStr = xmlStr.replace(/\[CACHEBUSTING\]/g, Math.floor(Math.random() * 1000000).toString());
    xmlStr = xmlStr.replace(/\[TIMESTAMP\]/g, Date.now().toString());

    return xmlStr;
  }
}