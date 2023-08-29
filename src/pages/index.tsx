import type { NextPage } from 'next';
import styles from '../styles/home.module.scss'
import FilterRow from '../components/pages/home/filter_component';
import { Card, Col, Row, Typography } from 'antd';
import MatchItemComponent from '../components/pages/home/match_item_component';
const { Text, Title } = Typography;

const Home: NextPage = () => {
  return (
    <>
      <FilterRow />
      <Col span={24}>
        <Row align={'middle'} justify={'start'} className={`w-full`}>
          <Col span={4} className={`mr-4`}>
            <Title level={3}>
              LaLiga
            </Title>
          </Col>
          <Col span={2} pull={2}>
            <img src="https://flagsapi.com/ES/flat/32.png" className={`mb-3`}/>
          </Col>
        </Row>
        <MatchItemComponent />
        <MatchItemComponent />
        <MatchItemComponent />
      </Col>
    </>
  )
}

export default Home
