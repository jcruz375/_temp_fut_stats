import { Col, Collapse, Typography } from 'antd';
const { Panel } = Collapse;
const { Text, Title } = Typography;

interface MatchItemComponentProps {

}

const MatchItemComponent = ({ }: MatchItemComponentProps) => {

  return (
    <Col span={24} className={`mb-2.5`}>
      <Collapse
        bordered={false}
        size='middle'
        style={{
          width: '100%',
          backgroundColor: '#e7e7e7'
        }}
        expandIconPosition='end'
      >
        <Panel
          header={
            <>
              <Text strong className={`mr-2`}>
                27/05/2002 -
              </Text>
              <Text >
                Real Madrid x Barcelona
              </Text>
            </>
          }
          key="1"
        >
          aaaa
        </Panel>
      </Collapse>
    </Col>
  );
}

export default MatchItemComponent;