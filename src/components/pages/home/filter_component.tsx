import type { SelectProps } from 'antd';
import { Button, Col, DatePicker, Input, Row, Select } from "antd";
import styles from '../../../styles/Home.module.scss';
import { FunctionComponent } from 'react';


interface FilterRowProps {

}

const FilterRow = ({ }: FilterRowProps) => {
  const options: SelectProps['options'] = [];

  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  return (
    <Row justify={{ md: 'space-between' }} className={`mb-10 ${styles.filter_container}`}>
      <Col span={6}>
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Selecione um país"
          onChange={handleChange}
          options={options}
        />
      </Col>
      <Col span={6}>
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Todos os campeonatos"
          onChange={handleChange}
          options={options}
        />
      </Col>
      <Col span={5}>
        <Input
          placeholder='Buscar por um time'
        />
      </Col>
      <Col span={3}>
        <DatePicker
        //TODO config dates
        />
      </Col>
      <Col span={2}>
        <Button type="primary">
          Filtrar
        </Button>
      </Col>
      <Col span={1}>
        <Button type="text">
          Limpar
        </Button>
      </Col>
    </Row>
  );
}

export default FilterRow;