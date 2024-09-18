import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import './style.css'
import imageLogin from '../../assets/images/login_page.png';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Phone Number:', account);
    console.log('Password:', confirmPassword);
  };

  const handleNavigateLogin= () => {
    navigate('/login');
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
          <InputGroup.Text style={{paddingRight: 40}}>
            Email:
          </InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="Nhập lại email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text style={{paddingRight:11}}>
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

        <InputGroup className="mb-3" >
          <InputGroup.Text style={{paddingRight:14}}>
            Xác nhận:
          </InputGroup.Text>
          <Form.Control
            type="password"
            placeholder="Nhập lại mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </InputGroup>

        <InputGroup className="mb-3" >
          <InputGroup.Text style={{paddingRight:6}}>
            Điện thoại:
          </InputGroup.Text>
          <Form.Control
            type="tele"
            placeholder="Nhập số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </InputGroup>

        <p> Đã có tài khoản? <span className='WrapperTextLight' onClick={handleNavigateLogin}>Đăng nhập</span></p>

        <Button variant="warning" type="submit" className="w-100">
          Đăng kí
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
