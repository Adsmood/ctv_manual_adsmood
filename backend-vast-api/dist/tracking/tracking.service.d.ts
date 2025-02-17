export declare class TrackingService {
    handleTracking(eventData: {
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
}
