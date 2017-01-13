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
import { NextStepBox, CommandsContainer } from '../styles';

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
            <div>
                <FlowHeader isViewed={this.state.isViewed}>
                    <TitleContainer>
                        <StepTitle>Git Branch</StepTitle>
                    </TitleContainer>
                    <TermsContainer>
                        <Terms isCode="true" term="git branch <new_branch>" >
                            Creates a new branch
                        </Terms>
                        <Terms isCode="true" term="git checkout <new_branch>" >
                            Start working on the new branch
                        </Terms>
                    </TermsContainer>
                </FlowHeader>
                <TermsDescription>
                    Branching can be tough to understand, but is really what git was made to do best. With git, you can have different versions of your project existing simultaneously by branching. Branches can be used to borrow changes, fast forward, rewind, etc. In our example, we will make a branch for our independent work, and discuss best practices to combine that work with our teammates'.
                    <br/><br/>
                    Every git repository starts with one branch: <kbd>master</kbd>. This is the main version of your project, and is typically shared amonst the team. From master, you can create as many branches as you want. I recommend always creating a branch for your work, keeping master as a clean slate. We will talk more about why later.
                    <br/><br/>
                    You can create a branch by running: <kbd className="is-command">git branch {"<"}new_branch{">"}</kbd> <kbd>{"<"}new_branch{">"}</kbd> is the name of your branch (it can even be "new_branch" if you're not feeling very creative).
                    <br/><br/>
                    Finally, you'll want to checkout your new branch. You can do this by running <kbd className="is-command">git checkout {"<"}new_branch{">"}</kbd>
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}>
                    <OneStep>
                        <div style={NextStepBox}>
                            <p>
                                Once you've created a new branch, you can start working just like normal.
                            </p>
                            <button onClick={this.onNextStep} className="btn btn-lg btn-black">Working With Git</button>
                        </div>

                    </OneStep>
                </NextStepContainer>
            </div>
        )
    }
}

export default Branch;
