import React from 'react'
import { TbBrandGithub } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4
    text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/sadikthedev" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub/>
          </span>
        </a>
        <a href="https://linkedin.com/in/sadikthedev" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300">
            <TbBrandLinkedin/>
          </span>
        </a>
        <a href="https://leetcode.com/sadikthedev" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300">
            <SiLeetcode/>
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark">

      </div>
    </div>
  )
}

export default LeftSide