import { Subjects, Publisher, ExpirationCompleteEvent } from '@ticketsla/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
