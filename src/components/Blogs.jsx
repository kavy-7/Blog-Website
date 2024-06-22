import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";
import Spinner from "./Spinner";
export default function Blogs() {
  const { posts, loading } = useContext(AppContext);
    console.log(posts);
    return (
        <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7">
            {loading ? (
                <Spinner />
            ) : posts.length === 0 ? (
                <div className="">
                    <p className="">No Post Found</p>
                </div>
            ) : (
              posts.map((post) => (
                <BlogDetails key={post.id} post={post} />
              ))
            )}
        </div>
    );
}
