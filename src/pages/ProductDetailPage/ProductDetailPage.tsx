import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'; // Optional for additional styling
import { getProduct } from '../../services/ProductServices';
import { getAllSizes } from '../../services/SizeServices';
import { getAllToppings } from '../../services/ToppingService';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  quantity_sold: number;
  productImages: { id: number; image_url: string }[];
}

interface Size {
  id: number;
  size: string;
  price_adjustment: string;
}

interface Topping {
  id: number;
  name: string;
  price: number;
}

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [sizes, setSizes] = useState<Size[]>([]);
  const [toppings, setToppings] = useState<Topping[]>([]);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedToppings, setSelectedToppings] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productData, sizesData, toppingsData] = await Promise.all([
          getProduct(Number(productId)),
          getAllSizes(),
          getAllToppings()
        ]);
        setProduct(productData);
        setSizes(sizesData);
        setToppings(toppingsData);
        setLoading(false);
      } catch (err: any) {
        setError('Không thể tải dữ liệu. Vui lòng thử lại sau.');
        setLoading(false);
      }
    };

    if (productId) {
      fetchData();
    }
  }, [productId]);

  const handleSizeSelect = (sizeId: number) => {
    setSelectedSize(sizeId);
  };

  const handleToppingToggle = (toppingId: number) => {
    setSelectedToppings(prev => {
      const updatedToppings = new Set(prev);
      if (updatedToppings.has(toppingId)) {
        updatedToppings.delete(toppingId);
      } else {
        updatedToppings.add(toppingId);
      }
      return updatedToppings;
    });
  };

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Sản phẩm không tìm thấy</div>;
  }

  return (
    <div className="container product-detail-page mt-5">
      <nav className="breadcrumb">
        <a href="/" className="breadcrumb-item">Menu</a>
        <span className="breadcrumb-item active">{product.name}</span>
      </nav>

      <div className="row">
        {/* Product Image */}
        <div className="col-md-6 position-relative">
          <img src={product.productImages[0]?.image_url} alt={product.name} className="img-fluid" />
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <h3 className="text-warning">{product.price.toLocaleString()} đ</h3>

          {/* Size Selection */}
          <div className="my-3">
            <h5>Chọn size (bắt buộc)</h5>
            {sizes.map(size => (
              <button
                key={size.id}
                className={`btn btn-outline-secondary me-2 ${selectedSize === size.id ? 'active' : ''}`}
                onClick={() => handleSizeSelect(size.id)}
              >
                {size.size} + {parseInt(size.price_adjustment).toLocaleString()} đ
              </button>
            ))}
          </div>

          {/* Toppings Selection */}
          <div className="my-3">
            <h5>Topping</h5>
            {toppings.map(topping => (
              <button
                key={topping.id}
                className={`btn btn-outline-secondary me-2 ${selectedToppings.has(topping.id) ? 'active' : ''}`}
                onClick={() => handleToppingToggle(topping.id)}
              >
                {topping.name} + {topping.price.toLocaleString()} đ
              </button>
            ))}
          </div>

          {/* Add to Cart Button */}
          <button className="btn btn-warning mt-4">
            <i className="fas fa-shopping-cart me-2"></i> Đặt giao tận nơi
          </button>
        </div>
      </div>

      {/* Product Description */}
      <div className="product-description my-5">
        <h5>Mô tả sản phẩm</h5>
        <p>{product.description}</p>
      </div>

      {/* Related Products */}
      <div className="related-products my-5">
        <h5>Sản phẩm liên quan</h5>
        {/* Implement related product logic if available */}
      </div>
    </div>
  );
};

export default ProductDetailPage;
