import React             from 'react';
import Terms             from './Terms';
import TermsDescription  from './TermsDescription';
import FlowHeader        from './FlowHeader';
import NextStepContainer from './NextStepContainer';

class Merge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            isViewed: true,
            reMerge: false
        }
        this.onNextStep = this.onNextStep.bind(this);
    }
    componentDidMount() {
        this.setState({
            onNextStep: this.props.onNextStep,
            isActive: this.props.isActive
        });
    }
    onNextStep(nextComponent) {
        this.setState({
            isActive: false
        });
        this.state.onNextStep(nextComponent);
    }
    render() {
        return (
            <div>
                <FlowHeader isViewed={this.state.isViewed}>
                    Git Merge
                    <Terms isCode="true" term="git merge <from_branch> <to_branch>" >
                        Merges changes from <kbd>{"<from_branch>"}</kbd> into <kbd>{"<to_branch>"}</kbd>
                    </Terms>
                </FlowHeader>
                <TermsDescription>
                    You can combine changes from one branch into another by merging.
                    <br/><br/>
                    Merging can result in errors if git doesn't know what change to add where, but typically works well when the team is using git in the same way.
                    <br/><br/>
                    If you forgot the name of your branch, you can see a list of branches by running:
                    <kbd className="is-command">git branch</kbd>
                    To merge <kbd>{"<your_branch>"}</kbd> into master, run:
                        <kbd className="is-command">git merge {"<your_branch>"} master</kbd>
                            Did it work?
                            <br/><br/>
                            If yes- awesome! Move on to upload your changes to the master branch back online.
                            <br/><br/>
                            If you got an error complaining about a conflict, don't worry! Let's try to fix it.
                </TermsDescription>
                <NextStepContainer isTwoStep={true}
                                   isActive={this.state.isActive}
                                   leftFunction={() => this.onNextStep("push")}
                                   rightFunction={() => this.onNextStep("diff")}>
                    <span>
                            It Worked! Upload my new changes online.
                    </span>
                    <span>
                            I got an error about a conflict...
                    </span>
                </NextStepContainer>
            </div>
        )
    }
}

export default Merge;
