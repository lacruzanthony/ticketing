import { Subjects, Publisher, PaymentCreatedEvent } from '@ticketsla/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
