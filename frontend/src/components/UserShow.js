import React, { Component } from 'react';
import * as actions from '../action';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';


class UserShow extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id:'',
            firstname: "",
            lastname: "",
            username:"",
            password:"",
            email:""
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            id:nextProps.user.id,
            firstname:nextProps.user.firstname,
            lastname:nextProps.user.lastname,
            username: nextProps.user.username,
            password: nextProps.user.password,
            email:nextProps.user.email,
            


        })
    }

    componentWillMount()
    {        

        this.props.getMe();
    }

    clickSave() {
        console.log(this.props.history)
        
        this.props.editUser(this.state.id, this.props.history, {

            firstname:this.state.firstname,
            lastname:this.state.lastname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        });

    }

    render(){

       
        return (
            <div>
                
                <div>
                    <textarea placeholder={this.state.firstname} onChange={event => this.setState({ firstname: event.target.value })} />



                </div>
                <div>
                    <textarea placeholder={this.state.lastname} onChange={event => this.setState({ lastname: event.target.value })}/>
                   
                </div>
                <div>
                    <textarea placeholder={this.state.username} onChange={event => this.setState({ username: event.target.value })} />
                   
                </div>
               
                <div>
                    <textarea placeholder={this.state.email} onChange={event => this.setState({ email: event.target.value })} />
                   
                </div>
                <div>
                    <textarea placeholder={this.state.password} onChange={event => this.setState({ password: event.target.value })} />
                   
                </div>
                <Button onClick={() => this.clickSave()}>
                        Save
        </Button>
            </div >
        );
    }
}

function mapStateToProps(state) {
    return { user: state.user };
}



export default connect(mapStateToProps, actions)(UserShow);