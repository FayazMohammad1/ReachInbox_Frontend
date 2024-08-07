import React, { useState, useEffect } from "react";
import Sidebar, { SidebarItem } from "../components/Sidebar.jsx";
import { Link } from "react-router-dom";
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
} from "lucide-react";
import Navbar from "../components/Navbar.jsx";

const InboxPage = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div className="flex flex-col h-screen">
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

        <div className="main body flex-1 flex flex-col w-[85%] md:ml-0 bg-black overflow-hidden">
          {" "}
          <div className="main-container flex flex-col overflow-hidden">
            {" "}
            <Navbar />
            <section className="flex flex-col justify-center items-center overflow-hidden  ml-2 py-3 text-center bg-black w-[97%]">
              <div className="flex flex-col justify-center items-center -mb-8 bg-black overflow-hidden">
                <div className="flex overflow-hidden flex-wrap gap-px bg-black ">
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit overflow-hidden">
                    <div className="ml-3.5 w-full border-r border-gray-400 overflow-hidden">
                      <div className="flex gap-2 max-md:flex-col overflow-hidden">
                        <div className="flex flex-col w-[25%] -mt-1 ml-5 mr-8">
                          <div className="flex flex-col ml-auto mr-auto overflow-hidden w-[100%] bg-black border-r border-gray-800">
                            <div className="flex relative gap-2 items-start pt-2 max-w-full w-[171px]">
                              <div className="flex z-0 flex-col self-end w-[171px] overflow-hidden">
                                <div className="flex z-10 gap-0 justify-center items-center p-2.5 overflow-hidden text-blue-500">
                                  <div className="self-stretch my-auto text-lg font-bold overflow-hidden">
                                    All Inbox(s)
                                  </div>
                                  <ChevronDown />
                                  <div className="overflow-hidden self-stretch p-1 my-auto w-6 text-sm whitespace-nowrap font-[510]"></div>
                                </div>
                                <div className="gap-2.5 self-stretch px-2.5 py-0.5 text-sm text-zinc-500 overflow-hidden">
                                  <span className="font-bold text-white">
                                    25/25{" "}
                                  </span>
                                  Inboxes selected
                                </div>
                              </div>
                              <div className="flex absolute top-4 z-0 gap-2 justify-center items-center self-start px-2 overflow-hidden w-8 h-8 rounded bg-zinc-800 right-[-95px]">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca1c2cb739488677bd049da90e3a6885689d467124886a09b13ac15342f4f609?apiKey=668dba3ade934f8e90837c8a2a069136&&apiKey=668dba3ade934f8e90837c8a2a069136"
                                  className="object-contain self-stretch my-auto w-4 aspect-square"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col mt-2 max-w-full bg-black w-[275px] overflow-hidden">
                              <div className="flex flex-col justify-center p-2 w-full whitespace-nowrap text-white text-opacity-20">
                                <div className="flex relative gap-1 items-center px-1.5 py-1 w-full rounded bg-zinc-800 min-h-[28px]">
                                  <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40e4de9544c22eb3e2802b647a0220ac62563256b063cc49b0bd4a54b631c84?apiKey=668dba3ade934f8e90837c8a2a069136&&apiKey=668dba3ade934f8e90837c8a2a069136"
                                    className="object-contain z-0 shrink-0 self-stretch my-auto w-4 aspect-square"
                                  />
                                  <div className="z-0 self-stretch my-auto text-sm leading-none">
                                    Search
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col justify-center px-2 py-1 w-full text-sm font-semibold leading-none">
                                <div className="flex gap-10 justify-between items-center w-full max-w-[256px]">
                                  <div className="flex gap-4 items-center self-stretch my-auto">
                                    <div className="flex gap-1 items-center self-stretch my-auto">
                                      <div className="flex gap-4 items-center self-stretch my-auto text-indigo-500 whitespace-nowrap">
                                        <div className="flex gap-2 items-center self-stretch px-2 py-1 my-auto rounded-2xl bg-neutral-800">
                                          <div className="gap-1 self-stretch my-auto">
                                            26
                                          </div>
                                        </div>
                                      </div>
                                      <div className="self-stretch my-auto text-neutral-200 w-[91px]">
                                        New Replies
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex gap-4 items-center self-stretch my-auto whitespace-nowrap text-neutral-200">
                                    <div className="self-stretch my-auto w-[53px]">
                                      Newest
                                    </div>
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/17c98527f74de35adea6c382e7a315f37c527fb7671d9cf8e552f090d4880a03?apiKey=668dba3ade934f8e90837c8a2a069136&&apiKey=668dba3ade934f8e90837c8a2a069136"
                                      className="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-[1.67]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col px-2.5 mt-2 w-full max-w-[278px] min-h-[969px]">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e7d92c1fabb7ea73cf808ccc862a043665ac494581a7849dd96faa84f86a507?apiKey=668dba3ade934f8e90837c8a2a069136&&apiKey=668dba3ade934f8e90837c8a2a069136"
                                className="object-contain w-full aspect-[125]"
                              />

                              <div className="flex gap-2 items-start py-3 pl-2 w-full max-w-[255px]">
                                <div className="flex gap-2 items-start py-1 pl-1 rounded-lg min-w-[240px] w-[247px]">
                                  <div className="flex flex-col min-w-[240px] w-[243px]">
                                    <div className="flex flex-col w-full max-w-[243px]">
                                      <div className="flex relative gap-0.5 items-start w-full">
                                        <div className="z-0 text-sm font-medium -ml-10 leading-none text-white w-[200px]">
                                          Beata@gmail.com
                                        </div>
                                        <div className="z-0 text-xs text-zinc-50 text-opacity-40 ml-auto">
                                          Mar 7
                                        </div>
                                        <div className="flex absolute z-0 shrink-0 w-2 h-2 bg-indigo-500 bottom-[5px] left-[-15px] rounded-[50px]" />
                                        <div className="flex absolute z-0 shrink-0 w-2 h-2 bg-indigo-500 bottom-[-195px] left-[-15px] rounded-[50px]" />
                                      </div>
                                      <div className="text-xs whitespace-nowrap -ml-[136px] text-ellipsis text-neutral-200">
                                        I've tried a lot and .
                                      </div>
                                    </div>
                                    <div className="flex gap-2 items-start self-start mt-2 text-xs font-semibold">
                                      <div className="flex gap-2 items-center px-2 py-1 text-emerald-300 whitespace-nowrap rounded-2xl bg-neutral-800">
                                        <div className="flex gap-1 items-center self-stretch my-auto">
                                          <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b8fb3547844d14dfc042ecbac42a4ad937cd85c419a4ffbee7d1fbf4197631c?apiKey=668dba3ade934f8e90837c8a2a069136&&apiKey=668dba3ade934f8e90837c8a2a069136"
                                            className="object-contain shrink-0 self-stretch my-auto w-3 rounded-none aspect-square"
                                          />
                                          <div className="self-stretch my-auto">
                                            Interested
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex gap-2 items-center px-2 py-1 text-white rounded-2xl bg-neutral-800">
                                        <div className="flex gap-1 items-center self-stretch my-auto">
                                          <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf0d3d5fc4fd7c8d545800d0e0556cacc4a72143367c76e8039a1e52b3db1cc9?apiKey=668dba3ade934f8e90837c8a2a069136&&apiKey=668dba3ade934f8e90837c8a2a069136"
                                            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                                          />
                                          <div className="self-stretch my-auto">
                                            Campaign Name
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e7d92c1fabb7ea73cf808ccc862a043665ac494581a7849dd96faa84f86a507?apiKey=668dba3ade934f8e90837c8a2a069136&&apiKey=668dba3ade934f8e90837c8a2a069136"
                                className="object-contain w-full aspect-[125]"
                              />
                              <div className="flex gap-2 items-start py-3 pl-2 w-full max-w-[255px]">
                                <div className="flex gap-2 items-start py-1 pl-1 rounded-lg min-w-[240px] w-[247px]">
                                  <div className="flex flex-col min-w-[240px] w-[243px]">
                                    <div className="flex flex-col w-full max-w-[243px]">
                                      <div className="flex relative gap-0.5 items-start w-full">
                                        <div className="z-0 text-sm font-medium -ml-10 leading-none text-white w-[200px]">
                                          Sanya@gmail.com
                                        </div>
                                        <div className="z-0 text-xs text-zinc-50 text-opacity-40 ml-auto">
                                          Mar 7
                                        </div>
                                      </div>
                                      <div className="text-xs whitespace-nowrap -ml-[136px] text-ellipsis text-neutral-200">
                                        I've tried a lot and .
                                      </div>
                                    </div>
                                    <div className="flex gap-2 items-start self-start mt-2 text-xs font-semibold">
                                      <div className="flex gap-2 items-center px-2 py-1 text-[#626FE6] whitespace-nowrap rounded-2xl bg-neutral-800">
                                        <div className="flex gap-1 items-center self-stretch my-auto">
                                          <div className="self-stretch my-auto">
                                            Closed
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex gap-2 items-center px-2 py-1 text-white rounded-2xl bg-neutral-800">
                                        <div className="flex gap-1 items-center self-stretch my-auto">
                                          <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf0d3d5fc4fd7c8d545800d0e0556cacc4a72143367c76e8039a1e52b3db1cc9?apiKey=668dba3ade934f8e90837c8a2a069136&&apiKey=668dba3ade934f8e90837c8a2a069136"
                                            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                                          />
                                          <div className="self-stretch my-auto">
                                            Campaign Name
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e7d92c1fabb7ea73cf808ccc862a043665ac494581a7849dd96faa84f86a507?apiKey=668dba3ade934f8e90837c8a2a069136&&apiKey=668dba3ade934f8e90837c8a2a069136"
                                className="object-contain w-full aspect-[125]"
                              />
                              <div className="flex gap-2 items-start py-3 pl-2 w-full max-w-[255px]">
                                <div className="flex gap-2 items-start py-1 pl-1 rounded-lg min-w-[240px] w-[247px]">
                                  <div className="flex flex-col min-w-[240px] w-[243px]">
                                    <div className="flex flex-col w-full max-w-[243px]">
                                      <div className="flex relative gap-0.5 items-start w-full">
                                        <div className="z-0 text-sm font-medium -ml-9 leading-none text-white w-[200px]">
                                          william@gmail.com
                                        </div>
                                        <div className="z-0 text-xs text-zinc-50 text-opacity-40 ml-auto">
                                          Mar 7
                                        </div>
                                      </div>
                                      <div className="text-xs whitespace-nowrap -ml-[90px] text-ellipsis text-neutral-200">
                                        Payment not going through
                                      </div>
                                    </div>
                                    <div className="flex gap-2 items-start self-start mt-2 text-xs font-semibold">
                                      <div className="flex gap-2 items-center px-2 py-1 text-emerald-300 whitespace-nowrap rounded-2xl bg-neutral-800">
                                        <div className="flex gap-1 items-center self-stretch my-auto">
                                          <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b8fb3547844d14dfc042ecbac42a4ad937cd85c419a4ffbee7d1fbf4197631c?apiKey=668dba3ade934f8e90837c8a2a069136&&apiKey=668dba3ade934f8e90837c8a2a069136"
                                            className="object-contain shrink-0 self-stretch my-auto w-3 rounded-none aspect-square"
                                          />
                                          <div className="self-stretch my-auto">
                                            Interested
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex gap-2 items-center px-2 py-1 text-white rounded-2xl bg-neutral-800">
                                        <div className="flex gap-1 items-center self-stretch my-auto">
                                          <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf0d3d5fc4fd7c8d545800d0e0556cacc4a72143367c76e8039a1e52b3db1cc9?apiKey=668dba3ade934f8e90837c8a2a069136&&apiKey=668dba3ade934f8e90837c8a2a069136"
                                            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                                          />
                                          <div className="self-stretch my-auto">
                                            Campaign Name
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e7d92c1fabb7ea73cf808ccc862a043665ac494581a7849dd96faa84f86a507?apiKey=668dba3ade934f8e90837c8a2a069136&&apiKey=668dba3ade934f8e90837c8a2a069136"
                                className="object-contain w-full aspect-[125]"
                              />
                              <div className="flex gap-2 items-start py-3 pl-2 w-full max-w-[255px]">
                                <div className="flex gap-2 items-start py-1 pl-1 rounded-lg min-w-[240px] w-[247px]">
                                  <div className="flex flex-col min-w-[240px] w-[243px]">
                                    <div className="flex flex-col w-full max-w-[243px]">
                                      <div className="flex relative gap-0.5 items-start w-full">
                                        <div className="z-0 text-sm font-medium -ml-8 leading-none text-white w-[200px]">
                                          johnson@gmail.com
                                        </div>
                                        <div className="z-0 text-xs text-zinc-50 text-opacity-40 ml-auto">
                                          Mar 7
                                        </div>
                                      </div>
                                      <div className="text-xs whitespace-nowrap -ml-[136px] text-ellipsis text-neutral-200">
                                        I've tried a lot and .
                                      </div>
                                    </div>
                                    <div className="flex gap-2 items-start self-start mt-2 text-xs font-semibold">
                                      <div className="flex gap-2 items-center px-2 py-1 text-[#626FE6] whitespace-nowrap rounded-2xl bg-neutral-800">
                                        <div className="flex gap-1 items-center self-stretch my-auto">
                                          <div className="self-stretch my-auto">
                                            Meeting Booked
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex gap-2 items-center px-2 py-1 text-white rounded-2xl bg-neutral-800">
                                        <div className="flex gap-1 items-center self-stretch my-auto">
                                          <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf0d3d5fc4fd7c8d545800d0e0556cacc4a72143367c76e8039a1e52b3db1cc9?apiKey=668dba3ade934f8e90837c8a2a069136&&apiKey=668dba3ade934f8e90837c8a2a069136"
                                            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                                          />
                                          <div className="self-stretch my-auto">
                                            Campaign Name
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e7d92c1fabb7ea73cf808ccc862a043665ac494581a7849dd96faa84f86a507?apiKey=668dba3ade934f8e90837c8a2a069136&&apiKey=668dba3ade934f8e90837c8a2a069136"
                                className="object-contain w-full aspect-[125]"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col ml-10 w-[90%] max-md:mt-3">
                          <div className="w-full">
                            <div className="flex gap-5 max-md:flex-col">
                              <div className="flex flex-col w-[90%] max-md:w-full">
                                <div className="flex flex-wrap grow w-full">
                                  <div className="flex z-10 flex-col self-end w-full">
                                    <div className="flex  gap-2 items-center border-b border-gray-800 pr-2 pl-4 w-full min-h-[70px]">
                                      <div className="flex gap-2 items-center self-stretch p-1 my-auto whitespace-nowrap rounded-lg w-full min-w-[240px]">
                                        <div className="flex flex-col flex-1">
                                          <div className="text-sm font-semibold text-white">
                                            Beata
                                          </div>
                                          <div className="text-xs text-white text-opacity-40">
                                            beata@gmail.com
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex gap-3.5 items-start self-stretch my-auto min-w-[240px]">
                                        <div className="flex gap-1 items-start min-w-[240px]">
                                          <div className="flex gap-1 w-56 items-center px-2 py-1.5 rounded bg-stone-900">
                                            <div className="flex gap-2 items-center">
                                              <div className="flex flex-col w-3 rounded-none">
                                                <div className="flex justify-center items-center w-full h-5 rounded-full bg-stone-700">
                                                  <div className="w-full h-3 bg-amber-300 rounded-[50px]" />
                                                </div>
                                              </div>
                                              <div className="text-xs font-semibold text-gray-300 w-[114px]">
                                                Meeting Completed
                                              </div>
                                            </div>
                                            <img
                                              loading="lazy"
                                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/514b04671f64daf4090b746def1462fd7d2be28c6226a898d78793c3df18690f?apiKey=668dba3ade934f8e90837c8a2a069136"
                                              className="object-contain w-4"
                                            />
                                          </div>
                                          <div className="flex gap-1 items-center w-20 px-2 py-2 text-xs font-semibold text-gray-300 whitespace-nowrap rounded bg-stone-900">
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

                                    <div className="flex ml-auto mr-auto justify-center items-center p-1 mt-1.5 text-xs font-semibold text-white whitespace-nowrap bg-zinc-900 w-[51px]">
                                      <div className="bg-zinc-900 ">Today</div>
                                    </div>

                                    <div className="flex flex-col text-sm max-w-[800px] mt-2">
                                      <div className="flex flex-col w-full rounded-none max-md:max-w-full">
                                        <div className="flex flex-col py-1 w-full rounded border border-solid shadow-sm bg-neutral-900 border-neutral-700 max-md:max-w-full">
                                          <div className="flex gap-2.5 items-center px-4 py-3 rounded bg-neutral-900">
                                            <div className="flex flex-wrap gap-5 justify-between self-stretch my-auto min-w-[240px] w-[721px]">
                                              <div className="flex flex-col items-start text-zinc-400">
                                                <div className="gap-2 font-semibold text-slate-50">
                                                  New Product Launch
                                                </div>
                                                <div className="self-stretch mt-2.5">
                                                  from : jeanne@icloud.com cc :
                                                  lennon.j@mail.com
                                                </div>
                                                <div className="mt-3">
                                                  to : lennon.j@mail.com
                                                </div>
                                              </div>
                                              <div className="self-start text-zinc-500">
                                                20 june 2022 : 9:16AM
                                              </div>
                                            </div>
                                          </div>
                                          <div className="flex gap-2.5 items-center px-4 py-3 rounded bg-neutral-900">
                                            <div className="flex flex-wrap gap-5 justify-between self-stretch my-auto min-w-[240px] w-[721px]">
                                              <div className="flex flex-col items-start text-zinc-400">
                                                <div className="gap-2 font-semibold text-slate-50">
                                                  Hi FirstName,
                                                </div>
                                                <div className=" flex items-start left-0 mt-2.5">
                                                  I would like to introduce you
                                                  to SaaSgrow, a productized
                                                  design service specifically
                                                  tailored for saas startups.
                                                  Our aim is to help you enhance
                                                  the user experience and boost
                                                  the visual appeal of your
                                                  software products.
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex gap-1 ml-auto mr-auto justify-center items-center p-1 mt-4 bg-zinc-900 w-[146px]">
                                      <div className="flex gap-2.5  items-start px-1 py-0.5">
                                        <img
                                          loading="lazy"
                                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b347ed11952cbaa671f0684d81de1e33747b663f4ff37d871bab7f7e8033180?apiKey=668dba3ade934f8e90837c8a2a069136"
                                          className="object-contain w-[9px]"
                                        />
                                      </div>
                                      <div className="text-xs font-semibold text-white bg-zinc-900">
                                        View all{" "}
                                        <span className="text-indigo-500">
                                          4
                                        </span>{" "}
                                        replies
                                      </div>
                                    </div>
                                    <div className="flex mt-48 flex-row items-center justify-center gap-2.5 px-[35px] w-[20%] h-12 py-[13px] rounded bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC]">
                                      <button className="all-[unset] flex gap-2 items-center justify-center box-border relative w-fit mt-[-1.00px] [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[21.7px] whitespace-nowrap rounded-md">
                                        <Reply className="mb-1 font-bold" />
                                        Reply
                                      </button>
                                    </div>
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

                        <div className="flex flex-col -ml-4 w-[80%] max-md:ml-0 border-l border-gray-800 overflow-hidden ">
                          <div className="flex flex-col grow ml-2 items-center py-4 w-[90%] bg-black">
                            <div className="flex flex-col justify-center  px-3 py-2 w-full text-sm font-semibold leading-none text-white bg-zinc-800 max-w-[280px]">
                              <div className="flex gap-4 items-start w-full max-w-[220px] rounded">
                                <div className="flex gap-px justify-between items-center min-w-[250px] w-[250px] rounded">
                                  <div className="self-stretch my-auto w-[250px] mr-4 rounded">
                                    Lead Details
                                  </div>
                                  <div className="flex shrink-0 self-stretch my-auto w-2.5 h-1.5 bg-white" />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col px-3 pt-2 pb-7 mt-4 w-full max-w-[264px] min-h-[217px]">
                              <div className="flex gap-10 justify-between items-center w-full">
                                <div className="self-stretch my-auto text-xs text-white">
                                  Name{" "}
                                </div>
                                <div className="self-stretch my-auto text-sm text-zinc-400">
                                  Orlando
                                </div>
                              </div>
                              <div className="flex gap-10 justify-between items-center mt-5 w-full">
                                <div className="self-stretch my-auto text-xs text-white">
                                  Contact No
                                </div>
                                <div className="self-stretch my-auto text-sm text-zinc-400">
                                  +54-9062827869
                                </div>
                              </div>
                              <div className="flex gap-10 justify-between items-center mt-5 w-full">
                                <div className="self-stretch my-auto text-xs text-white">
                                  Email ID
                                </div>
                                <div className="self-stretch my-auto text-sm text-zinc-400">
                                  orlando@gmail.com
                                </div>
                              </div>
                              <div className="flex gap-10 justify-between items-start mt-5 w-full whitespace-nowrap">
                                <div className="text-xs text-white">
                                  Linkedin
                                </div>
                                <div className="text-sm text-right text-zinc-400 w-[142px]">
                                  linkedin.com/orlando/
                                </div>
                              </div>
                              <div className="flex gap-10 justify-between items-center mt-5 w-full">
                                <div className="self-stretch my-auto text-xs text-white">
                                  Company Name
                                </div>
                                <div className="self-stretch my-auto text-sm text-zinc-400">
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

export default InboxPage;
