import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
import Home from "../pages/Home";

function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4">
        <Home />
      </main>
      <BottomNav />
      <Footer />
    </div>
  );
}

export default Root;