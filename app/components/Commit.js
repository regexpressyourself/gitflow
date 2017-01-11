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

class Commit extends React.Component {
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
        this.state.onNextStep("push");
    }
    render() {
        return (
            <div>
                <FlowHeader isViewed={this.state.isViewed}>
                    <TitleContainer>
                        <StepTitle>Git Commit</StepTitle>
                    </TitleContainer>
                    <TermsContainer>
                        <Terms isCode="true" term="git commit" >
                            Creates a new commit containing all the changes you had staged.
                        </Terms>
                    </TermsContainer>
                </FlowHeader>
                <TermsDescription>
                    Once you've staged some changes, it's time for the second step in saving: commiting. Commiting is like taking a snap shot of your project and saving it. Every commit has two things: what was changed, and a message describing what was changed.
                    <br/><br/>
                    You can commit your changes by running <kbd>git commit -m "Your message here"</kbd>.
                    <br/><br/>
                    By default, your commit will contain all the changes you had staged at the time of commiting. Generally, the more often you commit the better. Try to make a habit of commiting your changes every time you reach a breaking point.
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}>
                    <OneStep>
                        <div style={NextStepBox}>
                            <p>
                                The steps we've covered so far are really all you need to use git on its own. However, most people use hosting services like GitHub to collaborate with other. The next few steps are specific to that workflow.
                                <br/><br/>
                                The next step will discuss how to push your changes to GitHub.
                            </p>
                            <button onClick={this.onNextStep} className="btn btn-lg btn-black">Pushing Your Changes</button>
                        </div>

                    </OneStep>
                </NextStepContainer>
            </div>
        )
    }
}

export default Commit;
