import React, { useState } from "react";
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
} from "lucide-react";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 mb-4">
        <Sidebar className="fixed mt-[90px] w-72">
          <SidebarItem icon={<House size={22} />} text="Home" />
          <SidebarItem icon={<UserPen size={22} />} text="Questions" />
          <SidebarItem icon={<Mail size={22} />} text="Emails" />
          <SidebarItem icon={<Send size={22} />} text="Campaigns" />
          <SidebarItem icon={<List size={22} />} text="Leads" />
          <Link to="/onebox">
            <SidebarItem icon={<Inbox size={22} />} text="OneBox" alert />
          </Link>

          <SidebarItem
            icon={<ChartNoAxesColumn size={22} />}
            text="Analytics"
            className="mb-auto"
          />
        </Sidebar>

        <div className="main flex-1 flex flex-col w-[85%] md:ml-0 bg-white dark:bg-black">
          <div className="main-container flex flex-col">
            <Navbar />
            <section className="flex flex-col justify-center items-center px-20 py-36 text-center bg-white dark:bg-black max-md:px-5 max-md:py-24 max-md:max-w-full">
              <div className="flex flex-col justify-center items-center -mb-8 max-w-full text-white dark:bg-black w-[832px] max-md:mb-2.5">
                <svg
                  width="301"
                  height="230"
                  viewBox="0 0 301 230"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_f_2777_10783)">
                    <ellipse
                      cx="148.06"
                      cy="186.812"
                      rx="110.607"
                      ry="21.3375"
                      fill="#1F88F8"
                      fill-opacity="0.35"
                    ></ellipse>
                  </g>
                  <path
                    d="M149.279 229.402C212.627 229.402 263.98 178.049 263.98 114.701C263.98 51.3534 212.627 0 149.279 0C85.9315 0 34.5781 51.3534 34.5781 114.701C34.5781 178.049 85.9315 229.402 149.279 229.402Z"
                    fill="url(#paint0_linear_2777_10783)"
                  ></path>
                  <g filter="url(#filter1_d_2777_10783)">
                    <path
                      d="M245.363 77.6245L147.072 146.219L48.7812 77.6245L138.759 14.8058C141.199 13.1051 144.102 12.1934 147.076 12.1934C150.05 12.1934 152.953 13.1051 155.393 14.8058L173.342 27.3533L178.041 30.6166L225.359 63.6575L230.343 67.1574L245.363 77.6245Z"
                      fill="url(#paint1_linear_2777_10783)"
                    ></path>
                  </g>
                  <path
                    d="M131.09 135.067L48.7812 193.595V77.625L131.09 135.067Z"
                    fill="url(#paint2_linear_2777_10783)"
                  ></path>
                  <path
                    d="M163.062 135.067L245.371 193.595V77.625L163.062 135.067Z"
                    fill="url(#paint3_linear_2777_10783)"
                  ></path>
                  <path
                    d="M48.7812 193.594L138.653 129.699C141.112 127.947 144.057 127.006 147.076 127.006C150.096 127.006 153.04 127.947 155.499 129.699L245.363 193.594H48.7812Z"
                    fill="url(#paint4_linear_2777_10783)"
                  ></path>
                  <g filter="url(#filter2_d_2777_10783)">
                    <path
                      d="M59.1662 56.6094C44.0976 63.6581 27.9051 67.9972 11.331 69.4276C13.5705 74.6335 29.4828 100.692 76.7188 122.164C77.9957 122.361 107.492 108.639 123.68 99.2288C123.13 100.015 73.3988 81.7154 59.1662 56.6094Z"
                      fill="url(#paint5_linear_2777_10783)"
                    ></path>
                  </g>
                  <path
                    d="M60.3318 69.5665C59.6384 69.0854 58.7601 68.9555 57.9571 69.2153L31.5931 77.7448C30.6487 78.0504 30.3122 79.2136 30.9477 79.9762C31.4594 80.5902 32.297 80.8248 33.0532 80.5658L60.0898 71.3053C60.8527 71.044 60.9944 70.0262 60.3318 69.5665Z"
                    fill="#C9DFFF"
                  ></path>
                  <path
                    d="M59.8708 80.0712C59.2021 79.4433 58.2423 79.2341 57.373 79.5266L39.1216 85.6691C38.3168 85.9399 38.0326 86.9329 38.5723 87.5885C39.0132 88.1241 39.7398 88.3306 40.3965 88.107L59.543 81.5879C60.1893 81.3678 60.3686 80.5385 59.8708 80.0712Z"
                    fill="#C9DFFF"
                  ></path>
                  <path
                    d="M69.6709 85.2721C68.9731 84.7133 68.0346 84.5587 67.1944 84.864L46.171 92.505C45.3459 92.8048 45.0976 93.8516 45.7001 94.4902C46.161 94.9787 46.8688 95.1455 47.4994 94.9141L69.4095 86.8738C70.0906 86.6239 70.2372 85.7256 69.6709 85.2721Z"
                    fill="#C9DFFF"
                  ></path>
                  <path
                    d="M77.0168 101.045C76.3705 100.33 75.352 100.086 74.452 100.429L62.4371 105.014C61.6993 105.296 61.4333 106.203 61.9024 106.839C62.3419 107.434 63.1255 107.662 63.8156 107.394L76.6937 102.407C77.2491 102.191 77.4164 101.486 77.0168 101.045Z"
                    fill="#C9DFFF"
                  ></path>
                  <g filter="url(#filter3_d_2777_10783)">
                    <path
                      d="M233.352 92.9512C251.623 101.498 271.257 106.76 291.354 108.494C288.639 114.806 269.344 146.404 212.068 172.44C210.52 172.678 174.753 156.04 155.125 144.63C155.792 145.583 216.094 123.394 233.352 92.9512Z"
                      fill="url(#paint6_linear_2777_10783)"
                    ></path>
                  </g>
                  <path
                    d="M231.939 108.662C232.78 108.078 233.845 107.921 234.819 108.236L266.787 118.578C267.932 118.949 268.34 120.359 267.569 121.284C266.949 122.029 265.933 122.313 265.016 121.999L232.233 110.77C231.308 110.453 231.136 109.219 231.939 108.662Z"
                    fill="#C9DFFF"
                  ></path>
                  <path
                    d="M222.99 117.176C223.801 116.415 224.964 116.161 226.019 116.516L248.149 123.964C249.125 124.292 249.47 125.496 248.815 126.291C248.281 126.941 247.4 127.191 246.604 126.92L223.387 119.015C222.604 118.748 222.386 117.743 222.99 117.176Z"
                    fill="#C9DFFF"
                  ></path>
                  <path
                    d="M213.788 124.243C214.634 123.566 215.772 123.378 216.79 123.748L242.282 133.013C243.283 133.377 243.584 134.646 242.854 135.421C242.295 136.013 241.436 136.215 240.672 135.935L214.105 126.185C213.279 125.882 213.101 124.793 213.788 124.243Z"
                    fill="#C9DFFF"
                  ></path>
                  <path
                    d="M193.089 138.382C193.873 137.515 195.108 137.219 196.199 137.636L210.768 143.195C211.663 143.536 211.985 144.637 211.417 145.407C210.884 146.129 209.933 146.405 209.097 146.081L193.481 140.033C192.808 139.772 192.605 138.917 193.089 138.382Z"
                    fill="#C9DFFF"
                  ></path>
                  <path
                    d="M202.603 130.832C203.465 130.291 204.529 130.179 205.485 130.529L239.053 142.802C240.126 143.194 240.386 144.593 239.526 145.345C238.957 145.842 238.162 145.988 237.453 145.727L202.825 132.971C201.892 132.627 201.76 131.361 202.603 130.832Z"
                    fill="#C9DFFF"
                  ></path>
                  <path
                    d="M84.2874 88.7201C83.5762 88.274 82.6987 88.1816 81.9102 88.4699L54.2266 98.592C53.3417 98.9155 53.1274 100.069 53.8369 100.689C54.3062 101.099 54.9619 101.22 55.5466 101.004L84.1039 90.4845C84.874 90.2008 84.9826 89.1562 84.2874 88.7201Z"
                    fill="#C9DFFF"
                  ></path>
                  <path
                    d="M244.301 26.9988C244.301 29.6443 242.156 31.7888 239.511 31.7888C236.865 31.7888 234.72 29.6443 234.72 26.9988C234.72 24.3533 236.865 22.2087 239.511 22.2087C242.156 22.2087 244.301 24.3533 244.301 26.9988Z"
                    stroke="url(#paint7_linear_2777_10783)"
                    stroke-width="2.61276"
                  ></path>
                  <circle
                    cx="69.6824"
                    cy="204.667"
                    r="4.79006"
                    stroke="url(#paint8_linear_2777_10783)"
                    stroke-width="2.61276"
                  ></circle>
                  <circle
                    cx="216.862"
                    cy="214.247"
                    r="4.79006"
                    stroke="url(#paint9_linear_2777_10783)"
                    stroke-width="2.61276"
                  ></circle>
                  <path
                    d="M85.9405 31.9327C86.4554 29.7998 89.4893 29.7998 90.0042 31.9327L91.7372 39.1116C91.9212 39.8738 92.5163 40.4689 93.2785 40.6529L100.457 42.3859C102.59 42.9007 102.59 45.9347 100.457 46.4495L93.2785 48.1825C92.5163 48.3665 91.9212 48.9616 91.7372 49.7238L90.0042 56.9027C89.4893 59.0356 86.4554 59.0356 85.9405 56.9027L84.2076 49.7238C84.0236 48.9616 83.4285 48.3665 82.6662 48.1825L75.4874 46.4495C73.3545 45.9347 73.3545 42.9007 75.4874 42.3859L82.6662 40.6529C83.4285 40.4689 84.0236 39.8738 84.2076 39.1116L85.9405 31.9327Z"
                    fill="url(#paint10_linear_2777_10783)"
                  ></path>
                  <path
                    d="M260.448 183.417C260.963 181.284 263.997 181.284 264.512 183.417L266.245 190.596C266.429 191.358 267.024 191.953 267.786 192.137L274.965 193.87C277.098 194.385 277.098 197.419 274.965 197.934L267.786 199.667C267.024 199.851 266.429 200.446 266.245 201.208L264.512 208.387C263.997 210.52 260.963 210.52 260.448 208.387L258.715 201.208C258.531 200.446 257.936 199.851 257.174 199.667L249.995 197.934C247.862 197.419 247.862 194.385 249.995 193.87L257.174 192.137C257.936 191.953 258.531 191.358 258.715 190.596L260.448 183.417Z"
                    fill="url(#paint11_linear_2777_10783)"
                  ></path>
                  <path
                    d="M37.8104 166.615C39.1344 166.403 40.1914 167.704 39.713 168.956L36.484 177.411C36.0056 178.664 34.3506 178.929 33.505 177.889L27.797 170.864C26.9514 169.824 27.5494 168.258 28.8734 168.046L37.8104 166.615Z"
                    fill="url(#paint12_linear_2777_10783)"
                  ></path>
                  <path
                    d="M263.908 80.4224C263.576 79.1231 264.776 77.9524 266.067 78.3152L274.78 80.7638C276.071 81.1265 276.485 82.7506 275.526 83.6872L269.048 90.0089C268.089 90.9454 266.475 90.492 266.144 89.1927L263.908 80.4224Z"
                    fill="url(#paint13_linear_2777_10783)"
                  ></path>
                  <defs>
                    <filter
                      id="filter0_f_2777_10783"
                      x="15.6801"
                      y="143.702"
                      width="264.757"
                      height="86.2218"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      ></feBlend>
                      <feGaussianBlur
                        stdDeviation="10.8865"
                        result="effect1_foregroundBlur_2777_10783"
                      ></feGaussianBlur>
                    </filter>
                    <filter
                      id="filter1_d_2777_10783"
                      x="45.2976"
                      y="12.1934"
                      width="203.545"
                      height="140.993"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset dy="3.48368"></feOffset>
                      <feGaussianBlur stdDeviation="1.74184"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2777_10783"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2777_10783"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <filter
                      id="filter2_d_2777_10783"
                      x="0.877088"
                      y="49.642"
                      width="133.254"
                      height="86.4587"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset dy="3.48368"></feOffset>
                      <feGaussianBlur stdDeviation="5.22552"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0196078 0 0 0 0 0.168627 0 0 0 0 0.396078 0 0 0 0.15 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2777_10783"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2777_10783"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <filter
                      id="filter3_d_2777_10783"
                      x="135.039"
                      y="91.2093"
                      width="165.838"
                      height="109.103"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset dx="-5.28021" dy="13.0638"></feOffset>
                      <feGaussianBlur stdDeviation="7.40282"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.021441 0 0 0 0 0.168056 0 0 0 0 0.395833 0 0 0 0.15 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2777_10783"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2777_10783"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <linearGradient
                      id="paint0_linear_2777_10783"
                      x1="148.395"
                      y1="-37.3495"
                      x2="150.745"
                      y2="365.463"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#21262D"></stop>
                      <stop offset="1" stop-color="#BCD8FF"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2777_10783"
                      x1="147.072"
                      y1="12.1934"
                      x2="147.072"
                      y2="146.219"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EDF4FF"></stop>
                      <stop offset="1" stop-color="#ABCCFF"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_2777_10783"
                      x1="89.9356"
                      y1="77.625"
                      x2="89.9356"
                      y2="193.595"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#ABCCFF"></stop>
                      <stop offset="1" stop-color="#70A8FF"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_2777_10783"
                      x1="204.217"
                      y1="77.625"
                      x2="204.217"
                      y2="193.595"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#ABCCFF"></stop>
                      <stop offset="1" stop-color="#70A8FF"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_2777_10783"
                      x1="147.072"
                      y1="127.006"
                      x2="147.072"
                      y2="193.594"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#70A8FF"></stop>
                      <stop offset="1" stop-color="#5597FD"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_2777_10783"
                      x1="23.5239"
                      y1="85.7852"
                      x2="97.1166"
                      y2="71.415"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#C6DDFF"></stop>
                      <stop offset="1" stop-color="white"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint6_linear_2777_10783"
                      x1="276.57"
                      y1="128.329"
                      x2="187.334"
                      y2="110.904"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#C6DDFF"></stop>
                      <stop offset="1" stop-color="white"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint7_linear_2777_10783"
                      x1="232.017"
                      y1="23.1885"
                      x2="251.068"
                      y2="39.6997"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#94BFFF"></stop>
                      <stop offset="1" stop-color="#4C94FE"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint8_linear_2777_10783"
                      x1="62.1888"
                      y1="200.856"
                      x2="81.2402"
                      y2="217.368"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#94BFFF"></stop>
                      <stop offset="1" stop-color="#4C94FE"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint9_linear_2777_10783"
                      x1="209.369"
                      y1="210.437"
                      x2="228.42"
                      y2="226.948"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#94BFFF"></stop>
                      <stop offset="1" stop-color="#4C94FE"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint10_linear_2777_10783"
                      x1="87.9724"
                      y1="23.5156"
                      x2="87.9724"
                      y2="65.3198"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#70A8FF"></stop>
                      <stop offset="1" stop-color="#5597FD"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint11_linear_2777_10783"
                      x1="262.48"
                      y1="175"
                      x2="262.48"
                      y2="216.804"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#70A8FF"></stop>
                      <stop offset="1" stop-color="#5597FD"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint12_linear_2777_10783"
                      x1="40.7893"
                      y1="166.138"
                      x2="27.2715"
                      y2="177.123"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#70A8FF"></stop>
                      <stop offset="1" stop-color="#5597FD"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint13_linear_2777_10783"
                      x1="263.162"
                      y1="77.499"
                      x2="275.328"
                      y2="89.9644"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#70A8FF"></stop>
                      <stop offset="1" stop-color="#5597FD"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex flex-col justify-center items-center mt-12 max-md:mt-10 max-md:max-w-full">
                  <h2 className="text-2xl font-bold leading-loose text-gray-900 dark:text-white max-md:max-w-full">
                    It's the beginning of a legendary sales pipeline
                  </h2>
                  <p className="mt-6 text-lg font-medium leading-7 text-neutral-400 w-[289px]">
                    When you have inbound E-mails you'll see them here
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
