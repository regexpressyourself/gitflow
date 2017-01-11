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

class Push extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: true,
            isViewed: true
        }
        this.onNextStep = this.onNextStep.bind(this);
    }
    componentDidMount() {
        this.setState({
            onNextStep: this.props.onNextStep
        });
    }
    onNextStep() {
        this.setState({
            isActive: false
        });
        this.state.onNextStep("commit");
    }
    render() {
        return (
            <div>
                <FlowHeader isViewed={this.state.isViewed}>
                    <TitleContainer>
                        <StepTitle>Git Push</StepTitle>
                    </TitleContainer>
                    <TermsContainer>
                        <Terms isCode="true" term="git add <filename>" >
                            Adds the changes in a given file to git
                        </Terms>
                        <Terms term="Stage">
                            Git lingo for "save." More or less synonymous with "add."
                        </Terms>
                    </TermsContainer>
                </FlowHeader>
                <TermsDescription>
                    After you've made changes, you will want to save them. Saving in git is a two step process: "staging" and "commiting". Don't worry about commiting for now, we will first talk about staging here.
                    <br/> <br/>
                    In git lingo, "staging" or "adding" files sets them up (or "stages them") to be saved. To stage a given file, you will use the command <kbd>git add filename</kbd>, where <kbd>filename</kbd> is the name of the file you want to save.
                    <br/> <br/>
                    You can add multiple files at once by stringing them together, e.g. <kbd>git add file1 file2 file3</kbd>.
                    <br/> <br/>
                    Alternatively, you can add all the current changes (all the changes listed under <kbd>git status</kbd>) by replacing the filename with a period:
                    <br/>
                    <kbd>git add .</kbd>
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}>
                    <OneStep>
                        <div style={NextStepBox}>
                            <p>
                                Once your files are staged, you can move on to commiting them.
                            </p>
                            <button onClick={this.onNextStep} className="btn btn-lg btn-black">Commiting Your Changes</button>
                        </div>

                    </OneStep>
                </NextStepContainer>
            </div>
        )
    }
}

export default Push;
