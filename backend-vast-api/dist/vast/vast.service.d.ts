export declare class VastService {
    generateVastXml(assets: {
        background: string;
        video: string;
        qr: string;
    }, tracking: {
        impressionUrl: string;
        startUrl: string;
        firstQuartileUrl: string;
        midpointUrl: string;
        thirdQuartileUrl: string;
        completeUrl: string;
    }): string;
}
