import React from 'react';
import { Collapse, Row, Col, Typography } from 'antd';
import HTMLReactParser from 'html-react-parser';

//import Loader from './Loader';
import { useGetCryptoExchangeQuery } from "../services/CryptoExchangeApi";
const { Text } = Typography;
const { Panel } = Collapse;


const Exchanges = ()=>{
    const { data, isFetching } = useGetCryptoExchangeQuery();
    console.log(data,"exchanges")
if(isFetching)return("Loading...")
    return (
        <>
          <Row>
            <Col span={6}>Exchanges</Col>
            <Col span={6}>24h Trade Volume</Col>
            <Col span={6}>Markets</Col>
            <Col span={6}>Change</Col>
          </Row>
          <Row>
          {Object.entries(data).map(([crypto, exchanges],i) => (
            
              <Col span={24}>
                {console.log(crypto,exchanges.coinbaseSpot.markPrice,"lklklk")}
                <Collapse>
                  <Panel
                    key={i}
                    showArrow={false}
                    header={(
                      <Row key={i}>
                        <Col span={6}>
                          <Text><strong>{crypto}</strong></Text>
                        </Col>
                        <Col span={6}>{exchanges?.coinbaseSpot?.markPrice||''}</Col>
                        <Col span={6}>{exchanges?.coinbaseSpot?.bestBid||''}</Col>
                        <Col span={6}>{exchanges?.coinbaseSpot?.bestAsk||''}%</Col>
                      </Row>
                      )}
                  >
                    {HTMLReactParser(exchanges.description || '')}
                  </Panel>
                </Collapse>
              </Col>
            ))}
          </Row>
        </>
      );
    };
    
    export default Exchanges;