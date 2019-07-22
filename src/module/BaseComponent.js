import React, { Component } from "react";



class BasicComponent extends Component {

    handleBackButton = () => {
        this.props.navigation.goBack(null);
    }

}

export default BasicComponent