import "./page.css"
import blogData from "../DB/blogData";
import BlogCard from "../components/(blogCard)/BlogCard";

function Blog() {
  
  return (
    <div>
     <div className="blogsContainer">
          <h1 className="blogsPageHeading">Food Bloger</h1>
          <div className="blogsCardContainer">
            {blogData.map((item, index) => (
              <BlogCard item={item} key={index} />
            ))}
            </div>
        </div>
    </div>
  );
}

export default Blog;
