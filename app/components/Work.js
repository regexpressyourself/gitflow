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
        this.state.onNextStep("add");
    }
    render() {
        return (
            <div>
                <FlowHeader isViewed={this.state.isViewed}>
                    <TitleContainer>
                        <StepTitle>Working With Git</StepTitle>
                    </TitleContainer>
                    <TermsContainer>
                        <Terms isCode="true" term='git status' >
                            Check and see what git sees
                        </Terms>
                    </TermsContainer>
                </FlowHeader>
                <TermsDescription>
                    If you've made it this far, you're doing great. So far, you've created a new repository on your computer, and set it up to do some work. At this point, you can go about working just like normal - so get to it! Check back here once you're at a stopping point (or just create a new file if you're just doing a trial run).
                    <br/><br/>
                    ...
                    <br/><br/>
                    Back? Great. Let's take a look at what you changed. Run <kbd>git status</kbd> to see all the changes that git has noticed. Git will keep track of any time you change, add, or delete a file, and you can always check by running <kbd>git status</kbd>.
                    <br/><br/>
                    Now that we have some changes, let's save them in git.
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}>
                    <OneStep>
                        <div style={NextStepBox}>
                            <p>
                                After making your changes, you will want to save them. Just like you can save files onto your computer, you can also save them in git by "adding" them. See more here:
                            </p>
                            <button onClick={this.onNextStep} className="btn btn-lg btn-black">Adding Changes</button>
                        </div>

                    </OneStep>
                </NextStepContainer>
            </div>
        )
    }
}

export default Work;
