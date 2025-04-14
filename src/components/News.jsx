import React, { useEffect, useState } from "react";
import moment from "moment";
import { Col, Row, Select, Typography, Card, Avatar } from "antd";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
const { Text, Title } = Typography;
const { Option } = Select;
const demoImage =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";
const News = ({ simplified }) => {
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery();

  const newsList = simplified
    ? cryptoNews?.data?.slice(0, 10)
    : cryptoNews?.data?.slice(0, 100); // Ensure `newsList` is always an array
  if (isFetching) return "loading....";
  return (
    <Row gutter={[24, 24]}>
      {newsList.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card className="news-card" hoverable>
            <a href={news.url} target="blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                </Title>
                <img
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={news?.thumbnail}
                  alt="news"
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default News;
