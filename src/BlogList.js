import { Link } from "react-router-dom";

export default function BlogList({ blogs, title, handelDeleteOnClick }) {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            {/* <button onClick={() => handelDeleteOnClick(blog.id)}>delete blog</button> */}
          </Link>
        </div>
      ))}
    </div>
  );
}
