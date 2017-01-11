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
    onNextStep() {
        this.setState({
            isActive: false
        });
        this.state.onNextStep("branch");

    }
    render() {
        return (
            <div>
                <FlowHeader isViewed={this.state.isViewed}>
                    <TitleContainer>
                        <StepTitle>Git Init</StepTitle>
                    </TitleContainer>
                    <TermsContainer>
                        <Terms isCode="true" term="git init" >
                            Creates .git folder and enables git for your project
                        </Terms>
                    </TermsContainer>
                </FlowHeader>
                <TermsDescription>
                    You can bootstrap a new repository by using the <kbd>git init</kbd> command at the top folder of your project. This will create a .git folder for you, which will store the different versions of your files in git's own way. Running <kbd>git init</kbd> is all that's needed to start using git.
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}>
                    <OneStep>
                        <div style={NextStepBox}>
                            <p>
                                After initializing git, I recommend creating a new "branch" to hold your work. Learn more about that here:
                            </p>
                            <button onClick={this.onNextStep} className="btn btn-lg btn-black">Creating a New Branch</button>
                        </div>

                    </OneStep>
                </NextStepContainer>
            </div>
        )
    }
}

export default Init;
