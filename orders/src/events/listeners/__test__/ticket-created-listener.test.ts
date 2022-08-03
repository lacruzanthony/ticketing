import mongoose from 'mongoose';
import { Message } from 'node-nats-streaming';
import { TicketCreatedListener } from '../ticket-created-listener';
import { natsWrapper } from '../../../nats-wrapper';
import { TicketCreatedEvent } from '@ticketsla/common';
import { Ticket } from '../../../models/ticket';

const setup = async () => {
  // create a instance of the listener.
  const listener = new TicketCreatedListener(natsWrapper.client);

  // create fake data event.
  const data: TicketCreatedEvent['data'] = {
    version: 0,
    id: new mongoose.Types.ObjectId().toHexString(),
    title: 'concert',
    price: 10,
    userId: new mongoose.Types.ObjectId().toHexString()
  };

  // create fake message obj.
  // @ts-ignore
  const msg: Message = {
    ack: jest.fn()
  };

  return { listener, data, msg };
};

it('creates and saves a ticket', async () => {
  const { listener, data, msg } = await setup();
  // call the onMessage fn with the data object + message object.
  await listener.onMessage(data, msg);
  // assertions
  const ticket = await Ticket.findById(data.id);

  expect(ticket).toBeDefined();
  expect(ticket!.title).toEqual(data.title);
  expect(ticket!.price).toEqual(data.price);
});

it('acks the message', async () => {
  const { listener, data, msg } = await setup();

  // call the onMessage fn with the data object + message object.
  await listener.onMessage(data, msg);

  // assertiong to make sure ack fn is called
  expect(msg.ack).toHaveBeenCalled();
});
