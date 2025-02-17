import { Controller, Post, Get, Body } from '@nestjs/common';
import { TrackingService } from './tracking.service';

@Controller('tracking')
export class TrackingController {
  constructor(private readonly trackingService: TrackingService) {}

  @Post('event')
  async trackEvent(
    @Body() eventData: { event: string; campaignId: string; timestamp: number }
  ) {
    return await this.trackingService.handleTracking(eventData);
  }

  @Get('health')
  healthCheck() {
    return { status: 'Backend VAST API is healthy' };
  }
}