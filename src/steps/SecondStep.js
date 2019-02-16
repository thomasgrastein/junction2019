import React from 'react';
import { Slider, Row, Col, Checkbox, Select, Input, DatePicker } from 'antd'; 

export default () => {

    const CheckboxGroup = Checkbox.Group;
    const plainOptions = ['Yes', 'No'];
    const Option = Select.Option;
    const children = [
        <Option value="walk">Walking</Option>,
        <Option value="talk">Talking</Option>,
        <Option value="run">Running</Option>,
        <Option value="eat">Eating</Option>,
        <Option value="swallow">Swallowing</Option>,
        <Option value="breath">Breathing</Option>,
        <Option value="stand">Standing</Option>,
        <Option value="sit">Sitting</Option>,
        <Option value="laying">Laying down</Option>,
        <Option value="rotation">Body rotation</Option>,
        <Option value="pee">Peeing</Option>,
        <Option value="poop">Pooping</Option>,
        <Option value="lift">Lifting</Option>,
        <Option value="all">All the time</Option>,
    ];
    const { TextArea } = Input;
    const { MonthPicker } = DatePicker;

    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <div className="secondstep-wrapper">
            <h2>Describe your symptoms</h2>
            <p>Try your best to answer the following questions.</p>
            <strong>How much pain to you experience (1 - 100)</strong>
            <Slider></Slider>
            <strong>Have you experienced this before?</strong>
            <br></br>
            <CheckboxGroup options={plainOptions} onChange={onChange} /> 
            <br></br>
            <strong>When did you experience it for the first time?</strong>
            <br/>
            <MonthPicker placeholder="Select Month" />
            <br/>
            <strong>Under which activities do you experience this? (Choose one or more)</strong>
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
