import React from "react";
import Logo from "../icons/logo";

export default function Header() {
  return (
    <ul className="mb-10 flex items-center justify-between py-10">
      <li>
        <Logo />
      </li>
      <li className="font-medium text-white  sm:text-lg">
        <button className="underline underline-offset-1">
          Sign in with google
        </button>
      </li>
    </ul>
  );
}
