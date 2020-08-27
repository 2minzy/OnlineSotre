import React, { useEffect, useState } from 'react';
import { FaCode } from 'react-icons/fa';
import axios from 'axios';
import Meta from 'antd/lib/card/Meta';
import { Icon, Col, Card, Row, Carousel } from 'antd';
import ImageSlider from '../../utils/ImageSlider';

function LandingPage() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    axios.post('/api/product/products').then((response) => {
      if (response.data.success) {
        setProducts(response.data.productInfo);
      } else {
        alert(' Failed to get products. ');
      }
    });
  }, []);

  const renderCards = Products.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <Card
          cover={
            <a href={`/product/${product._id}`}>
              <ImageSlider images={product.images} />
            </a>
          }
        >
          <Meta title={product.title} description={`$${product.price}`} />
        </Card>
      </Col>
    );
  });

  return (
    <div style={{ width: '75%', margin: '3rem auto' }}>
      <div stlye={{ textAlign: 'center' }}>
        <h2>
          Let's Travel Anywhere <Icon type="rocket" />
        </h2>
      </div>
      {/* Filter */}

      {/* Search */}

      {/* Cards */}
      <Row gutter={[16, 16]}>{renderCards}</Row>

      <div style={{ justifyContent: 'center' }}>
        <button>LOAD MORE</button>
      </div>
    </div>
  );
}

export default LandingPage;
