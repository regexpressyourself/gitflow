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

class Checkout extends React.Component {
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
        this.state.onNextStep("work");

    }
    render() {
        return (
            <div>
                <FlowHeader isViewed={this.state.isViewed}>
                    <TitleContainer>
                        <StepTitle>Git Checkout</StepTitle>
                    </TitleContainer>
                    <TermsContainer>
                        <Terms term="Branch" >
                            A working copy of a repository, isolated from the other working copies
                        </Terms>
                        <Terms isCode="true" term="git branch <branch_name>" >
                            Creates a new branch
                        </Terms>
                    </TermsContainer>
                </FlowHeader>
                <TermsDescription>
                    Remember back on the "Branch" step, we had to checkout our new branch. Now that we have some changes
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}>
                    <OneStep>
                        <div style={NextStepBox}>
                            <p>
                                Once you've created a new branch, you can start working just like normal.
                            </p>
                            <button onClick={this.onNextStep} className="btn btn-lg btn-black">Working With Git</button>
                        </div>

                    </OneStep>
                </NextStepContainer>
            </div>
        )
    }
}

export default Checkout;
