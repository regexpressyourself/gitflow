import React             from 'react';
import Terms             from './Terms';
import TermsDescription  from './TermsDescription';
import FlowHeader        from './FlowHeader';
import NextStepContainer from './NextStepContainer';

function Init(props) {
    // The git init step of the flowchart
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
            <NextStepContainer isActive={props.isActive}
                               clickFunction={() => props.onNextStep("branch")}>
                Add a new branch to my project
            </NextStepContainer>
        </div>
    )
}

export default Init;
