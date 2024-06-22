import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import { baseUrl } from "../baseUrl";
import Spinner from "../components/Spinner";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedblog, setRelatedblog] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedblog(data.relatedBlogs);
    } catch (err) {
      console.log(err);
      setBlog(null);
      setRelatedblog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
      <Header />'
      <div className="my-[90px]"> 
      <div>
        <button onClick={() => navigation(-1)} className="border-2 border-gray-300 py-1 px-4 rounded-md">Back</button>
      </div>
      <div>
      {loading ? (
                <Spinner />
            ): blog ? (
          <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7">
            <BlogDetails post={blog} />
            <h2 className="font-bold text-xl ">Releated Blogs</h2>
            {relatedblog.map((post) => (
              <div key={post.id}>
                <BlogDetails post={post} />
              </div>
            ))}
          </div>
        ) : (
          <p>No Blog Found</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default BlogPage;
