import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import * as messageActions from "../../redux/actions/messageActions";
import {connect} from "react-redux";
import * as takasCodeActions from "../../redux/actions/takasCodeActions";
import {Form, FormGroup, Input, ListGroup, ListGroupItem} from "reactstrap";


class TakasCodeList extends Component {

    componentDidMount() {
        this.props.actions.getTakasCodes()
    }

    selectTakasCode = (takasCode) =>{
        this.props.actions.changeTakasCode(takasCode)
        this.props.actions.getXsiTypes()
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Input
                            placeholder="Select A Takas Code"
                            onChange={this.onChangeHandler}
                        />

                        <ListGroup>
                            {
                                this.props.takasCodes.map(takasCode =>(
                                    <ListGroupItem
                                        active={takasCode===this.props.currentTakasCode}
                                        onClick={()=>this.selectTakasCode(takasCode)}
                                    >
                                        {takasCode}
                                    </ListGroupItem>
                                ))
                            }

                        </ListGroup>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        currentTakasCode :state.changeTakasCodeReducer,
        takasCodes : state.takasCodeListReducer,
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            getXsiTypes : bindActionCreators(messageActions.getXsiTypes,dispatch),
            changeTakasCode: bindActionCreators(takasCodeActions.changeTakasCode,dispatch),
            getTakasCodes: bindActionCreators(takasCodeActions.getTakasCodes,dispatch),

        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TakasCodeList);
