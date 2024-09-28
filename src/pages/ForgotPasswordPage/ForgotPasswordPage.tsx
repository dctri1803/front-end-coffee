import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import './style.css'
import { useNavigate } from 'react-router-dom'
import { sendOtp } from '../../services/UserServices';  // Hàm này để gọi API gửi OTP

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setLoading(true);

    try {
      const response = await sendOtp(email);  // Gọi API gửi OTP
      setSuccessMessage('OTP đã được gửi đến email của bạn.');
      console.log('OTP sent:', response);
      navigate('/reset-password', { state: { email } });
    } catch (err: any) {
      setError(err.message);
      console.error('OTP send error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-container d-flex justify-content-center align-items-center">
      <Form className="forgot-password-form p-4" onSubmit={handleSendOtp}>
        <h3>Quên mật khẩu</h3>

        {error && <p className="text-danger">{error}</p>}
        {successMessage && <p className="text-success">{successMessage}</p>}

        <InputGroup className="mb-3">
          <InputGroup.Text>Email:</InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputGroup>

        <Button variant="primary" type="submit" className="w-100" disabled={loading}>
          {loading ? 'Đang gửi...' : 'Gửi OTP'}
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPasswordPage;
