import React from 'react';
import { Progress, Spin } from 'antd';

export default class ThirdStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            diagnosis: []
        }
    }

    componentDidMount() {
        this.getDiagnosis();
    }

    getDiagnosis = () => {
        const { symptoms, description, updateDiagnosis } = this.props;
        if (symptoms.length > 0) {
            let str = "";
            symptoms.forEach(e => {
                e.symptoms.forEach(s => {
                    str += s.ID + "%2C";
                });
            });
            fetch('https://priaid-symptom-checker-v1.p.rapidapi.com/diagnosis?symptoms=%5B' + str.substr(0, str.length - 3) + '%5D&gender=' + description.gender + '&year_of_birth=' + description.age + '&language=en-gb', {
                headers: {
                    "X-RapidAPI-Key": "6f85909739mshe3c9795d32c34b8p10e5d4jsn9b9185621f4a"
                }
            }).then(res => res.json()).then(r => {
                this.setState({ diagnosis: r, loading: false });
                updateDiagnosis(r);
            })
        }
        /*fetch('https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations/' + locationId + '?language=en-gb', {
            headers: {
                "X-RapidAPI-Key": "6f85909739mshe3c9795d32c34b8p10e5d4jsn9b9185621f4a"
            }
        }).then(res => res.json()).then(r => {
            this.setState({ diagnosis: r, loading: false });
        })*/
    }

    renderDiagnosis = () => {
        const { diagnosis } = this.state;
        if (diagnosis.length > 0) {
            return diagnosis.map((v, k) => (
                <div className="progress" key={k}>
                    <Progress className="progress-bar" type="circle" percent={v.Issue.Accuracy.toFixed(1)}></Progress>
                    <div className="diagnosis-disc">
                        <h3>{v.Issue.Name}</h3>
                        <p>Lorem ipsum dolor amet tilde messenger bag prism cred. Tote bag street art tattooed, fingerstache sustainable stumptown kickstarter meditation bitters ethical skateboard tilde cold-pressed waistcoat tacos. Lyft paleo blue bottle stumptown. Synth brooklyn pabst asymmetrical helvetica poke four loko banh mi </p>
                    </div>
                </div>
            ));
        } else {
            return (
            <div>
                <h1>We could not find any diagnosis based on your symptoms</h1>
                <h3>Perhaps your symptoms are not related. Please proceed to booking.</h3>
            </div>
            )}
    }

    render() {
        const { loading } = this.state;
        return (
            <div className="thirdstep-wrapper">
                <h2>Your Report</h2>
                <p>According to the symptoms and answers you have given us, we have the following diagnosis for you.</p>

                {!loading ?
                    <div>
                        {this.renderDiagnosis()}
                    </div>
                    :
                    <Spin size="large" style={{ textAlign: "center", "width": "100%" }} />}
            </div>
        );
    }
}