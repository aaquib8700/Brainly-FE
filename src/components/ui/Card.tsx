
import React from "react";
import { Shareicon } from "../../icons/Shareicon";
import YoutubeIcon from "../../icons/YoutubeIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import { DeletIcon } from "../../icons/DeleteIcon";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useContent } from "../../hooks/useContent";

interface CardProps {
  _id: string;
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

const Card = ({ title, link, type, _id }: CardProps) => {
  const { refresh } = useContent();

  async function deleteContent() {
    await axios.delete(BACKEND_URL + "/api/v1/content", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      data: {
        contentId: _id,
      },
    });
    refresh();
  }

  return (
    <div className="rounded-2xl h-fit bg-white/5 border border-white/10 p-4 shadow-sm hover:shadow-md transition p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2 font-medium">
          {type === "youtube" ? <YoutubeIcon /> : <TwitterIcon />}
          <span className="text-md truncate">{title}</span>
        </div>

        <div className="flex gap-2 text-gray-400">
          <a href={link} target="_blank">
            <Shareicon size="sm" />
          </a>
          <button
            onClick={deleteContent}
            className="hover:text-red-500 transition"
          >
            <DeletIcon size="sm" />
          </button>
        </div>
      </div>
      <div className="rounded-md overflow-hidden border border-gray-100">
        {type === "youtube" && (
          <iframe
            className="w-full h-40"
            src={link.replace("watch?v=", "embed/").split("&")[0]}
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          />
        )}

        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
};

export default Card;


