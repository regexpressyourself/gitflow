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

class CheckoutMaster extends React.Component {
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
        this.state.onNextStep("pull");

    }
    render() {
        return (
            <div>
                <FlowHeader isViewed={this.state.isViewed}>
                    <TitleContainer>
                        <StepTitle>Checkout Master</StepTitle>
                    </TitleContainer>
                    <TermsContainer>
                        <Terms isCode="true" term="git checkout master" >
                            Switch back to the master branch
                        </Terms>
                    </TermsContainer>
                </FlowHeader>
                <TermsDescription>
                    Earlier, we checked out a new branch for our work. Now that we've done some work and commited it, it's time to combine those changes into the master branch.
                    <br/><br/>
                    Combining changes can take a few steps, but following them can avoid major headaches.
                    <br/><br/>
                    First, we need to check out master.
                    <kbd className="is-command">git checkout master</kbd>
                    You'll notice all the changes you made earlier have dissapeared. That's ok. The master just branch doesn't know about them yet. Let's fix that.
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}>
                    <OneStep>
                        <div style={NextStepBox} onClick={this.onNextStep} className="btn-black">
                            <h4>
                                Update master with the latest changes online
                            </h4>
                        </div>

                    </OneStep>
                </NextStepContainer>
            </div>
        )
    }
}

export default CheckoutMaster;
