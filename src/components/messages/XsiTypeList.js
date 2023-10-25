import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";
import {bindActionCreators} from "redux";
import * as messageActions from "../../redux/actions/messageActions";
import {connect} from "react-redux";

class XsiTypeList extends Component {


    selectXsiType = (xsiType) =>{
        this.props.actions.changeXsiType(xsiType)
        this.props.actions.getMessageNames(xsiType)
    }

    render() {
        return (
            <div className="animationXsiTypeList">
                <ListGroup>
                    {
                        this.props.xsiTypes.map(xsiType =>(

                            <ListGroupItem
                                active={xsiType===this.props.currentXsiType}
                                onClick={()=> (this.selectXsiType(xsiType, true))}
                                key={xsiType}
                            >
                                <div className="animationXsiTypeList">
                                        {xsiType}
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
        currentXsiType :state.changeXsiTypeReducer,
        xsiTypes : state.xsiTypeListReducer
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            changeXsiType: bindActionCreators(messageActions.changeXsiType,dispatch),
            getMessageNames: bindActionCreators(messageActions.getMessageNames,dispatch)
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(XsiTypeList);
