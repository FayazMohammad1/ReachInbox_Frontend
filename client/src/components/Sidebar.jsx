import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import { Link } from "react-router-dom";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      className={`h-screen ${expanded ? "w-60" : "w-[70px]"}  transition-all ${
        expanded ? "mr-14" : "mr-2"
      }`}
    >
      <nav className="h-full fixed flex flex-col dark:bg-[#111111] border-r border-gray-700 z-10  shadow-sm">
        <div className="p-4 pb-2 mt-2 ml-auto mr-auto mb-10 flex justify-between items-center">
          <Link to="/home">
            <img
              src="https://app.reachinbox.ai/assets/logo.svg"
              alt=""
              className="w-10 ml-auto mr-auto"
            />
          </Link>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-4">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-4
        font-medium text-sm rounded-md cursor-pointer
        transition-colors group 
        ${
          active
            ? "bg-gradient-to-tr from-gray-800 to-gray-700 dark:text-white"
            : "hover:bg-gray-800 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-1 w-4 h-4 flex items-center justify-center rounded-full bg-[#3368CC] dark:bg-red-500 text-white text-xs font-semibold ${
            expanded ? "" : "top-1"
          }`}
        >
          2
        </div>
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-3 py-2 ml-6
          bg-blue-100 dark:bg-gray-950 border border-gray-700 dark:text-gray-100 text-[#3368CC] text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
