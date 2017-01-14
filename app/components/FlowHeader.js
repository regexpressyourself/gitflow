import React            from 'react';
import TitleContainer   from './TitleContainer';
import TermsContainer   from './TermsContainer';
import {StepTitleStyle, // Style for the commands section
        TermsBg}        from '../styles'; // div for location of commands section

class FlowHeader extends React.Component {
    /**
     * FlowHeader contains the title and commands for each
     * flowchart item. They are positioned on along a vertical
     * line.
     **/
    constructor(props) {
        super(props);
        this.state = {
            title:    "",
            terms:    "",
            isViewed: false
        }
    }
    componentDidMount() {
        if (Array.isArray(this.props.children)){
            if (this.props.children.length === 2) {
                // Both a title and 1 command was passed
                this.setState({
                    title: this.props.children[0],
                    terms: <TermsContainer>
    {this.props.children[1]}
                    </TermsContainer>,
                    isViewed: this.props.isViewed
                });
            }
            else if (this.props.children.length === 3) {
                // Both a title and 2 commands were passed
                this.setState({
                    title: this.props.children[0],
                    terms: <TermsContainer>
                        { this.props.children[1] } +
                        { this.props.children[2] }
                    </TermsContainer>,
                    isViewed: this.props.isViewed
                });
            }
            else {
                // only 0-2 commands allowed per step
                console.log("Error: too many commands entered");
            }
        }
        else if (this.props.children) {
            // No "Commands" section
            this.setState({
                title: this.props.children,
                isViewed: this.props.isViewed
            });
        }
    }
    render() {
        return (
            <div className="row flex">
                <div className="col-xs-6" style={StepTitleStyle}>
                    <TitleContainer>
                        <h2>
                            {this.state.title}
                        </h2>
                    </TitleContainer>
                </div>

                <div className="col-xs-6" style={TermsBg}>
                        {this.state.terms}
                </div>
            </div>
        )
    }
}

export default FlowHeader;
