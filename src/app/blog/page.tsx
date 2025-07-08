import { BlogCard } from "@/components/card/BlogCard";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <h3 className="text-xl font-bold mb-4 capitalize mt-5">all blogs</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />

      </div>
      <Footer />
    </div>
  );
};

export default page;
