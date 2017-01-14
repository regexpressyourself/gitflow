import React             from 'react';
import Terms             from './Terms';
import TermsDescription  from './TermsDescription';
import FlowHeader        from './FlowHeader';
import NextStepContainer from './NextStepContainer';

class Init extends React.Component {
    // The git init step of the flowchart

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
            isActive:   this.props.isActive
        });
    }

    onNextStep() {
        this.setState({
            isActive: false
        });
        this.state.onNextStep("branch");
    }

    render() {
        return (
            <div>
                <FlowHeader>
                    Git Init
                    <Terms isCode="true" term="git init" >
                        Creates .git folder and enables git for your project
                    </Terms>
                </FlowHeader>
                <TermsDescription>
                    You can bootstrap a new repository by using the command:
                    <kbd className="is-command">
                        git init
                    </kbd>
                    Make sure to run the command in the top folder of your project. This will create a .git folder for you, which will store the different versions of your files in git's own way. Running <kbd>git init</kbd> is all that's needed to start using git.
                </TermsDescription>
                <NextStepContainer isActive={this.state.isActive}
                                   clickFunction={this.onNextStep.bind(this)}>
                                Add a new branch to my project
                </NextStepContainer>
            </div>
        )
    }
}

export default Init;
