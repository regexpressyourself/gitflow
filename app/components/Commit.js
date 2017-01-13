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
        this.state.onNextStep("checkout");
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
                    Running: <kbd className="is-command">git commit</kbd> will prompt you to write a commit message briefly detailing what changes you made.
                    <br/><br/>
                    You can commit and write your message all at once by running: <kbd className="is-command">git commit -m "Your message here"</kbd>.
                    <br/><br/>
                    By default, your commit will contain all the changes you had staged at the time of commiting. Generally, the more often you commit the better. Try to make a habit of commiting your changes every time you reach a breaking point. It makes going back to find bugs a lot easier.
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}>
                    <OneStep>
                        <div style={NextStepBox}>
                            <p>
                                Once you have some changes added and commited, it's time to go back to our trusty <kbd>master</kbd> branch.
                                <br/><br/>
                            </p>
                            <button onClick={this.onNextStep} className="btn btn-lg btn-black">Checkout Master</button>
                        </div>

                    </OneStep>
                </NextStepContainer>
            </div>
        )
    }
}

export default Commit;
