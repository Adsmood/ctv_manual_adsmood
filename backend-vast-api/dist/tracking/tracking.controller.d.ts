import { TrackingService } from './tracking.service';
export declare class TrackingController {
    private readonly trackingService;
    constructor(trackingService: TrackingService);
    trackEvent(eventData: {
        event: string;
        campaignId: string;
        timestamp: number;
    }): Promise<{
        status: string;
        received: {
            event: string;
            campaignId: string;
            timestamp: number;
        };
    }>;
    healthCheck(): {
        status: string;
    };
}
