import React from 'react';
import { Progress } from 'antd';

export default () => {
    return (
        <div className="thirdstep-wrapper">
            <h2>Your Report</h2>
            <p>According to the symptoms and answers you have given us, we have the following diagnosis for you.</p>
            <div className="progress">
                <Progress className="progress-bar" type="circle" percent={75}></Progress>
                <div className="diagnosis-disc">
                    <h3>Cancer</h3>
                    <p>Lorem ipsum dolor amet tilde messenger bag prism cred. Tote bag street art tattooed, fingerstache sustainable stumptown kickstarter meditation bitters ethical skateboard tilde cold-pressed waistcoat tacos. Lyft paleo blue bottle stumptown. Synth brooklyn pabst asymmetrical helvetica poke four loko banh mi </p>
                </div>
            </div>
            <div className="progress">
                <Progress className="progress-bar" type="circle" percent={99}></Progress>
                <div className="diagnosis-disc">
                    <h3>blævermås</h3>
                    <p>Lorem ipsum dolor amet tilde messenger bag prism cred. Tote bag street art tattooed, fingerstache sustainable stumptown kickstarter meditation bitters ethical skateboard tilde cold-pressed waistcoat tacos. Lyft paleo blue bottle stumptown. Synth brooklyn pabst asymmetrical helvetica poke four loko banh mi </p>
                </div>
            </div>
            <div className="progress">
                <Progress className="progress-bar" type="circle" percent={20}></Progress>
                <div className="diagnosis-disc">
                    <h3>Spand</h3>
                    <p>Lorem ipsum dolor amet tilde messenger bag prism cred. Tote bag street art tattooed, fingerstache sustainable stumptown kickstarter meditation bitters ethical skateboard tilde cold-pressed waistcoat tacos. Lyft paleo blue bottle stumptown. Synth brooklyn pabst asymmetrical helvetica poke four loko banh mi </p>
                </div>
            </div>
            
        </div> 
    );
}