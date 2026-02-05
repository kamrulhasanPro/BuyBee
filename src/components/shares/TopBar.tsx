import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";

const TopBar = () => {
  return (
    // top bar section
    <div className="bg-primary border-b border-sidebar-border py-4 px-[7%] text-white flex items-center justify-between ">
      {/* email */}
      <p>✉️ Email: support@buybee.com</p>

      {/* social icon */}
      <div className="flex items-center gap-3">
        <a href="#">
          <FacebookIcon />
        </a>
        <a href="#">
          <TwitterIcon />
        </a>
        <a href="#">
          <InstagramIcon />
        </a>
        <a href="#">
          <LinkedinIcon />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
