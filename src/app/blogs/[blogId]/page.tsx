import BlogDetails from "@/components/ui/BlogDetails";
import { Blog } from "@/types";

interface BlogId {
  params: {
    blogId: string;
  };
}

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();

  return blogs.slice(0, 3).map((blog: Blog) => ({
    blogId: blog.id,
  }));
};

const BlogSinglepage = async ({ params }: BlogId) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();

  console.log(params);
  return (
    <div className="min-h-screen">
      <BlogDetails key={blog.id} blog={blog}></BlogDetails>
    </div>
  );
};

export default BlogSinglepage;
