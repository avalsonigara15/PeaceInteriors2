import React from "react";
import Link from "next/link";

import useDarkMode from "../../../hooks/useDarkMode";
import useSidebar from "../../../hooks/useSidebar";
import useSemiDark from "../../../hooks/useSemiDark";
import useSkin from "../../../hooks/useSkin";

const SidebarLogo = ({ menuHover }) => {
  const [isDark] = useDarkMode();
  const [collapsed, setMenuCollapsed] = useSidebar();
  // semi dark
  const [isSemiDark] = useSemiDark();
  // skin
  const [skin] = useSkin();
  return (
    <div
      className={` logo-segment flex justify-between items-center bg-white dark:bg-slate-800 z-[9] py-6  px-4 
      ${menuHover ? "logo-hovered" : ""}
      ${
        skin === "bordered"
          ? " border-b border-r-0 border-slate-200 dark:border-slate-700"
          : " border-none"
      }
      
      `}
    >
      <Link href="/projects">
        <div className="flex items-center space-x-4">
          <div className="logo-icon">
            {!isDark && !isSemiDark ? (
              <img src="/assets/images/logo/logo-dark-1.svg" alt="" />
            ) : (
              <img src="/assets/images/logo/logo-dark-1.svg" alt="" />
            )}
          </div>

          {(!collapsed || menuHover) && (
            <div>
              {/* <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Peace Interiors
              </h1> */}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default SidebarLogo;
