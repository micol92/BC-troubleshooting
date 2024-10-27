namespace incidentapp07;
using { cuid, managed } from '@sap/cds/common';
using { Attachments } from '@cap-js/attachments';

@assert.unique: { title: [title] }
entity Incidents : cuid, managed {
  title: String(100) @mandatory;
  urgency: String(20);
  status: String(20);
  attachments: Composition of many Attachments;
  customerEmail: String(100);
  conversations: Composition of many Conversations on conversations.incident = $self;
  customer: Association to Customers;
}

entity Conversations : cuid {
  timestamp: DateTime;
  author: String(100);
  message: String(500);
  incident: Association to Incidents;
}

@assert.unique: { email: [email] }
entity Customers : cuid {
  firstName: String(50);
  lastName: String(50);
  phoneNumber: String(15);
  email: String(100) @mandatory;
  incidents: Association to many Incidents on incidents.customer = $self;
}

