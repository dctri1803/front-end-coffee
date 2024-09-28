import React, { useEffect, useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import './style.css';
import imageLogin from '../../assets/images/login_page.png';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/UserServices';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem('savedEmail');
    const savedPassword = localStorage.getItem('savedPassword');

    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberPassword(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Reset any previous errors

    try {
      // Call the login API via the loginUser function
      const data = await loginUser(email, password);

      // Handle successful login, e.g., store token and navigate
      console.log('Login successful:', data);

      // Save token to localStorage/sessionStorage (based on your design)
      localStorage.setItem('authToken', data.token);

      if (rememberPassword) {
        localStorage.setItem('savedEmail', email);
        localStorage.setItem('savedPassword', password); // Consider encrypting this
      } else {
        localStorage.removeItem('savedEmail');
        localStorage.removeItem('savedPassword');
      }

      // Redirect to another page after successful login
      navigate('/');
    } catch (err: any) {
      // Handle error, set error message
      setError(err.message);
      console.error('Login error:', err);
    }
  };

  const handleNavigateRegister = () => {
    navigate('/register');
  };

  const handleNavigateForgotPassword = () => {
    navigate('/forgot-password');
  }

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <Form className="login-form p-4" onSubmit={handleLogin}>
        <div className="text-center mb-8">
          <img src={imageLogin} alt="Cafe" height="200" width={340} />
          <h3>Chào mừng bạn đến với</h3>
          <h2>THE COFFEE SHOP</h2>
        </div>

        {error && <p className="text-danger">{error}</p>} {/* Display any error messages */}

        <InputGroup className="mb-3">
          <InputGroup.Text>Tài khoản:</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Nhập tài khoản"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Mật khẩu:</InputGroup.Text>
          <Form.Control
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputGroup>

        <Form.Group className="mb-3" controlId="rememberPassword">
          <Form.Check
            type="checkbox"
            label="Nhớ mật khẩu"
            checked={rememberPassword}
            onChange={() => setRememberPassword(!rememberPassword)}
          />
        </Form.Group>

        <p>
          <span className="WrapperTextLight" onClick={handleNavigateForgotPassword}>Quên mật khẩu</span>
        </p>
        <p>
          Chưa có tài khoản?{' '}
          <span className="WrapperTextLight" onClick={handleNavigateRegister}>
            Tạo tài khoản
          </span>
        </p>

        <Button variant="warning" type="submit" className="w-100" >
          Đăng nhập
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
