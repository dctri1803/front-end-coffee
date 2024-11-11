import React from 'react';
import './style.css';
import imageFooter from '../../assets/images/anh-footer.jpg';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-light p-4">
      <div className="container">
        <div className="row">
          {/* Column 1: Giới thiệu */}
          <div className="col-md-3">
            <h5>Giới thiệu</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Về Chúng Tôi</a></li>
              <li><a href="/" className="text-light">Sản phẩm</a></li>
              <li><a href="/" className="text-light">Khuyến mãi</a></li>
              <li><a href="/" className="text-light">Chuyện cà phê</a></li>
              <li><a href="/" className="text-light">Cửa Hàng</a></li>
            </ul>
          </div>

          {/* Column 2: Điều khoản */}
          <div className="col-md-3">
            <h5>Điều khoản</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Điều khoản sử dụng</a></li>
              <li><a href="/" className="text-light">Chính sách bảo mật thông tin</a></li>
              <li><a href="/" className="text-light">Hướng dẫn xuất hóa đơn GTGT</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="col-md-3">
            <h5>Đặt hàng: 1800 6936</h5>
            <ul className="list-unstyled">
              <li><i className="fas fa-map-marker-alt"></i> Liên hệ</li>
              <li>67 Đinh Bộ Lĩnh, P.26, Q.Bình Thạnh, TP.Hồ Chí Minh</li>
            </ul>
            {/* Social Links */}
            <div className="social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <i className="fab fa-facebook-square fa-2x"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light ms-3">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>

          {/* Column 4: Image (Logo or Social Media) */}
          <div className="col-md-3">
            <div className="fb-page">
              <img src={imageFooter} alt="The Coffee House" width={307} className="img-fluid" />
              <div >
                <small>The Coffee House</small>
                <p>715,159 người theo dõi</p>
              </div>
              <a href="https://www.facebook.com" className="btn btn-sm btn-dark ">Theo dõi Trang</a>
              <a href="https://www.facebook.com" className="btn btn-sm btn-dark ms-2">Chia sẻ</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="row mt-3">
          <div className="col text-center">
            <hr className="bg-light" />
            <small >
              Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN<br />
              Mã số DN: 0312867172 do sở kế hoạch và đầu tư tp. HCM cấp ngày 23/07/2014. Người đại diện: Nguyễn Hoàng Phi<br />
              Địa chỉ: 86-88 Cao Thắng, phường 04, quận 3, tp Hồ Chí Minh Điện thoại: (028) 7107 8079 Email: hi@thecoffeehouse.vn<br />
              © 2014-2022 Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN mọi quyền bảo lưu
            </small>
          </div>
        </div>
      </div>

      {/* Floating Chat Icon */}
      {/* <div className="floating-chat-icon">
        <a href="/">
          <i className="fas fa-headset fa-2x text-light"></i>
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
