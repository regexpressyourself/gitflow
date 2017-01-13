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

class Merge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            isViewed: true,
            reMerge: false
        }
        this.onNextStep = this.onNextStep.bind(this);
    }
    componentDidMount() {
        this.setState({
            onNextStep: this.props.onNextStep,
            isActive: this.props.isActive,
        });
        this.getNextStep(this.props.reMerge);
    }
    onNextStep(nextComponent) {
        this.setState({
            isActive: false
        });
        this.state.onNextStep(nextComponent);
    }
    getNextStep(isReMerge) {
        if (isReMerge) {
            this.setState({
                nextStep: (
                    <OneStep>
                        <div style={NextStepBox}>
                            <p>
                                Once you've fixed your conflict, you can move on to push your changes back online
                            </p>
                            <button onClick={() => this.onNextStep("push")} className="btn btn-lg btn-black">Pushing Changes</button>
                        </div>
                    </OneStep>
                )
            });
        }
        else {
            console.log("false");
            this.setState({
                nextStep: (
                    <TwoStep>
                        <div style={NextStepBox} className='float-right'>
                            <p>
                                It Worked!
                            </p>
                            <button onClick={() => this.onNextStep("push")} className="btn btn-lg btn-black">Git Push</button>
                        </div>

                        <div style={NextStepBox} className="float-left">
                            <p>
                                I got an error about a conflict...
                            </p>
                            <button onClick={() => this.onNextStep("diff")} className="btn btn-lg btn-black">Git Diff</button>
                        </div>
                    </TwoStep>
                    )
            })
        }
    }
    render() {
        return (
            <div>
                <FlowHeader isViewed={this.state.isViewed}>
                    <TitleContainer>
                        <StepTitle>Git Merge</StepTitle>
                    </TitleContainer>
                    <TermsContainer>
                        <Terms isCode="true" term="git merge <from_branch> <to_branch>" >
                            Merges changes from <kbd>{"<from_branch>"}</kbd> into <kbd>{"<to_branch>"}</kbd>
                        </Terms>
                    </TermsContainer>
                </FlowHeader>
                <TermsDescription>
                    You can combine changes from one branch into another by merging. Merging can result in errors if git doesn't know what change to add where, but typically works well when the team is using git in the same way.
                    <br/><br/>
                    To merge our branch into master, we run <kbd className="is-command">git merge {"<our_branch>"} master</kbd> where <kbd>{"<our_branch>"}</kbd> is the name of your development branch. (If you forgot the name of your branch, run <kbd className="is-command">git branch</kbd> to see all the branches).
                    <br/><br/>
                                Did it work? If yes- awesome! Move onto Git Push.
                    <br/><br/>
                                If you got an error complaining about a conflict, don't worry! We'll fix it. Let's start debugging by using Git Diff.
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}>
                    {this.state.nextStep}
                </NextStepContainer>
            </div>
        )
    }
}

export default Merge;
