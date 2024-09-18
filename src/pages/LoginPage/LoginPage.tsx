import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import './style.css'
import imageLogin from '../../assets/images/login_page.png';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Phone Number:', account);
    console.log('Remember Password:', rememberPassword);
  };

  const handleNavigateRegister= () => {
    navigate('/register');
  }

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <Form className="login-form p-4" onSubmit={handleLogin}>
        <div className="text-center mb-8">
          <img src={imageLogin} alt="Cafe" height='200' width={340}/>
          <h3>Chào mừng bạn đến với</h3>
          <h2>THE COFFEE SHOP</h2>
        </div>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            Tài khoản:
          </InputGroup.Text>
          <Form.Control
            type="account"
            placeholder="Nhập tài khoản"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            required
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            Mật khẩu:
          </InputGroup.Text>
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

        <p> <span className='WrapperTextLight'>Quên mật khẩu</span> </p>
        <p> Chưa có tài khoản? <span className='WrapperTextLight' onClick={handleNavigateRegister}>Tạo tài khoản</span></p>

        <Button variant="warning" type="submit" className="w-100">
          Đăng nhập
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
