import type { ISVGIcon } from "@/icons/icon.interface";
import React from "react";

const TelegramIcon: React.FC<ISVGIcon> = ({ fill }) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path d="M9.63262 15.0832L9.2687 20.202C9.78938 20.202 10.0149 19.9784 10.2853 19.7098L12.7264 17.3768L17.7847 21.0811C18.7124 21.5982 19.366 21.3259 19.6163 20.2277L22.9365 4.66966L22.9374 4.66875C23.2317 3.29738 22.4415 2.76112 21.5377 3.09754L2.02135 10.5695C0.689406 11.0865 0.709573 11.829 1.79493 12.1654L6.78447 13.7174L18.3742 6.46546C18.9196 6.10428 19.4155 6.30412 19.0076 6.66529L9.63262 15.0832Z" fill={fill} />
  </svg>;
};

export default TelegramIcon;
