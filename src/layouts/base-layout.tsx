import React from "react";
import Head from "next/head";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-[#090B0B]">
      <Head>
        <title>Scissors</title>
      </Head>
      <section>{children}</section>
    </main>
  );
}
