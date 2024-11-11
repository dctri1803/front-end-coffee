import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlog } from '../../services/BlogServices';
import './style.css'; // Optional for additional styling

interface Blog {
  id: number;
  title: string;
  content: string;
  images: { url: string }[];
}

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getBlog(Number(id));
        setBlog(response);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to fetch blog');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const renderContentWithImages = () => {
    if (!blog) return null;

    const contentParts = blog.content.split('\n').map((line, index) => {
      // Check if the line should display an image
      if (blog.images[index]) {
        return (
          <div key={index} className="blog-content">
            <img
              src={blog.images[index].url}
              alt={`Blog Image ${index}`}
            />
            <p>{line}</p>
          </div>
        );
      }
      return <p key={index} className="blog-content">{line}</p>;
    });

    return contentParts;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="blog-container">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <a href="/" className="breadcrumb-item">Blog</a>
        <span className="breadcrumb-item active">{blog ? blog.title : 'Loading...'}</span>
      </div>

      {blog && (
        <>
          <h1 className="blog-title">{blog.title}</h1>
          {renderContentWithImages()}
        </>
      )}
    </div>
  );
};

export default BlogDetailPage;
