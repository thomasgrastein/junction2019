import React from 'react';
import { Slider, Checkbox, Select, Input, DatePicker, InputNumber, Radio } from 'antd';
const RadioGroup = Radio.Group;

export default (props) => {

    const CheckboxGroup = Checkbox.Group;
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

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    function onChange(age, gender, pain, exp, date, act, ela) {
        const { description, updateDescription } = props;
        let changed = false;
        console.log(description);
        if (age) {
            description.age = age;
            changed = true;
        }
        if (gender) {
            description.gender = gender;
            changed = true;
        }
        if (pain) {
            description.pain = pain;
            changed = true;
        }
        if (exp) {
            description.previous = exp;
            changed = true;
        }
        if (date) {
            description.first = date;
            changed = true;
        }
        if (act) {
            description.activities = act;
            changed = true;
        }
        if (ela) {
            description.elaboration = ela;
            changed = true;
        }
        if (changed) {
            updateDescription(description);
        }
    }

    return (
        <div className="secondstep-wrapper">
            <h2>Describe your symptoms</h2>
            <p>Try your best to answer the following questions.</p>
            <strong>Age</strong><br />
            <InputNumber min={1} max={130} defaultValue={1} onChange={(e) => onChange(e, null, null, null, null, null, null)} value={props.description.age}/><br />
            <strong>Gender</strong><br />
            <Select defaultValue="Select gender" style={{ width: 120 }} onChange={(e) => onChange(null, e, null, null, null, null, null)} value={props.description.gender}>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
            </Select><br />
            <strong>How much pain to you experience (1 - 100)</strong>
            <Slider onChange={(e) => onChange(null, null, e, null, null, null, null)} value={props.description.pain}/>
            <strong>Have you experienced this before?</strong>
            <br />
            <RadioGroup onChange={(e) => onChange(null, null, null, e.target.value, null, null, null)} value={props.description.previous}>
                <Radio value={"yes"}>Yes</Radio>
                <Radio value={"no"}>No</Radio>
            </RadioGroup>
            <br />
            <strong>When did you experience it for the first time?</strong>
            <br />
            <MonthPicker placeholder="Select Month" onChange={(e) => onChange(null, null, null, null, e, null, null)} value={props.description.first}/>
            <br />
            <strong>Under which activities do you experience this? (Choose one or more)</strong>
            <Select
                mode="tags"
                style={{ width: '100%' }}
                placeholder="Select by pressing here"
                onChange={(e) => onChange(null, null, null, null, null, e, null)}
                value={props.description.activities}
            >
                {children}
            </Select>
            <strong>Elaborate on the discomfort you experience</strong>
            <TextArea rows={4} onChange={(e) => onChange(null, null, null, null, null, null, e.target.value)} value={props.description.elaboration}/>
        </div>
    );
}
