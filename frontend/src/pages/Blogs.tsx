import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { Footer } from "../components/Footer";
import { Blog, useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
     <div>
      <Appbar/>
      <BlogSkeleton/>
      <BlogSkeleton/>
      <BlogSkeleton/>
      <BlogSkeleton/>
      <BlogSkeleton/>
      <BlogSkeleton/>
     </div> 
    );
  }
  const ShuffledBlogs=shuffleArray(blogs);
  return (
    <div>
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            {ShuffledBlogs.map((blog) => (
              <BlogCard
                id={blog.id}
                authorName={blog.author}
                title={blog.title}
                content={blog.content}
                publishedDate="12th December 2024"
              />
            ))}
          </div>
        </div> 
      </div>
      <div className="pl-12 my-12">
        <Footer/> 
        </div>
    </div>
  );
};

function shuffleArray(array:Blog[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
