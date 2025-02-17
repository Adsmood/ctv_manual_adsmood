import { Injectable } from '@nestjs/common';

@Injectable()
export class TrackingService {
  async handleTracking(eventData: { event: string; campaignId: string; timestamp: number }) {
    // Aquí se puede implementar la lógica real para almacenar los eventos en la base de datos
    console.log('Evento de tracking recibido:', eventData);
    return { status: 'ok', received: eventData };
  }
}