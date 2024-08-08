const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  fromName: {
    type: String,
  },
  fromEmail: {
    type: String,
  },
  toName: {
    type: String,
  },
  toEmail: {
    type: String,
  },
  cc: [{
    type: String,
  }],
  bcc: [{
    type: String,
  }],
  threadId: {
    type: Number,
  },
  messageId: {
    type: String,
  },
  inReplyTo: {
    type: String,
  },
  references: [{
    type: String,
  }],
  body: {
    type: String,
  },
  subject: {
    type: String,
  },
  sentAt: {
    type: Date,
  },
});

const Email = mongoose.model('Email', emailSchema, 'emails');

module.exports = Email;
