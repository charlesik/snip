import React from "react";

export default function Footer() {
  const currentYear = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
  }).format(new Date());
  return (
    <footer>
      <p className="py-6 text-center text-sm text-slate-100 lg:py-3">
        Copyright © Scissors {currentYear}. All rights reserved.
      </p>
    </footer>
  );
}
