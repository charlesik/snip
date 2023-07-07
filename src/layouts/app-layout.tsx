import React from "react";
import BaseLayout from "./base-layout";
import Header from "@/components/partials/header";
import Footer from "@/components/partials/footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <BaseLayout>
      <section className="m-auto bg-black border sm:max-w-md lg:max-w-5xl">
        <Header />
        {children}
        <Footer />
      </section>
    </BaseLayout>
  );
}
