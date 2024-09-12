"use client";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/types";

const AllBlogPage = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store",
  // });
  // const blogs = await res.json();

  const { data: blogs, isLoading } = useGetBlogsQuery("");
  // console.log(blogs);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-5">
        All blogs from <span className="text-accent"> BondBlogs</span>
      </h1>
      <div className="grid grid-cols-3 gap-5 my-5 w-[90%] mx-auto">
        {blogs?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlogPage;
