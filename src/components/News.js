// News.js
import React from 'react';
import './News.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

function News() {
  const newsArticles = [
    {
      title: "Evakuasi Warga Meteseh",
      content: "24 Agustus 2023",
      image: `${process.env.PUBLIC_URL}/images/news1.jpg`,
      link: "/news1",
    },
    {
      title: "Pemerintah Setempat Mengevakuasi Korban Banjir",
      content: "7 Juli 2024",
      image: `${process.env.PUBLIC_URL}/images/news2.jpg`,
      link: "/news2",
    },
    {
      title: "Kondisi Banjir di Kaligawe Semarang",
      content: "10 Februari 2024",
      image: `${process.env.PUBLIC_URL}/images/news3.jpg`,
      link: "/news3",
    },
    {
      title: "Air Hujan Menggenangi Kota Semarang",
      content: "6 Januari 2024",
      image: `${process.env.PUBLIC_URL}/images/news4.jpg`,
      link: "/news4",
    },
    {
      title: "Kota Semarang Dikepung Banjir Akibat Cuaca Ekstrem",
      content: "14 Maret 2024",
      image: `${process.env.PUBLIC_URL}/images/news5.jpg`,
      link: "/news5",
    },
    {
      title: "Pembersihan Sungai di Daerah Semarang Timur",
      content: "22 April 2024",
      image: `${process.env.PUBLIC_URL}/images/news6.jpg`,
      link: "/news6",
    },
  ];

  return (
    <Container className="news">
      <h1 className="my-4">News</h1>
      <Row>
        {newsArticles.map((article, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="news-card h-100">
              <a href={article.link} className="news-card-link">
                <Card.Img variant="top" src={article.image} alt={article.title} className="news-card-image"/>
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.content}</Card.Text>
                </Card.Body>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default News;
