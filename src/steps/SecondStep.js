import React from 'react';
import { Slider, Row, Col, Checkbox, Select } from 'antd'; 

export default () => {

    const CheckboxGroup = Checkbox.Group;
    const plainOptions = ['Yes', 'No'];
    const Option = Select.Option;

    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <div>
            <Row type="flex" align="middle">
                <Col span={8}>
                    <strong>How much pain to you experience (1 - 100)</strong>
                    <Slider></Slider>
                    <strong>Have you experienced this before?</strong>
                    <br></br>
                    <CheckboxGroup options={plainOptions} onChange={onChange} />
                    <br></br>
                    <strong>When do you experince this problem?</strong>
                    <Select
                        mode="tags"
                        style={{ width: '100%' }}
                        placeholder="Tags Mode"
                        onChange={handleChange}
                    >
                        {children}
                    </Select>
                </Col>
            </Row>
        </div>
    );
}