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
                    Earlier, we checked out a new branch for our work. Now that we've done some work, it's time to get them into the master branch. There are a few steps here, but following them will help you avoid some of the typical headaches.
                    <br/><br/>
                    Fortunately, this step is easy: checkout master.
                    <br/><br/>
                    First, make sure you have all your changes commited.
                    <br/><br/>
                    Next, checkout master just like we checked out our development branch: <kbd className="is-command">git checkout master</kbd>
                    All done!
                    <br/><br/>
                    You'll notice all the changes you made earlier have dissapeared. That's ok. The master just branch doesn't know about them yet. Let's fix that.
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}>
                    <OneStep>
                        <div style={NextStepBox}>
                            <p>
                                Before you combine your changes, you should check to see if master has changed since you last updated it. This next step is not strictly necessary every time, but it is easy to do and saves a lot of trouble. I recommend getting in the habit of doing it regardless.
                            </p>
                            <button onClick={this.onNextStep} className="btn btn-lg btn-black">Pulling Changes</button>
                        </div>

                    </OneStep>
                </NextStepContainer>
            </div>
        )
    }
}

export default CheckoutMaster;
