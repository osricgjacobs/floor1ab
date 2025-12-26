import React, { useState, useEffect } from "react";
import { databases, DATABASE_ID } from "../lib/appwrite";
import { Query } from "appwrite";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Use the exact Collection ID for your new blogs table
  const BLOG_COLLECTION_ID = "blogs";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          BLOG_COLLECTION_ID,
          [Query.orderDesc("$createdAt")] // ✅ Uses the index you created
        );
        setPosts(response.documents);
      } catch (error) {
        console.error("Error fetching floor chronicles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl w-full max-w-4xl border-t-8 border-red-700 font-sans">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black text-gray-900 mb-2 uppercase tracking-tighter">
          Floor 1AB <span className="text-red-700">Chronicles</span>
        </h2>
        <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-12">
        {posts.length > 0 ? (
          posts.map((post) => (
            <article key={post.$id} className="group">
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-700 transition">
                  {post.title}
                </h3>
                <span className="text-xs font-mono text-gray-400 uppercase">
                  {new Date(post.$createdAt).toLocaleDateString()}
                </span>
              </div>

              {post.imgURL && (
                <div className="overflow-hidden rounded-lg mb-6 shadow-lg border-2 border-gray-100">
                  <img
                    src={post.imgURL}
                    alt={post.title}
                    className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-500"
                    onError={(e) => (e.target.style.display = "none")} // Hides if image fails
                  />
                </div>
              )}

              <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap mb-6">
                {post.content}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="h-8 w-8 bg-red-800 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  {post.author?.charAt(0) || "T"}
                </div>
                <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">
                  Written by {post.author || "Thundercat Leader"}
                </span>
              </div>
            </article>
          ))
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
            <p className="text-gray-500 font-medium">
              No chronicles have been recorded yet. The den is quiet...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
