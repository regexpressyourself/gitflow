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

class Clone extends React.Component {
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
                        <StepTitle>Git Clone</StepTitle>
                    </TitleContainer>
                    <TermsContainer>
                        <Terms isCode="true" term='git clone <your_repository>' >
                            Creates a copy of an existing repository on your computer
                        </Terms>
                    </TermsContainer>
                </FlowHeader>
                <TermsDescription>
                    <b>Cloning</b> a repository allows you to start working on an existing project that already has git enabled. Cloning simply creates a sopy of the repository on your computer. You can clone a repository by running <kbd className="is-command">git clone {"<"}your_repository{">"}</kbd><kbd>{"<"}your_repository{">"}</kbd> is the address of the git repository. Most often, you will clone from a web host such as GitHub.
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}>
                    <OneStep>
                        <div style={NextStepBox}>
                            <p>
                                After cloning a repository, I recommend creating a new "branch" to hold your work. Learn more about that here:
                            </p>
                            <button onClick={this.onNextStep} className="btn btn-lg btn-black">Creating a New Branch</button>
                        </div>

                    </OneStep>
                </NextStepContainer>
            </div>
        )
    }
}

export default Clone;
