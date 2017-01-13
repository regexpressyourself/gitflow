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

class Diff extends React.Component {
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
        this.state.onNextStep("remerge");
    }
    render() {
        return (
            <div>
                <FlowHeader isViewed={this.state.isViewed}>
                    <TitleContainer>
                        <StepTitle>Git Diff</StepTitle>
                    </TitleContainer>
                    <TermsContainer>
                        <Terms isCode="true" term="git diff" >
                            See changes between two branches, commits, etc
                        </Terms>
                    </TermsContainer>
                </FlowHeader>
                <TermsDescription>
                    So your merge didn't work. This usually means git just didn't know the best way to combine your changes. It's no need to fear.
                    <br/><br/>
                    When the merge failed, at least one file should have been listed as "in conflict". We will refer to this file as <kbd>{"<filename>"}</kbd> here.
                    <br/><br/>
                    The easiest way to debug a conflicted file from the command line is to run <kbd className="is-command">git diff {"<your_branch>"} master {"<filename>"}</kbd>
                    The diff command show the differences, and will make finding the conflicts easier.
                    <br/><br/>
                    If possible, I recommend using some kind of GUI or TUI to fix conflicts, as it can make things a lot easier.
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}>
                    <OneStep>
                        <div style={NextStepBox}>
                            <p>
                                Once you fix your conflicts, you can go back to merging.
                            </p>
                            <button onClick={this.onNextStep} className="btn btn-lg btn-black">Merging Branches</button>
                        </div>

                    </OneStep>
                </NextStepContainer>
            </div>
        )
    }
}

export default Diff;
