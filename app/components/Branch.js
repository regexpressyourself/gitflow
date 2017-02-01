import React             from 'react';
import Terms             from './Terms';
import TermsDescription  from './TermsDescription';
import FlowHeader        from './FlowHeader';
import NextStepContainer from './NextStepContainer';

function Branch(props) {
    // Branch is the branch step in the flowchart
    return (
        <div>
            <FlowHeader>
                Git Branch
                <Terms isCode="true" term="git branch new_branch" >
                    Creates a new branch
                </Terms>
            </FlowHeader>
            <TermsDescription>
                Branching can be tough to understand, but is really what git was made to do best. With git, you can have different versions of your project existing simultaneously by branching. Branches can be used to borrow changes, fast forward, rewind, etc. In our example, we will make a branch for our independent work, and discuss best practices to combine that work with our teammates'.
                <br/><br/>
                Every git repository starts with one branch: <kbd>master</kbd>. This is the main version of your project, and is typically shared amonst the team. From master, you can create as many branches as you want. I recommend always creating a branch for your work, keeping master as a clean slate. We will talk more about why later.
                <br/><br/>
                You can create a branch by running:
                <kbd className="is-command">
                    git branch new_branch
                </kbd>
                <kbd>new_branch</kbd> is the name of your branch (it can even be "new_branch" if you're not feeling very creative).
            </TermsDescription>
            <NextStepContainer isActive={props.isActive}
                               clickFunction={() => props.onNextStep("checkout")}>
                Checkout and start using your my branch
            </NextStepContainer>
        </div>
    )
}

export default Branch;
