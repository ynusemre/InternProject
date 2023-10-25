import React, {Component} from 'react';
import { ListGroup, ListGroupItem} from "reactstrap";
import {bindActionCreators} from "redux";
import * as messageActions from "../../redux/actions/messageActions";
import {connect} from "react-redux";

import * as structureActions from "../../redux/actions/structureActions";

class MessageNameList extends Component {

    selectMessageName = (messageName) =>{
        this.props.actions.changeMessageName(messageName)
        this.props.actions.getXmlMessageNamePart(messageName)
        this.props.actions.getStructure(messageName)
    }

    render() {
        return (
            <div className="animationMessageNameList">
                <ListGroup>
                    {
                        this.props.messageNames.map(messageName =>(
                            <ListGroupItem
                                active={messageName===this.props.currentMessageName}
                                onClick={()=>this.selectMessageName(messageName)}
                                key={messageName}
                            >
                                <div className="animationMessageNameList">
                                    {messageName}
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
        currentMessageName :state.changeMessageNameReducer,
        messageNames : state.messageNameListReducer
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            changeMessageName: bindActionCreators(messageActions.changeMessageName,dispatch),
            getXmlMessageNamePart: bindActionCreators(messageActions.getXmlMessageNamePart,dispatch),
            getStructure: bindActionCreators(structureActions.getStructure,dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MessageNameList);
