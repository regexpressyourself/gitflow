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

class Work extends React.Component {
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
        this.state.onNextStep("add");
    }
    render() {
        return (
            <div>
                <FlowHeader isViewed={this.state.isViewed}>
                    Working With Git
                    <Terms isCode="true" term='git status' >
                        Check and see what git sees
                        </Terms>
                </FlowHeader>
                <TermsDescription>
                    If you've made it this far, you're doing great. So far, you've created a new repository on your computer, and set it up to do some work. At this point, you can go about working just like normal - so get to it! Check back here once you're at a stopping point (or just create a new file if you're just doing a trial run).
                    <br/><br/>
                    ...
                    <br/><br/>
                    Back? Great. Let's take a look at what you changed. Run: <kbd className="is-command">git status</kbd> to see all the changes that git has noticed. Git will keep track of any time you change, add, or delete a file, and you can always check by running <kbd>git status</kbd>.
                    <br/><br/>
                    Now that we have some changes, let's save them in git.
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}
                                   clickFunction={this.onNextStep.bind(this)}>
                            Tell git to save what I've changed
                </NextStepContainer>
            </div>
        )
    }
}

export default Work;
