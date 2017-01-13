import React             from 'react';
import { Link }          from 'react-router';
import Terms             from './Terms';
import TermsContainer    from './TermsContainer';
import NextStep          from './NextStep';
import StepTitle         from './StepTitle';
import TwoStep           from './TwoStep';
import TitleContainer    from './TitleContainer';
import TermsDescription  from './TermsDescription';
import FlowHeader        from './FlowHeader';
import NextStepContainer from './NextStepContainer';
import { NextStepBox} from '../styles';
import '../styles/main.css';

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            isViewed: true
        }
        this.onNextStep = this.onNextStep.bind(this);
    }
    componentDidMount() {
        this.setState({
            onNextStep: this.props.onNextStep,
            isActive: this.props.isActive
        });
    }
    onNextStep(nextComponent) {
        this.setState({
            isActive: false
        });

        this.state.onNextStep(nextComponent);
    }
    render() {
        return (
            <div>
                <FlowHeader isViewed={this.state.isViewed}>
                    Getting Started
                </FlowHeader>
                <TermsDescription>
                    Git keeps your projects in what's called a <i><b>repository</b></i>, or repo for short. Your repository is all of the files in a given project folder. Where to start with your repository depends on what your project looks like right now.
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}>
                    <TwoStep>
                        <div style={NextStepBox} className='float-right btn-black' onClick={() => this.onNextStep("clone")}>
                            <h4>
                            I'm starting work on an existing git project
                            </h4>
                        </div>

                        <div style={NextStepBox} className="float-left btn-black" onClick={() => this.onNextStep("init")}>
                            <h4>I'm adding git to a project for the first time</h4>
                        </div>
                    </TwoStep>
                </NextStepContainer>
            </div>
        )
    }
}

export default Start;
