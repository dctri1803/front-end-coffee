import React, { useState } from 'react';
import './style.css'; // Optional for additional styling

// Define types for size and topping options
interface SizeOption {
  label: string;
  price: number;
}

interface ToppingOption {
  label: string;
  price: number;
}

const ProductDetailPage: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>('Nhỏ');
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);

  const sizes: SizeOption[] = [
    { label: 'Nhỏ', price: 0 },
    { label: 'Vừa', price: 10000 },
    { label: 'Lớn', price: 16000 },
  ];

  const toppings: ToppingOption[] = [
    { label: 'Đào Miếng', price: 10000 },
    { label: 'Trái Vải', price: 10000 },
    { label: 'Trân châu trắng', price: 10000 },
  ];

  const handleToppingChange = (topping: string) => {
    setSelectedToppings((prevToppings) => {
      if (prevToppings.includes(topping)) {
        return prevToppings.filter((t) => t !== topping);
      } else {
        return [...prevToppings, topping];
      }
    });
  };

  return (
    <div className="container product-detail-page mt-5">
      <nav className="breadcrumb">
        <a href="/" className="breadcrumb-item">Menu</a>
        <span className="breadcrumb-item active">Hi-Tea Vải</span>
      </nav>

      <div className="row">
        {/* Product Image */}
        <div className="col-md-6">
          <img src="your-product-image-url" alt="Hi Tea Vải" className="img-fluid" />
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <h2>Hi Tea Vải</h2>
          <h3 className="text-warning">49.000 đ</h3>

          {/* Size Selection */}
          <div className="size-selection my-3">
            <h5>Chọn size (bắt buộc)</h5>
            {sizes.map((size) => (
              <button
                key={size.label}
                className={`btn btn-outline-secondary me-2 ${selectedSize === size.label ? 'active' : ''}`}
                onClick={() => setSelectedSize(size.label)}
              >
                {size.label} + {size.price.toLocaleString()} đ
              </button>
            ))}
          </div>

          {/* Toppings Selection */}
          <div className="topping-selection my-3">
            <h5>Topping</h5>
            {toppings.map((topping) => (
              <button
                key={topping.label}
                className={`btn btn-outline-secondary me-2 ${selectedToppings.includes(topping.label) ? 'active' : ''}`}
                onClick={() => handleToppingChange(topping.label)}
              >
                {topping.label} + {topping.price.toLocaleString()} đ
              </button>
            ))}
          </div>

          <button className="btn btn-warning mt-4">
            <i className="fas fa-shopping-cart me-2"></i> Đặt giao tận nơi
          </button>
        </div>
      </div>

      {/* Product Description */}
      <div className="product-description my-5">
        <h5>Mô tả sản phẩm</h5>
        <p>
          Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus,
          mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.
        </p>
      </div>

      {/* Related Products */}
      <div className="related-products my-5">
        <h5>Sản phẩm liên quan</h5>
        <div className="row">
          <div className="col-md-3">
            <img src="related-product1.jpg" alt="Hi-Tea Đào" className="img-fluid" />
            <h6>Hi-Tea Đào</h6>
            <p>49.000 đ</p>
          </div>
          <div className="col-md-3">
            <img src="related-product2.jpg" alt="Hồng Trà Sữa Trân Châu" className="img-fluid" />
            <h6>Hồng Trà Sữa Trân Châu</h6>
            <p>55.000 đ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
