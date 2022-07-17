import { Publisher, TicketCreatedEvent, Subjects } from '@ticketsla/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
