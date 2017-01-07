import React             from 'react';
import { Link }          from 'react-router';
import Terms             from './Terms';
import TermsContainer    from './TermsContainer';
import NextStep          from './NextStep';
import StepTitle         from './StepTitle';
import TwoStep           from './TwoStep';
import OneStep           from './OneStep';
import TitleContainer    from './TitleContainer';
import TermsDescription  from './TermsDescription';
import FlowHeader        from './FlowHeader';
import NextStepContainer from './NextStepContainer';
import { NextStepBox } from '../styles';

class Init extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: true,
            isViewed: true
        }
        this.onNextStep = this.onNextStep.bind(this);
    }
    componentDidMount() {
        this.setState({
            onNextStep: this.props.onNextStep
        });
    }
    onNextStep() {
        this.setState({
            isActive: false
        });
        this.state.onNextStep("init");

    }
    render() {
        return (
            <div>
                <FlowHeader isViewed={this.state.isViewed}>
                    <TitleContainer>
                        <StepTitle>Git Init</StepTitle>
                    </TitleContainer>
                    <TermsContainer>
                        <Terms term='Repository' >
                            Another word for "project" in git lingo
                        </Terms>
                    </TermsContainer>
                </FlowHeader>
                <TermsDescription>
                    Git keeps your projects in what's called a <i><b>repository</b></i>, or repo for short. Your repository is all of the files in a given project folder. Where to start with your repository depends on what your project looks like right now.
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}>
                    <OneStep>
                        <div style={NextStepBox}>
                            <p>
                                If you're starting work on someone else's existing project that already uses git, you will need to clone it.
                            </p>
                            <button onClick={this.onNextStep} className="btn btn-lg btn-black">Cloning a Repo</button>
                        </div>

                    </OneStep>
                </NextStepContainer>
            </div>
        )
    }
}

export default Init;
