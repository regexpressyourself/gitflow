import React             from 'react';
import Terms             from './Terms';
import TermsDescription  from './TermsDescription';
import FlowHeader        from './FlowHeader';
import NextStepContainer from './NextStepContainer';

function Commit(props) {
    // The commit step of the flowchart
    return (
        <div>
            <FlowHeader>
                Git Commit
                <Terms isCode="true" term="git commit" >
                    Commits staged changes and prompts for message
                </Terms>
                <Terms isCode="true" term='git commit -m "message"' >
                    Commits staged changes and add the message: <kbd>message</kbd>
                </Terms>
            </FlowHeader>
            <TermsDescription>
                Once you've staged some changes to be saved, it's time for the second step in saving: commiting.
                <br/><br/>
                Every commit is accompanied by a message describing the changes that were made. Generally, the more often you commit the better, as it allows commits to be more specific.
                <br/><br/>
                Commit your staged changes and add a message all at once by running:
                <kbd className="is-command">
                    git commit -m "Your message here"
                </kbd>
                Alternatively, you can just commit and let git prompt you for a message in your default editor by skipping the message and running only:
                <kbd className="is-command">
                    git commit
                </kbd>
            </TermsDescription>

            <NextStepContainer isActive={props.isActive}
                               clickFunction={() => props.onNextStep("checkoutmaster")}>
                Combine my changes into the master branch
            </NextStepContainer>
        </div>
    )
}

export default Commit;
