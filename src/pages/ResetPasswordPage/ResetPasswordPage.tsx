import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';  // Sử dụng useLocation để lấy email từ state
import { resetPassword } from '../../services/UserServices';  // Hàm này để gọi API đặt lại mật khẩu

const ResetPasswordPage: React.FC = () => {
  const location = useLocation();  // Lấy email từ location state
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const email = location.state?.email;  // Email được truyền từ trang quên mật khẩu

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (newPassword !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp');
      return;
    }

    try {
      setLoading(true);
      const response = await resetPassword(email, otp, newPassword);  // Gọi API đặt lại mật khẩu
      setSuccessMessage('Mật khẩu đã được đặt lại thành công.');
      console.log('Password reset successful:', response);

      // Sau khi đặt lại mật khẩu thành công, chuyển hướng về trang đăng nhập
      setTimeout(() => {
        navigate('/login');
      }, 2000);  // Chuyển về trang login sau 2 giây
    } catch (err: any) {
      setError(err.message);
      console.error('Password reset error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-password-container d-flex justify-content-center align-items-center">
      <Form className="reset-password-form p-4" onSubmit={handleResetPassword}>
        <h3>Đặt lại mật khẩu</h3>

        {error && <p className="text-danger">{error}</p>}
        {successMessage && <p className="text-success">{successMessage}</p>}

        <InputGroup className="mb-3">
          <InputGroup.Text>Email:</InputGroup.Text>
          <Form.Control
            type="email"
            value={email}
            disabled
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>OTP:</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Nhập OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Mật khẩu mới:</InputGroup.Text>
          <Form.Control
            type="password"
            placeholder="Nhập mật khẩu mới"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Xác nhận mật khẩu:</InputGroup.Text>
          <Form.Control
            type="password"
            placeholder="Nhập lại mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </InputGroup>

        <Button variant="primary" type="submit" className="w-100" disabled={loading}>
          {loading ? 'Đang đặt lại...' : 'Đặt lại mật khẩu'}
        </Button>
      </Form>
    </div>
  );
};

export default ResetPasswordPage;
