import React, { Component } from "react";

import MainLayout from "./components/MainLayout";
import { BrowserRouter } from "react-router-dom";
class RootComponent extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <MainLayout />
                </BrowserRouter>
            </div>
        );
    }

}

export default RootComponent;