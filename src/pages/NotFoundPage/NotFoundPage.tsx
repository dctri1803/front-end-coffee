import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <Container className="text-center d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col>
          <h1 className="display-1">404</h1>
          <h2>Trang không tìm thấy</h2>
          <p>Rất tiếc, trang bạn đang tìm không tồn tại.</p>
          <Button variant="warning" onClick={handleNavigateHome}>
            Quay về trang chính
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
