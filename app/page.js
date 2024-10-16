"use client";

import BlogList from "@/components/BlogList/page";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div>
      <ToastContainer theme="dark" />
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
}
