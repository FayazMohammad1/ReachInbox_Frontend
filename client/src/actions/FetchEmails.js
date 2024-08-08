import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchEmails = () => {
  const [fromEmail, setFromEmail] = useState("fayaz@gmail.com"); // State to store the input email
  const [fromEmail1, setFromEmail1] = useState(""); // State to store the clicked email's fromEmail
  const [emails, setEmails] = useState([]); // State to store the fetched emails
  const [thread, setThread] = useState(null); // State to store the selected thread
  const [threadEmails, setThreadEmails] = useState([]); // State to store emails of the selected thread
  const [replying, setReplying] = useState(false); // State to control the reply form visibility
  const [replyDetails, setReplyDetails] = useState({
    fromEmail: fromEmail,
    toEmail: "",
    subject: "",
    body: "",
    cc: "",
    bcc: "",
  });

  // Function to fetch emails based on the fromEmail
  const handleFetchEmails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/auth/emails/${fromEmail}`
      );
      const emails = response.data.emails;

      // Reduce the emails to only the most recent one per unique threadId
      const uniqueEmails = Object.values(
        emails.reduce((acc, email) => {
          const { threadId } = email;
          // Only keep the most recent email per threadId
          if (
            !acc[threadId] ||
            new Date(email.sentAt) > new Date(acc[threadId].sentAt)
          ) {
            acc[threadId] = email;
          }
          return acc;
        }, {})
      );

      setEmails(uniqueEmails); // Update the emails state with the filtered data
    } catch (error) {
      console.error("Error fetching emails:", error);
      alert("Failed to fetch emails");
    }
  };

  // Function to handle click on an email and update the thread state
  const handleEmailClick = async (emailThread, fromEmail) => {
    setThread(emailThread); // Update the thread state with the clicked email's thread
    setFromEmail1(fromEmail); // Store the fromEmail of the clicked email
    setReplyDetails((prevState) => ({
      ...prevState,
      toEmail: fromEmail, // Set the "To Email" to the clicked email's "fromEmail"
    }));
    setReplying(false); // Hide the reply form initially

    try {
      const response = await axios.get(
        `http://localhost:3001/api/auth/thread/${emailThread}`
      );
      setThreadEmails(response.data.emails); // Update the threadEmails state with the emails in the selected thread
    } catch (error) {
      console.error("Error fetching thread emails:", error);
      alert("Failed to fetch thread emails");
    }
  };

  // Function to handle reply button click
  const handleReplyClick = () => {
    setReplying(true); // Show the reply form
  };
  function parseHtmlString(htmlString) {
    return { __html: htmlString };
  }
  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReplyDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSendReply = async () => {
    const replyData = {
      ...replyDetails,
      cc: replyDetails.cc.split(",").map((email) => email.trim()), // Convert CC to an array
      bcc: replyDetails.bcc.split(",").map((email) => email.trim()), // Convert BCC to an array
      threadId: thread, // Include the thread ID in the reply data
    };

    try {
      await axios.post("http://localhost:3001/api/auth/send-reply", replyData);
      alert("Reply sent successfully");
      setReplying(false); // Hide the reply form after sending
    } catch (error) {
      console.error("Error sending reply:", error);
      alert("Failed to send reply");
    }
    handleFetchEmails();
    handleEmailClick(thread, fromEmail1);
  };
  useEffect(() => {
    handleFetchEmails();
  }, []);

  return (
    <div>
      <ul>
        {emails.map((email, index) => (
          <li
            key={index}
            onClick={() => handleEmailClick(email.threadId, email.fromEmail)}
          >
            <p>
              <strong>From Email:</strong> {email.fromEmail}
            </p>
            <p>
              <strong>Subject:</strong> {email.subject}
            </p>
            <p>
              <strong>Sent At:</strong>{" "}
              {new Date(email.sentAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>

      {/* Display selected thread emails if thread is not null */}
      {thread !== null && (
        <div>
          <h3>Conversation for Thread ID: {thread}</h3>
          <ul>
            {threadEmails.map((email, index) => (
              <li key={index}>
                <p>
                  <strong>From Email:</strong> {email.fromEmail}
                </p>
                <p>
                  <strong>To Email:</strong> {email.toEmail}
                </p>
                <div>
                  <strong>BCC:</strong>
                  {email.bcc.map((bccEmail, index) => (
                    <p key={index}>{bccEmail}</p>
                  ))}
                </div>
                <div>
                  <strong>CC:</strong>
                  {email.cc.map((bccEmail, index) => (
                    <p key={index}>{bccEmail}</p>
                  ))}
                </div>
                <p>
                  <strong>Subject:</strong> {email.subject}
                </p>
                <p>
                  <strong>Sent At:</strong>{" "}
                  {new Date(email.sentAt).toLocaleString()}
                </p>
                <p>
                  <strong>Message:</strong> {email.body}
                </p>
              </li>
            ))}
          </ul>

          {/* Reply Button */}
          <button onClick={handleReplyClick}>Reply</button>

          {/* Reply Form: Display only if replying is true */}
          {replying && (
            <div>
              <h3>Reply to {replyDetails.toEmail}</h3>
              <div>
                <label>Subject:</label>
                <input
                  type="text"
                  name="subject"
                  value={replyDetails.subject}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Body:</label>
                <textarea
                  name="body"
                  value={replyDetails.body}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>CC:</label>
                <input
                  type="text"
                  name="cc"
                  value={replyDetails.cc}
                  onChange={handleInputChange}
                  placeholder="Separate emails with commas"
                />
              </div>
              <div>
                <label>BCC:</label>
                <input
                  type="text"
                  name="bcc"
                  value={replyDetails.bcc}
                  onChange={handleInputChange}
                  placeholder="Separate emails with commas"
                />
              </div>
              <button onClick={handleSendReply}>Send Reply</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FetchEmails;
