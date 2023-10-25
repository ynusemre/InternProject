import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
} from 'reactstrap';

export default class Navi extends React.Component{

    constructor(props) {
        super(props);
        this.toggle=this.toggle.bind(this);
        this.state = {
            isOpen:false
        };
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/" style={{ backgroundColor: 'navajowhite' , color: 'black' }} >INTERNAL MODULES</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.isOpen} navbar>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}


