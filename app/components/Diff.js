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
                    Git Diff
                    <Terms isCode="true" term="git diff" >
                        See changes between two branches, commits, etc
                    </Terms>
                </FlowHeader>
                <TermsDescription>
                    So your merge didn't work. This usually means git just didn't know the best way to combine your changes. It's no need to fear.
                    <br/><br/>
                    When the merge failed, at least one file should have been listed as "in conflict". We will refer to this file as <kbd>{"<conflicted_file>"}</kbd> here.
                    <br/><br/>
                    The easiest way to debug a simple conflict is to look at the differences between the two versions of the file. You can do this by running: <kbd className="is-command">git diff {"<your_branch>"} master {"<conflict_file>"}</kbd>
                    I recommend using some kind of GUI to fix non-trivial conflicts. A lot of IDEs offer one, or you're free to choose one from a third party. I won't be covering them here.
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}>
                    <OneStep>
                        <div style={NextStepBox} onClick={this.onNextStep} className="btn-black">
                            <h4>
                            I've fixed my conflicts. Get back to merging.
                            </h4>
                        </div>

                    </OneStep>
                </NextStepContainer>
            </div>
        )
    }
}

export default Diff;
