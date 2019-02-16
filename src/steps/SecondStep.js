import React from 'react';
import { Slider, Row, Col, Checkbox, Select, Input } from 'antd'; 

export default () => {

    const CheckboxGroup = Checkbox.Group;
    const plainOptions = ['Yes', 'No'];
    const Option = Select.Option;
    const children = [];
    const { TextArea } = Input;

    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }
    
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <div className="secondstep-wrapper">
            <h1>Describe your symptoms</h1>
            <p>Try your best to answer the following questions.</p>
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
            <strong>Elaborate on the discomfort you experience</strong>
            <TextArea rows={4} />
        </div>
    );
}
