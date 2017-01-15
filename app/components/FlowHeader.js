import React            from 'react';
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
            terms:    ""
        }
    }

    componentDidMount() {
        if (Array.isArray(this.props.children)){
            /** If more than just the title is passed, this.props.children
             *  will be an array of children. Element 0 will be the title, and
             *  the rest will be the terms. Terms are collected in the getTerms
             *  method.
             **/
            this.setState({
                title:      this.props.children[0],
                terms:      this.getTerms(),
                termsTitle: <h3>Commands</h3>
            });
        }
        else if (this.props.children) {
            // No terms listed, just get the title
            this.setState({
                title:      this.props.children,
                termsTitle: ""
            });
        }
    }

    getTerms() {
        // Get all the terms listed
        var terms = [];
        for (let i = 1; i < this.props.children.length; i++) {
            terms.push(this.props.children[i]);
        }
        return terms;
    }

    render() {
        return (
            <div className="row flex">
                <div className="col-xs-6" style={StepTitleStyle}>
                        <h2>
                            {this.state.title}
                        </h2>
                </div>
                <div className="col-xs-6" style={TermsBg}>
                    {this.state.termsTitle}
                    {this.state.terms}
                </div>
            </div>
        )
    }
}

export default FlowHeader;
