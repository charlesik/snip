import { toast } from "react-hot-toast";
import React from "react";
import Copy from "./icons/copy";
import Share from "./icons/share";

interface LinkDisplayProps {
  longLink?: string;
  shortenedLink: string;
}

export default function LinkDisplay({
  longLink,
  shortenedLink,
}: LinkDisplayProps) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shortenedLink);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="mx-auto mt-10 flex items-center justify-center  rounded border-4 border-accent bg-secondary p-4 text-white lg:w-1/4">
      {/* <div>
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${longLink}`}
          alt=""
        />
      </div> */}

      <div className="mx-auto space-y-3 text-left">
        <h4 className="text-sm">Your shortened link</h4>
        {/* <p className="text-2xl font-medium">{shortenedLink}</p> */}
        <div className="flex gap-x-5">
          <p className="text-2xl font-medium">{shortenedLink}</p>
          <button onClick={handleCopyLink}>
            <Copy />
          </button>
        </div>
      </div>
    </div>
  );
}
