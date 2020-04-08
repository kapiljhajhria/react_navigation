import React from "react";
import './styles.css'



export default class Contact extends React.Component {

    render() {
        return (
            <div className="ContactPage">
                Contact {this.props.match.params.name}
            </div>
        );
    }
}