import React             from 'react';
import Terms             from './Terms';
import TermsDescription  from './TermsDescription';
import FlowHeader        from './FlowHeader';
import NextStepContainer from './NextStepContainer';

class Branch extends React.Component {
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
        this.state.onNextStep("work");

    }
    render() {
        return (
            <div id="checkout-section">
                <FlowHeader isViewed={this.state.isViewed}>
                    Git Checkout
                    <Terms isCode="true" term="git checkout <new_branch>" >
                        Start working on the new branch
                    </Terms>
                </FlowHeader>
                <TermsDescription>
                    Now that you've made a new branch, you'll want to switch to it, or in git lingo "check it out". You can do this by running <kbd className="is-command">git checkout {"<"}new_branch{">"}</kbd>

                    Think of each branch as an independent version of your project. The master branch is typically reserved to only accept changes from other branches. By making a new branch and working in it instead, we are sure not to introduce errors into the master branch.
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}
                                   clickFunction={this.onNextStep.bind(this)}>
                            Stop messing around with this git stuff and do some work
                </NextStepContainer>
            </div>
        )
    }
}

export default Branch;
