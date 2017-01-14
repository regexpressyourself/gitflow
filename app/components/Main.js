import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../styles/main.css';

class Main extends React.Component {
    // Main wraps everything on the site. See routes.js for implementation.
    render() {
        return (
            <div className='container main-container'>
                <div className="col-sm-12 text-center" >
                    <ReactCSSTransitionGroup
                        transitionName="appear"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500} >

                        {React.cloneElement(this.props.children,
                                            {key: this.props.location.pathname}
                         )}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}

export default Main;
