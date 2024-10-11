import React, { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        throw (error)
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
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

      {/* Cards Section */}
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card mb-3">
              {/* Display the first image in productImages array */}
              <img
                src={product.productImages[0].image_url} // Use the first image URL
                style={{width:306, height:204}}
                className="card-img-top"
                alt={product.name} // Use the product name for alt text
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  {product.description} {/* Display product description */}
                </p>
                <p className="card-text"><strong>Price: {product.price.toLocaleString()} VND</strong></p>
                <button className="btn btn-primary">Mua hàng</button> {/* Adjust button functionality as needed */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
