import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import TakasCodeList from "../takasCodes/TakasCodeList";
import MessageNameList from "../messages/MessageNameList";
import XsiTypeList from "../messages/XsiTypeList";
import XmlPartShow from "../messages/XmlPartShow";
import StructureList from "../structures/StructureList";



class Dashboard extends Component {


    render() {
        return (
            <div>
                <Row>
                    <Col xs="2">
                        <TakasCodeList/>
                    </Col>
                    <Col xs="2">
                        <XsiTypeList/>
                    </Col>
                    <Col xs="1">
                        <MessageNameList  />
                    </Col>
                    <Col xs="7">
                        <XmlPartShow/>
                        <StructureList/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;
