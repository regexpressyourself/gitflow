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
                        <Terms term="Branch" >
                            A working copy of a repository, isolated from the other working copies
                        </Terms>
                        <Terms isCode="true" term="git branch <branch_name>" >
                            Creates a new branch
                        </Terms>
                    </TermsContainer>
                </FlowHeader>
                <TermsDescription>
                    Git's main strength is letting people work together on one project without worrying about overwriting each others' progress. This is done primarily through branches. Branches are like different versions of the project, independent of one another.
                    <br/><br/>
                    For example, if I am using git to write an article with some friends, I might create a new branch to add the section I am in charge of. While I am working in my branch, I am isolated from the work my friends are doing, and vice versa. There is no risk of them deleting my new section, and I am safe from deleting theirs. We will talk about how to combine our work later.
                    <br/><br/>
                    Every git repository starts with one branch: <kbd>master</kbd>. From master, you can create as many branches as you want. I recommend always creating a branch for your work, keeping master as a clean slate. We will talk more about why later.
                    <br/><br/>
                    You can create a branch by running: <kbd>git branch new_branch</kbd> where <kbd>new_branch</kbd> is the name of your branch (it can even be "new_branch" if you're not feeling very creative).
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
