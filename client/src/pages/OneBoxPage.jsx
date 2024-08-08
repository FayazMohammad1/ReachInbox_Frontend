import React, { useState, useEffect } from "react";
import Sidebar, { SidebarItem } from "../components/Sidebar.jsx";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  UserPen,
  Mail,
  Send,
  List,
  Inbox,
  ChartNoAxesColumn,
  House,
  ChevronDown,
  Reply,
  RotateCw,
  Search,
  ChevronsDown,
  X,
  Trash2,
  Zap,
} from "lucide-react";
import Navbar from "../components/Navbar.jsx";

import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 0,
};

const OneboxPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();
  const [token, setToken] = useState("");

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
    handleClose();
    const replyData = {
      ...replyDetails,
      cc: replyDetails.cc.split(",").map((email) => email.trim()), // Convert CC to an array
      bcc: replyDetails.bcc.split(",").map((email) => email.trim()), // Convert BCC to an array
      threadId: thread, // Include the thread ID in the reply data
    };

    try {
      await axios.post("http://localhost:3001/api/auth/send-reply", replyData);
      // alert("Reply sent successfully");
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

  const deleteThread = async () => {
    handleClose2();
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/auth/thread/${thread}`
      );
      // alert(response.data.message);
    } catch (error) {
      console.error("Error deleting emails:", error);
      alert("Failed to delete emails");
    }
    setThread(null);
    handleFetchEmails();
  };

  function parseHtmlString(htmlString) {
    return { __html: htmlString };
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'r' || event.key === 'R') {
        if (!open2) {  // Only set open if open2 is not active
          setOpen(true);
        }
      } else if (event.key === 'd' || event.key === 'D') {
        if (!open) {  // Only set open2 if open is not active
          setOpen2(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, open2]);

  


  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex flex-1 mb-4">
        <Sidebar className="fixed mt-[90px] w-72">
          <SidebarItem icon={<House size={22} />} text="Home" />
          <SidebarItem icon={<UserPen size={22} />} text="Questions" />
          <SidebarItem icon={<Mail size={22} />} text="Emails" />
          <SidebarItem icon={<Send size={22} />} text="Campaigns" />
          <SidebarItem icon={<List size={22} />} text="Leads" />

          <SidebarItem icon={<Inbox size={22} />} text="OneBox" alert active />

          <SidebarItem
            icon={<ChartNoAxesColumn size={22} />}
            text="Analytics"
          />
        </Sidebar>

        <div className="main body flex-1 flex flex-col w-[85%] md:ml-0 bg-white dark:bg-black overflow-hidden">
          {" "}
          <div className="main-container flex flex-col overflow-hidden">
            {" "}
            <Navbar />
            <section className="flex flex-col justify-center items-center overflow-hidden  ml-2 py-3 text-center bg-white dark:bg-black w-[97%]">
              <div className="flex flex-col justify-center items-center -mb-8 bg-white dark:bg-black overflow-hidden">
                <div className="flex overflow-hidden flex-wrap gap-px bg-white dark:bg-black ">
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit overflow-hidden">
                    <div className="ml-3.5 w-full border-r border-gray-200 dark:border-gray-400 overflow-hidden">
                      <div className="flex gap-2 max-md:flex-col overflow-hidden">
                        <div className="flex flex-col w-[25%] -mt-1 ml-5 mr-8">
                          <div className="flex flex-col ml-auto mr-auto overflow-hidden w-[100%] bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800">
                            <div className="flex relative gap-2 items-start pt-2 max-w-full w-[171px]">
                              <div className="flex z-0 flex-col self-end w-[171px] overflow-hidden">
                                <div className="flex z-10 gap-0 justify-center items-center p-2.5 overflow-hidden text-blue-500">
                                  <div className="self-stretch my-auto text-lg font-bold overflow-hidden">
                                    All Inbox(s)
                                  </div>
                                  <ChevronDown />
                                  <div className="overflow-hidden self-stretch p-1 my-auto w-6 text-sm whitespace-nowrap font-[510]"></div>
                                </div>
                                <div className="gap-2.5 self-stretch px-2.5 py-0.5 text-sm text-gray-800 dark:text-zinc-500 overflow-hidden">
                                  <span className="font-bold text-gray-800 dark:text-white">
                                    25/25{" "}
                                  </span>
                                  Inboxes selected
                                </div>
                              </div>
                              <div className="flex absolute top-4 z-0 gap-2 justify-center items-center self-start px-2 overflow-hidden w-8 h-8 rounded bg-gray-100 dark:bg-zinc-800 right-[-95px] cursor-pointer">
                                <Link to="/">
                                  <RotateCw className="text-gray-800 dark:text-white" />
                                </Link>
                              </div>
                            </div>
                            <div className="flex flex-col mt-2 max-w-full bg-white dark:bg-black w-[275px] overflow-hidden">
                              <div className="flex flex-col justify-center p-2 w-full whitespace-nowrap text-gray-800 dark:text-white text-opacity-20">
                                <div className="flex relative gap-1 items-center px-1.5 py-1 w-full rounded bg-gray-100 dark:bg-zinc-800 min-h-[28px]">
                                  <Search size={18} />
                                  <input
                                    type="text"
                                    placeholder="Search"
                                    className="bg-transparent outline-none text-gray-800 dark:text-white"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col justify-center px-2 py-1 w-full text-sm font-semibold leading-none">
                                <div className="flex gap-10 justify-between items-center w-full max-w-[256px]">
                                  <div className="flex gap-4 items-center self-stretch my-auto">
                                    <div className="flex gap-1 items-center self-stretch my-auto">
                                      <div className="flex gap-4 items-center self-stretch my-auto text-indigo-500 whitespace-nowrap">
                                        <div className="flex gap-2 items-center self-stretch px-2 py-1 my-auto rounded-2xl bg-gray-200 dark:bg-neutral-800">
                                          <div className="gap-1 self-stretch my-auto">
                                            26
                                          </div>
                                        </div>
                                      </div>
                                      <div className="self-stretch my-auto text-gray-800 dark:text-neutral-200 w-[91px]">
                                        New Replies
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex gap-4 items-center self-stretch my-auto whitespace-nowrap text-gray-800 dark:text-neutral-200">
                                    <div className="self-stretch my-auto w-[53px]">
                                      Newest
                                    </div>
                                    <ChevronDown />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col px-2.5 mt-2 w-full max-w-[278px] min-h-[969px]">
                              {emails.map((email, index) => (
                                <li
                                  key={index}
                                  onClick={() =>
                                    handleEmailClick(
                                      email.threadId,
                                      email.fromEmail
                                    )
                                  }
                                >
                                  <hr />

                                  <div className="flex gap-2 items-start pt-1 mt-2 pl-2 w-full max-w-[255px]">
                                    <div className="flex gap-2 items-start py-1 pl-1 rounded-lg min-w-[240px] w-[247px]">
                                      <div className="flex flex-col min-w-[240px] w-[243px]">
                                        <div className="flex flex-col w-full max-w-[243px]">
                                          <div className="flex relative gap-0.5 items-start w-full">
                                            <div className="z-0 text-sm font-medium -ml-9 leading-none text-gray-800 dark:text-white w-[280px]">
                                              {email.fromEmail}
                                            </div>
                                            <div className="z-0 text-xs text-gray-700 dark:text-zinc-50 text-opacity-40 ml-auto">
                                              {new Date(
                                                email.sentAt
                                              ).toLocaleDateString(undefined, {
                                                day: "numeric",
                                                month: "long", // You can use 'short' for abbreviated month names
                                                year: "numeric",
                                              })}
                                            </div>
                                          </div>
                                          <div className="text-xs whitespace-nowrap -ml-[150px] mb-2 text-ellipsis text-gray-800  dark:text-neutral-200">
                                            {email.subject}
                                          </div>
                                        </div>
                                        <div className="flex gap-2 items-start -mx-2 my-auto self-start mt-2 text-xs font-semibold">
                                          <div className="flex gap-2 items-center px-2 py-1 text-green-600 dark:text-emerald-300 whitespace-nowrap rounded-2xl bg-gray-200 dark:bg-neutral-800">
                                            <div className="flex gap-1 items-center self-stretch">
                                              <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b8fb3547844d14dfc042ecbac42a4ad937cd85c419a4ffbee7d1fbf4197631c?apiKey=668dba3ade934f8e90837c8a2a069136&&apiKey=668dba3ade934f8e90837c8a2a069136"
                                                className="object-contain shrink-0 self-stretch my-auto w-3 rounded-none aspect-square"
                                              />
                                              <div className="self-stretch text-xs my-auto p-1">
                                                Interested
                                              </div>
                                            </div>
                                          </div>
                                          <div className="flex gap-2 items-center px-2 py-1 text-gray-800 dark:text-white rounded-2xl bg-gray-200 dark:bg-neutral-800">
                                            <div className="flex gap-1 items-center self-stretch my-auto">
                                              <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf0d3d5fc4fd7c8d545800d0e0556cacc4a72143367c76e8039a1e52b3db1cc9?apiKey=668dba3ade934f8e90837c8a2a069136&&apiKey=668dba3ade934f8e90837c8a2a069136"
                                                className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                                              />
                                              <div className="self-stretch text-xs my-auto p-1">
                                                Campaign Name
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col ml-10 w-[90%] max-md:mt-3 ">
                          <div className="w-full">
                            <div className="flex gap-5 max-md:flex-col">
                              <div className="flex flex-col w-[90%] max-md:w-full">
                                <div className="flex flex-wrap grow w-full">
                                  <div className="flex z-10 flex-col self-end w-full">
                                    <div className="flex  gap-2 items-center border-b border-gray-200 dark:border-gray-800 pr-2 pl-4 w-full min-h-[70px]">
                                      <div className="flex gap-2 items-center self-stretch p-1 my-auto whitespace-nowrap rounded-lg w-full min-w-[240px]">
                                        <div className="flex flex-col flex-1">
                                          <div className="text-sm font-semibold text-gray-800 dark:text-white">
                                            Fayaz
                                          </div>
                                          <div className="text-xs text-gray-800 dark:text-white text-opacity-40">
                                            fayaz@gmail.com
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex gap-3.5 items-start self-stretch my-auto min-w-[240px]">
                                        <div className="flex gap-1 items-start min-w-[240px]">
                                          <div className="flex gap-1 w-56 items-center px-2 py-1.5 rounded bg-gray-200 dark:bg-stone-900">
                                            <div className="flex gap-2 items-center">
                                              <div className="flex flex-col w-3 rounded-none">
                                                <div className="flex justify-center items-center w-full h-5 rounded-full bg-gray-200 dark:bg-stone-700">
                                                  <div className="w-full h-3 bg-amber-300 rounded-[50px]" />
                                                </div>
                                              </div>
                                              <div className="text-xs font-semibold text-gray-800 dark:text-gray-300 w-[114px]">
                                                Meeting Completed
                                              </div>
                                            </div>
                                            <img
                                              loading="lazy"
                                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/514b04671f64daf4090b746def1462fd7d2be28c6226a898d78793c3df18690f?apiKey=668dba3ade934f8e90837c8a2a069136"
                                              className="object-contain w-4"
                                            />
                                          </div>
                                          <div className="flex gap-1 items-center w-20 px-2 py-2 text-xs font-semibold text-gray-800 dark:text-gray-300 whitespace-nowrap rounded bg-gray-200 dark:bg-stone-900">
                                            <div>Move</div>
                                            <img
                                              loading="lazy"
                                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f710e42e4cfaeb6e286c63c4fc6b8fc2a5a28bd1afded1248f0b22ebde284da?apiKey=668dba3ade934f8e90837c8a2a069136"
                                              className="object-contain w-4"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="z-10 shrink-0 h-px" />

                                    <div className="flex ml-auto mr-auto justify-center items-center p-1 text-xs font-semibold text-gray-800 dark:text-white whitespace-nowrap bg-gray-200 dark:bg-zinc-900 w-[51px] mt-2 mb-2">
                                      <div className="bg-gray-200 dark:bg-zinc-900 ">
                                        Today
                                      </div>
                                    </div>

                                    {/* Display selected thread emails if thread is not null */}
                                    <div className="overflow-scroll h-96 no-scrollbar">
                                      {thread !== null && (
                                        <div className="">
                                          <ul>
                                            {threadEmails.map(
                                              (email, index) => (
                                                <li key={index}>
                                                  <div className="flex flex-col text-sm max-w-[800px] mt-2">
                                                    <div className="flex flex-col w-full rounded-none max-md:max-w-full">
                                                      <div className="flex flex-col py-1 w-full rounded border border-solid shadow-sm bg-gray-100 dark:bg-neutral-900 border-gray-200 dark:border-neutral-700 max-md:max-w-full">
                                                        <div className="flex gap-2.5 items-center px-4 py-3 rounded bg-gray-100 dark:bg-neutral-900">
                                                          <div className="flex flex-wrap gap-5 justify-between self-stretch my-auto min-w-[240px] w-[721px]">
                                                            <div className="flex flex-col items-start text-gray-800 dark:text-zinc-400">
                                                              <div className="gap-2 font-semibold text-lg text-gray-800 dark:text-slate-50">
                                                                {email.subject}
                                                              </div>
                                                              <div className="self-stretch mt-2.5 flex flex-col items-start">
                                                                <span className="text-gray-800 dark:text-white font-semibold text-sm">
                                                                  FROM:{" "}
                                                                </span>{" "}
                                                                {
                                                                  <div className="">
                                                                    {
                                                                      email.fromEmail
                                                                    }
                                                                  </div>
                                                                }
                                                                <br />
                                                                <span className="text-gray-800 dark:text-white font-semibold text-sm">
                                                                  CC:{" "}
                                                                </span>{" "}
                                                                {email.cc.map(
                                                                  (
                                                                    bccEmail,
                                                                    index
                                                                  ) => (
                                                                    <p
                                                                      key={
                                                                        index
                                                                      }
                                                                    >
                                                                      {bccEmail}
                                                                    </p>
                                                                  )
                                                                )}
                                                                <span className="text-gray-800 dark:text-white font-semibold text-sm mt-4">
                                                                  BCC:{" "}
                                                                </span>{" "}
                                                                {email.bcc.map(
                                                                  (
                                                                    bccEmail,
                                                                    index
                                                                  ) => (
                                                                    <p
                                                                      key={
                                                                        index
                                                                      }
                                                                    >
                                                                      {bccEmail}
                                                                    </p>
                                                                  )
                                                                )}
                                                              </div>
                                                              <span className="text-gray-800 dark:text-white mt-4 font-semibold text-sm">
                                                                TO:{" "}
                                                              </span>{" "}
                                                              {
                                                                <div className="">
                                                                  {
                                                                    email.toEmail
                                                                  }
                                                                </div>
                                                              }
                                                            </div>

                                                            <div className="self-start font-semibold text-gray-800 dark:text-zinc-500">
                                                              {new Date(
                                                                email.sentAt
                                                              ).toLocaleString()}
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="flex gap-2.5 items-center px-4 py-3 rounded bg-gray-100 dark:bg-neutral-900">
                                                          <div className="flex flex-wrap gap-5 justify-between self-stretch my-auto min-w-[240px] w-[721px]">
                                                            <div className="flex flex-col items-start text-gray-800 dark:text-zinc-400">
                                                              <div
                                                                dangerouslySetInnerHTML={parseHtmlString(
                                                                  email.body
                                                                )}
                                                              />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </li>
                                              )
                                            )}
                                          </ul>

                                          {/* Reply Form: Display only if replying is true */}
                                          {replying && (
                                            <div>
                                              <h3>
                                                Reply to {replyDetails.toEmail}
                                              </h3>
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
                                              <button onClick={handleSendReply}>
                                                Send Reply
                                              </button>
                                            </div>
                                          )}
                                        </div>
                                      )}
                                    </div>

                                    {thread !== null && (
                                      <div className="flex mt-4 flex-row items-center justify-center gap-2.5 px-[35px] w-[20%] h-12 py-[13px] rounded-lg bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC]">
                                        <button
                                          onClick={handleOpen}
                                          className="all-[unset] flex gap-2 items-center justify-center box-border relative w-fit mt-[-1.00px] [font-family:'Open_Sans-SemiBold',Helvetica]  font-semibold text-white text-sm tracking-[0] leading-[21.7px] whitespace-nowrap rounded-md"
                                        >
                                          <Reply
                                            className="mb-1 font-bold"
                                            size={20}
                                          />
                                          Reply
                                        </button>
                                      </div>
                                    )}

                                    <Modal
                                      open={open}
                                      onClose={handleClose}
                                      aria-labelledby="modal-modal-title"
                                      aria-describedby="modal-modal-description"
                                    >
                                      <Box sx={style}>
                                        <div className="flex flex-col py-px w-full rounded-lg  bg-neutral-900 max-md:max-w-full">
                                          <div className="flex flex-wrap gap-2.5 items-center py-2.5 pr-2 pl-8 w-full text-sm font-bold tracking-tight whitespace-nowrap rounded-lg border border-solid bg-zinc-800 border-zinc-700 text-zinc-400 max-md:pl-5 max-md:max-w-full">
                                            <div className="flex grow shrink  items-start self-stretch my-auto min-w-[240px] w-[678px] max-md:max-w-full">
                                              <div className="gap-2 inline-flex">
                                                Reply
                                              </div>
                                              <X
                                                onClick={handleClose}
                                                className="cursor-pointer ml-auto"
                                              />
                                            </div>
                                          </div>

                                          <div className="flex flex-col items-start px-8 pb-2 mt-2 w-full text-sm border-b border-neutral-700 max-md:px-5 max-md:max-w-full">
                                            <div className="flex gap-2 items-start">
                                              <div className="text-zinc-400">
                                                To:
                                              </div>
                                              <div className="font-semibold text-neutral-200">
                                                {replyDetails.toEmail}
                                              </div>
                                            </div>
                                          </div>

                                          <div className="flex flex-wrap gap-2 items-start px-8 pb-2 mt-2 w-full text-sm border-b border-neutral-700 max-md:px-5 max-md:max-w-full">
                                            <div className="gap-2 text-zinc-400">
                                              From:
                                            </div>
                                            <div className="gap-2 font-semibold whitespace-nowrap text-neutral-200">
                                              {replyDetails.fromEmail}
                                            </div>
                                          </div>

                                          <div className="flex flex-col items-start px-8 pb-2 mt-2 w-full text-sm border-b border-neutral-700 max-md:px-5 max-md:max-w-full">
                                            <div className="flex gap-2 items-start">
                                              <div className="text-zinc-400">
                                                Subject:
                                              </div>
                                              <input
                                                type="text"
                                                name="subject"
                                                value={replyDetails.subject}
                                                onChange={handleInputChange}
                                                className="bg-transparent border-transparent focus:border-transparent outline-none font-semibold text-white focus:ring-0 w-36"
                                              />
                                            </div>
                                          </div>

                                          <div className="flex flex-col items-start mt-5 ml-8 max-w-full text-sm tracking-tight text-zinc-500 w-[481px]">
                                            <textarea
                                              rows={5}
                                              cols={90}
                                              name="body"
                                              value={replyDetails.body}
                                              onChange={handleInputChange}
                                              className="bg-transparent border-transparent focus:border-transparent outline-none font-semibold text-white focus:ring-0"
                                            />
                                          </div>

                                          <div className="flex gap-5 items-center pl-3 mt-64 w-full border-t border-gray-800 min-h-[54px] max-md:mt-10 max-md:max-w-full">
                                            <div className="flex gap-4 items-start self-stretch my-auto text-sm font-semibold leading-loose text-white whitespace-nowrap">
                                              <div className="flex gap-4 justify-center items-center px-5 py-2 rounded">
                                                <button
                                                  onClick={handleSendReply}
                                                  className="self-stretch my-auto bg-blue-600 px-7 py-1 rounded-lg"
                                                >
                                                  Send
                                                </button>
                                                <button
                                                  onClick={handleSendReply}
                                                  className="self-stretch flex items-center gap-1 my-auto bg-transparent px-7 py-1 rounded-lg"
                                                >
                                                  <Zap size={15} />
                                                  Variables
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Box>
                                    </Modal>

                                    {thread !== null && (
                                      <div className="flex mt-4 flex-row items-center justify-center gap-2.5 px-[35px] w-[20%] h-12 py-[13px] rounded-lg bg-gradient-to-r from-red-400 to-red-600">
                                        <button
                                          onClick={handleOpen2}
                                          className="all-[unset] flex gap-2 items-center justify-center box-border relative w-fit mt-[-1.00px] [font-family:'Open_Sans-SemiBold',Helvetica]  font-semibold text-white text-sm tracking-[0] leading-[21.7px] whitespace-nowrap rounded-md"
                                        >
                                          <Trash2 size={17} />
                                          Delete
                                        </button>
                                      </div>
                                    )}

                                    <Modal
                                      open={open2}
                                      onClose={handleClose2}
                                      aria-labelledby="modal-modal-title"
                                      aria-describedby="modal-modal-description"
                                    >
                                      <Box sx={style}>
                                        <div className="flex flex-col mx-auto w-auto rounded-lg bg-neutral-900">
                                          <div className="flex flex-wrap gap-2.5 items-center py-2.5 pr-2 pl-8  text-sm font-bold tracking-tight whitespace-nowrap rounded-lg border border-solid bg-zinc-800 border-zinc-700 min-h-[38px] text-zinc-400 max-md:pl-5 ">
                                            <div className="flex flex-col grow shrink items-start self-stretch my-auto ">
                                              <div className="gap-2">
                                                Are you sure?
                                              </div>
                                            </div>
                                            <X
                                              onClick={handleClose2}
                                              className="cursor-pointer"
                                            />
                                          </div>
                                          <div className="flex gap-4 items-center self-stretch my-auto text-sm font-semibold leading-loose text-white whitespace-nowrap">
                                            <div className="flex gap-4 justify-center items-center px-5 py-2 rounded">
                                              <button
                                                onClick={deleteThread}
                                                className="self-stretch my-auto bg-gradient-to-r from-red-400 to-red-600 px-7 py-1 rounded-lg"
                                              >
                                                Delete
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </Box>
                                    </Modal>

                                    {/* <div className="flex mt-48 flex-row items-center justify-center gap-2.5 px-[35px] w-[20%] h-12 py-[13px] rounded bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC]">
                                      <button className="all-[unset] flex gap-2 items-center justify-center box-border relative w-fit mt-[-1.00px] [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[21.7px] whitespace-nowrap rounded-md">
                                        <Reply className="mb-1 font-bold" />
                                        Reply
                                      </button>
                                    </div> */}
                                    <div className="flex z-10 flex-col items-start mt-0 ml-6 w-[571px] min-h-[534px]">
                                      <div className="flex flex-col w-full rounded-none"></div>
                                    </div>
                                  </div>
                                  <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/75de614ed64539c40442a055cc8abeb8523069f600107340b6f44ce53c2f911a?apiKey=668dba3ade934f8e90837c8a2a069136"
                                    className="object-contain w-px"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col -ml-4 w-[80%] max-md:ml-0 border-l border-gray-200 dark:border-gray-800 overflow-hidden ">
                          <div className="flex flex-col grow ml-2 items-center py-4 w-[90%]bg-white dark:bg-black">
                            <div className="flex flex-col justify-center  px-1 py-2 w-full text-sm font-semibold leading-none text-gray-800 dark:text-white bg-gray-200 dark:bg-zinc-800 max-w-[280px]">
                              <div className="flex gap-4 items-start w-full max-w-[220px] rounded">
                                <div className="flex gap-px justify-between items-center min-w-[250px] w-[250px] rounded">
                                  <div className="self-stretch my-auto w-[250px] mr-4 rounded">
                                    Lead Details
                                  </div>
                                  <div className="flex shrink-0 self-stretch my-auto w-2.5 h-1.5 bg-gray-900 dark:bg-white" />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col px-3 pt-2 pb-7 mt-4 w-full max-w-[264px] min-h-[217px]">
                              <div className="flex gap-10 justify-between items-center w-full">
                                <div className="self-stretch my-auto text-xs text-gray-800 dark:text-white">
                                  Name{" "}
                                </div>
                                <div className="self-stretch my-auto text-xs text-gray-800 dark:text-zinc-400">
                                  Orlando
                                </div>
                              </div>
                              <div className="flex gap-10 justify-between items-center mt-5 w-full">
                                <div className="self-stretch my-auto text-xs text-gray-800 dark:text-white">
                                  Contact No
                                </div>
                                <div className="self-stretch my-auto text-xs text-gray-800 dark:text-zinc-400">
                                  +54-9062827869
                                </div>
                              </div>
                              <div className="flex gap-10 justify-between items-center mt-5 w-full">
                                <div className="self-stretch my-auto text-xs text-gray-800 dark:text-white">
                                  Email ID
                                </div>
                                <div className="self-stretch my-auto text-xs text-gray-800 dark:text-zinc-400">
                                  orlando@gmail.com
                                </div>
                              </div>
                              <div className="flex gap-10 justify-between items-start mt-5 w-full whitespace-nowrap">
                                <div className="text-xs text-gray-800 dark:text-white">
                                  Linkedin
                                </div>
                                <div className="text-right text-xs text-gray-800 dark:text-zinc-400">
                                  linkedin.com/orlando/
                                </div>
                              </div>
                              <div className="flex gap-10 justify-between items-center mt-5 w-full">
                                <div className="self-stretch my-auto text-xs text-gray-800 dark:text-white">
                                  Company Name
                                </div>
                                <div className="self-stretch my-auto text-xs text-gray-800 dark:text-zinc-400">
                                  Reachinbox
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneboxPage;
