import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pb-16 md:pb-0 p-4">
        <Outlet />
      </main>

      <BottomNav />
      <Footer />
    </div>
  );
}

export default Root;