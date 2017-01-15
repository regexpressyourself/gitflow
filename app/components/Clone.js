import React             from 'react';
import Terms             from './Terms';
import TermsDescription  from './TermsDescription';
import FlowHeader        from './FlowHeader';
import NextStepContainer from './NextStepContainer';

function Clone (props) {
    return (
        <div>
            <FlowHeader>
                Git Clone
                <Terms isCode="true" term='git clone <your_repository>' >
        Creates a copy of an existing repository on your computer
                </Terms>
            </FlowHeader>
            <TermsDescription>
                <b>Cloning</b> a repository allows you to start working on an existing project that already has git enabled. Cloning simply creates a sopy of the repository on your computer. You can clone a repository by running
                <kbd className="is-command">
                    git clone {"<"}your_repository{">"}
                </kbd>
                <kbd>{"<"}your_repository{">"}</kbd> is the address of the git repository. Most often, you will clone from a web host such as GitHub.
            </TermsDescription>
            <NextStepContainer isActive={props.isActive}
                               clickFunction={() =>props.onNextStep("branch")}>
                <span>
                    Add a new branch to my project
                </span>
            </NextStepContainer>
        </div>
    )
}

export default Clone;
