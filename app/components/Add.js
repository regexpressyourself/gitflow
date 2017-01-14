import React             from 'react';
import Terms             from './Terms';
import TermsDescription  from './TermsDescription';
import FlowHeader        from './FlowHeader';
import NextStepContainer from './NextStepContainer';

class Add extends React.Component {
    /** Add component handles the "git add" step
    **/
    constructor(props) {
        super(props);
        this.state = {
            isActive: false, // whether the step is the last one listed
            isViewed: true   // whether the step has been reached
        }
        this.onNextStep = this.onNextStep.bind(this);
    }
    componentDidMount() {
        this.setState({
            onNextStep: this.props.onNextStep, // Flow's onNextStep()
            isActive:   this.props.isActive    // from Flow
        });
    }
    onNextStep() {
        // Go to next step in flowchart
        this.setState({
            isActive: false
        });
        this.state.onNextStep("commit");
    }
    render() {
        return (
            <div>
                <FlowHeader isViewed={this.state.isViewed}>
                    Git Add
                    <Terms isCode="true" term="git add <filename>" >
                        Adds the changes in a given file to git
                    </Terms>
                </FlowHeader>

                <TermsDescription>
                    After you've made changes, you will want to save them. Saving in git is a two step process:
                    <span className="left-margin">
                        1. <kbd>Stage</kbd> changes to be saved
                        <br/>
                        2. <kbd>Commit</kbd>, or save those changes
                    </span>

                    We will discuss staging here.
                    <br/><br/>
                    To stage a given file, <kbd>{"<"}filename{">"}</kbd>, you will use the command <kbd className="is-command">git add {"<"}filename{">"}</kbd>
                    You can also stage multiple files at once by stringing them together:
                    <kbd className="is-command">git add file1 file2 file3</kbd>
                    Alternatively, you can stage all the current changes by replacing the filename with a period:
                    <kbd className="is-command">git add .</kbd>
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}
                                   clickFunction={this.onNextStep.bind(this)}>
                            Commit my staged files
                </NextStepContainer>
            </div>
        )
    }
}

export default Add;
