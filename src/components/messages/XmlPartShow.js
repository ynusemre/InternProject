import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import * as messageActions from "../../redux/actions/messageActions";
import {connect} from "react-redux";
import {ListGroup, ListGroupItem} from "reactstrap";
import {pd} from "pretty-data";


class XmlPartShow extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                    {

                        this.props.xmlMessageNamePart.map(xmlMessageName =>(
                            <ListGroupItem
                                key={xmlMessageName}
                            >
                                <div className="animationXmlPartShow">
                                    <pre>
                                        {pd.xml(xmlMessageName)}
                                    </pre>
                                </div>
                            </ListGroupItem>
                        ))
                    }

                </ListGroup>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        xmlMessageNamePart : state.xmlPartShowReducer
    }
}



export default connect(mapStateToProps)(XmlPartShow);
