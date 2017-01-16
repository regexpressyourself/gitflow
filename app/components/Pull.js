import React             from 'react';
import Terms             from './Terms';
import TermsDescription  from './TermsDescription';
import FlowHeader        from './FlowHeader';
import NextStepContainer from './NextStepContainer';

function Pull(props) {
    // Pull step in the flowchart
    return (
        <div>
            <FlowHeader>
                Git Pull
                <Terms isCode="true" term="git pull">
                    Retrieve changes from an online source.
                </Terms>
            </FlowHeader>
            <TermsDescription>
                <i> Note: If you haven't set up a remote repository yet, this step likely won't apply to you.</i>
                <br/><br/>
                Before we combine our changes from our branch into master, we should make sure we have the most current version of master. It's important to do this before combining our changes, as it will save overwriting any changes that might have been made by someone else.
                <br/> <br/>
                Pulling changes will update your branch from any changes from a remote version of the branch (like one on GitHub). Pull a remote branch by running:
                <kbd className="is-command">
                    git pull
                </kbd>
            </TermsDescription>
            <NextStepContainer isActive={props.isActive}
                               clickFunction={() => props.onNextStep("merge")}>
                Add my branch's changes to the master branch
            </NextStepContainer>
        </div>
    )
}

export default Pull;
