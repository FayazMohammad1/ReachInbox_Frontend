const Email = require('../models/userModel');

const generateRandomMessageId = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let randomId = '';
  for (let i = 0; i < 8; i++) {
    randomId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return `${randomId}@gmail.com`;
};

exports.save_default_emails = async () => {
  try {
    // Check if the emails collection is empty
    const emailCount = await Email.countDocuments();

    if (emailCount === 0) {
      // Default emails to be saved
      const defaultEmails = [
        {
          id : 1,
          toName: "Fayaz",
          toEmail: "fayaz@gmail.com",
          fromName: "Mitrajit Chandra",
          fromEmail: "mitrajit2024@gmail.com",
          subject : "Catching Up Soon?", 
          cc: ["fayaz@gmail.com", "jane.doe@example.com"],
          bcc: ["fayaz@gmail.com", "john.smith@example.com", "alice.jones@example.com"],
          threadId: 1,
          inReplyTo: null,
          references: [],
          body: "<p>Hey Fayaz,</p><p>Just wanted to drop a quick note to see how you’re doing. It’s been a while since we caught up. Let’s grab coffee or chat soon!</p><p>Hope all is well!</p><p>Cheers,<br>Mitrajit Chandra</p>",
          messageId: generateRandomMessageId(),
          sentAt: new Date()
        },
        {
          id : 2,
          toName: "Fayaz",
          toEmail: "fayaz@gmail.com",
          fromName: "Shaw",
          fromEmail: "Shaw2024@gmail.com",
          subject : " Let’s Reconnect!", 
          cc: ["fayaz@gmail.com", "jane.doe@example.com"],
          bcc: ["fayaz@gmail.com", "john.smith@example.com", "alice.jones@example.com"],
          threadId: 2,
          inReplyTo: null,
          references: [],
          body: "<p>Hi Fayaz,</p><p>Just checking in to see how everything is going on your end. It’s been a while since our last chat. How about we catch up over lunch or a call soon?</p><p>Looking forward to hearing from you!</p><p>Best,<br>Shaw</p>",
          messageId: generateRandomMessageId(),
          sentAt: new Date()
        }
        // Add other default emails if needed
      ];

      // Insert default emails into the database
      await Email.insertMany(defaultEmails);

      console.log('Default emails saved successfully');
    } else {
      console.log('Database already contains emails');
    }
  } catch (error) {
    console.error('Failed to save default emails:', error);
  }
};

exports.saveEmail = async (req, res, next) => {
  try {
    const highestIdEmail = await Email.findOne().sort('-id').exec();
    const nextId = highestIdEmail ? highestIdEmail.id + 1 : 1;

    const randomMessageId = generateRandomMessageId();

    const emailData = { ...req.body, id: nextId, messageId: randomMessageId , sentAt : new Date() };

    const newEmail = await Email.create(emailData);

    res.status(200).json({
      status: 'success',
      message: 'Email saved successfully',
      email: newEmail
    });
  } catch (error) {
    next(error);
  }
};

exports.getEmailsByFromEmail = async (req, res, next) => {
  try {
    const { fromEmail } = req.params;
    const emails = await Email.find({ toEmail : fromEmail });

    res.status(200).json({
      status: 'success',
      emails
    });
  } catch (error) {
    next(error);
  }
};
// In server/controllers/authController.js
exports.getEmailsByThreadId = async (req, res, next) => {
  try {
    const { threadId } = req.params;
    const emails = await Email.find({ threadId }).sort({ sentAt: 1 }); // Sort by sentAt in ascending order
    res.status(200).json({
      status: 'success',
      emails,
    });
  } catch (error) {
    next(error); // Passes errors to the global error handler
  }
};

// In server/controllers/authController.js
exports.sendReply = async (req, res, next) => {
  try {
    const {fromEmail ,  toEmail, subject, body, cc, bcc, threadId } = req.body;
    const highestIdEmail = await Email.findOne().sort('-id').exec();
    const nextId = highestIdEmail ? highestIdEmail.id + 1 : 1;
    const replyEmail = await Email.create({
      fromEmail,
      toEmail,
      subject,
      id : nextId,
      messageId : generateRandomMessageId(), 
      body,
      cc,
      bcc,
      threadId,
      sentAt: new Date(),
    });
    res.status(200).json({
      status: 'success',
      message: 'Reply sent successfully',
      email: replyEmail,
    });
  } catch (error) {
    next(error);
  }
};
// In server/controllers/authController.js
exports.deleteEmailsByThreadId = async (req, res, next) => {
  try {
    const { threadId } = req.params;

    const result = await Email.deleteMany({ threadId });

    if (result.deletedCount > 0) {
      res.status(200).json({
        status: 'success',
        message: `Emails with thread ID ${threadId} were deleted successfully.`,
      });
    } else {
      res.status(404).json({
        status: 'fail',
        message: `No emails found with thread ID ${threadId}.`,
      });
    }
  } catch (error) {
    next(error); // Pass the error to the global error handler
  }
};
