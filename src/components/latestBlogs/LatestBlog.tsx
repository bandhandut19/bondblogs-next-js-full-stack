import { Blog } from "@/types";
import BlogCard from "../ui/BlogCard";
import LatestBlogCard from "../ui/LatestBlogCard";

const LatestBlog = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-5">
        Latest blogs from <span className="text-accent"> BondBlogs</span>
      </h1>
      <div className="grid grid-cols-2 gap-5 my-5 w-[90%] mx-auto">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog}></LatestBlogCard>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-5 my-5 w-[90%] mx-auto">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
