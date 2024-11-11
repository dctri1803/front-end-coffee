import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/ProductServices';
import { getAllBlogs } from '../../services/BlogServices';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);
  const [loadingBlogs, setLoadingBlogs] = useState<boolean>(true);
  const [errorProducts, setErrorProducts] = useState<string | null>(null);
  const [errorBlogs, setErrorBlogs] = useState<string | null>(null);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data); // Adjusted to access 'data' field in the response
      } catch (error) {
        setErrorProducts(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setLoadingProducts(false);
      }
    };
    fetchProducts();
  }, []);

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getAllBlogs();
        setBlogs(response.data);
      } catch (error) {
        setErrorBlogs(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setLoadingBlogs(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loadingProducts || loadingBlogs) {
    return <div>Loading...</div>;
  }

  if (errorProducts) {
    return <div>Error loading products: {errorProducts}</div>;
  }

  if (errorBlogs) {
    return <div>Error loading blogs: {errorBlogs}</div>;
  }

  return (
    <div className="container mt-4">
      {/* Slider Section */}
      <div id="productCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Carousel slides can remain the same as before */}
          <div className="carousel-item active">
            <img
              src="https://file.hstatic.net/1000075078/file/desktop_5d950fb507e048ba9631b21e3eda88b2.jpg"
              className="d-block w-100"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://file.hstatic.net/1000075078/file/web_moi_-_desktop_2683cc176d1b43409b10140e46548999.jpg"
              className="d-block w-100"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://file.hstatic.net/1000075078/file/web_moi_-_desktop_423353ea679745bb84fa9afc3cd53984.jpg"
              className="d-block w-100"
              alt="Slide 3"
            />
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Product Cards Section */}
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card mb-3">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.productImages[0]?.image_url}
                  style={{ width: 306, height: 204 }}
                  className="card-img-top"
                  alt={product.name}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>Price: {product.price.toLocaleString()} VND</strong></p>
                <button className="btn btn-primary">Mua hàng</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Section */}
      <div className="mt-5">
        <h2 className="mb-4 text-center">Chuyện nhà</h2>
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-4 mb-3" key={blog.id}>
              <div className="card h-100">
                <img
                  src={blog.images[0]?.url} // Display the first image of the blog
                  className="card-img-top"
                  alt={blog.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.content.substring(0, 100)}...</p> {/* Display an excerpt */}
                  <a href={`/blog/${blog.id}`} className="btn btn-secondary">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
