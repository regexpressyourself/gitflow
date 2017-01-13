import React             from 'react';
import { Link, hashHistory, Router  }          from 'react-router';

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
            isActive: true
        });
        this.state.onNextStep("complete");
    }
    render() {
        return (
            <div>
                <FlowHeader isViewed={this.state.isViewed}>
                    Git Push
                    <Terms isCode="true" term="git push" >
                        Upload your changes to a remote repo on something like Github
                    </Terms>
                </FlowHeader>
                <TermsDescription>
                    <i> Note: If you haven't set up a remote repository yet, you should do that before pushing. See GitHub's instructions for that <a href="https://help.github.com/articles/adding-a-remote/">on their site here</a></i>
                    <br/><br/>
                    Almost done! The last step is to upload your changes back online. To do this, we will do what's called a <kbd>push</kbd>. To push your changes, run:
                    <kbd className="is-command">git push</kbd>
                    And that's it! You did it! If you follow this workflow you should be able to work with git without the headache.
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}
                                   clickFunction={this.onNextStep.bind(this)}>
                            Go back to the beginning of the workflow.
                </NextStepContainer>
            </div>
        )
    }
}

export default Push;
