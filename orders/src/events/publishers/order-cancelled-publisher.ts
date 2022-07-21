import { Publisher, OrderCancelledEvent, Subjects } from '@ticketsla/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
