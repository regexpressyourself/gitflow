import React             from 'react';
import Terms             from './Terms';
import TermsDescription  from './TermsDescription';
import FlowHeader        from './FlowHeader';
import NextStepContainer from './NextStepContainer';

function Add(props) {
    /** Add component handles the "git add" step
     **/
    return (
        <div>
            <FlowHeader>
                Git Add
                <Terms isCode="true" term="git add filename" >
                    Adds the changes in a given file to git
                </Terms>
            </FlowHeader>

            <TermsDescription>
                After you've made changes, you will want to save them. Saving in git is a two step process:
                <span className="left-margin">
                    1. <kbd>Stage</kbd> changes to be saved
                    <br/>
                    2. <kbd>Commit</kbd>, or save those changes
                </span>

                We will discuss staging here.
                <br/><br/>
                To stage a given file, <kbd>filename</kbd>, you will use the command <kbd className="is-command">git add filename</kbd>
                You can also stage multiple files at once by stringing them together:
                <kbd className="is-command">git add file1 file2 file3</kbd>
                Alternatively, you can stage all the current changes by replacing the filename with a period:
                <kbd className="is-command">git add .</kbd>
            </TermsDescription>

            <NextStepContainer isActive={props.isActive}
                               clickFunction={() => props.onNextStep("commit")}>
                Commit my staged files
            </NextStepContainer>
        </div>
    )
}

export default Add;
