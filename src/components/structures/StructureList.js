import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as structureActions from "../../redux/actions/structureActions";
import {ListGroup, ListGroupItem} from "reactstrap";
import {pd} from "pretty-data";
import "../root/App.css";

class StructureList extends Component {



    render() {
        return (
            <div>
                <ListGroup>>
                    {
                        this.props.structures.map(structure =>(
                            <ListGroupItem
                                key={structure}
                            >
                                <div className="animationStructureList">
                                    <pre>
                                        {pd.xml(structure)}
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
        structures : state.structureReducer
    }
}

export default connect(mapStateToProps)(StructureList);
