// Used to mock data for the emails during development.
// Not used in the final project.
const emailList = [
  {
    _id: '1',
    user: '1',
    to_email: 'recipient1@example.com',
    from_email: 'sender1@example.com',
    email_body: 'Hello, this is the body of the email 1.',
    email_subject: 'Subject 1',
    draft: 1,
    date: '2024-07-12',
    time: '08:30'
  },
  {
    _id: '2',
    user: '1',
    to_email: 'recipient2@example.com',
    from_email: 'sender1@example.com',
    email_body: 'Hello, this is the body of the email 2.',
    email_subject: 'Subject 2',
    draft: 0,
    date: '2024-07-12',
    time: '09:00'
  },
  {
    _id: '3',
    user: '1',
    to_email: 'recipient3@example.com',
    from_email: 'sender1@example.com',
    email_body: 'Hello, this is the body of the email 3.',
    email_subject: 'Subject 3',
    date: '2024-07-12',
    draft: 1,
    time: '09:30'
  },
];
