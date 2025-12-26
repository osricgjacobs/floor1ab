// src/components/Blog.jsx
import React, { useState, useEffect } from "react";
import { databases } from "../lib/appwrite";
import { Query } from "appwrite";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Replace these with your actual IDs from the Appwrite Console
  const DATABASE_ID = "YOUR_DATABASE_ID";
  const COLLECTION_ID = "YOUR_COLLECTION_ID";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_ID,
          [Query.orderDesc("$createdAt")] // Show newest posts first
        );
        setPosts(response.documents);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
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
    <div className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl w-full max-w-4xl border-t-8 border-red-700">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
          Monthly Blog 📰
        </h2>
        <p className="text-amber-700 font-bold uppercase tracking-widest">
          Floor 1AB Chronicles
        </p>
      </div>

      <div className="space-y-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <article
              key={post.$id}
              className="border-b border-gray-200 pb-8 last:border-0"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-red-800">
                  {post.title}
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {new Date(post.$createdAt).toLocaleDateString()}
                </span>
              </div>

              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-lg mb-4 shadow-md border border-amber-200"
                />
              )}

              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {post.content}
              </div>

              <div className="mt-4 flex items-center text-sm font-medium text-amber-600">
                <span className="mr-2">By:</span>
                <span className="text-gray-900">
                  {post.author || "WarPride Leadership"}
                </span>
              </div>
            </article>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500 italic">
              No chronicles have been written yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
