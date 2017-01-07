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
import { NextStepBox } from '../styles';

class Start extends React.Component {
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
                    <TitleContainer>
                        <StepTitle>Getting Started</StepTitle>
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
                    <TwoStep>
                        <div style={NextStepBox}>
                            <p>
                                If you're starting work on someone else's existing project that already uses git, you will need to clone it.
                            </p>
                            <button onClick={() => this.onNextStep("clone")} className="btn btn-lg btn-black">Cloning a Repo</button>
                        </div>

                        <div style={NextStepBox}>
                            <p>
                                If you're starting your own project, or adding git to a project you've already been working on, you will need to initialize your project.
                            </p>
                            <button onClick={() => this.onNextStep("init")} className="btn btn-lg btn-black">Initializing a Repo</button>
                        </div>
                    </TwoStep>
                </NextStepContainer>
            </div>
        )
    }
}

export default Start;
