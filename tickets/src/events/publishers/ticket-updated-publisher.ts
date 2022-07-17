import { Publisher, TicketUpdatedEvent, Subjects } from '@ticketsla/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
