import React             from 'react';
import Terms             from './Terms';
import TermsDescription  from './TermsDescription';
import FlowHeader        from './FlowHeader';
import NextStepContainer from './NextStepContainer';

function Push(props) {
    /** Push is the last step in the flowchart. 
     *   The next step will be to circle back up to "Checkout"
     **/
    return (
        <div>
            <FlowHeader>
                Git Push
                <Terms isCode="true" term="git push" >
                    Upload your changes to a remote repo on something like Github
                </Terms>
            </FlowHeader>
            <TermsDescription>
                <i> Note: If you haven't set up a remote repository yet, you should do that before pushing. See GitHub's instructions for that <a href="https://help.github.com/articles/adding-a-remote/">on their site here</a></i>
                <br/><br/>
                Almost done! The last step is to upload your changes back online. To do this, we will do what's called a <kbd>push</kbd>. To push your changes, run:

                <kbd className="is-command">
                    git push
                </kbd>

                And that's it! You did it! If you follow this workflow you should be able to work with git without the headache.
            </TermsDescription>
            <NextStepContainer isActive={props.isActive}
                               clickFunction={() => props.onNextStep("complete")}>
                Go back to the beginning of the workflow.
            </NextStepContainer>
        </div>
    )
}

export default Push;
