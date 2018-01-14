import React, { Component } from 'react';
import * as actions from '../action';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import './UserShow.css'


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
    close() {
        this.props.history.goBack();
    }

    render(){

       
        return (
            <div className="container">
            <div className="loginForm">
            <div>
                
            <div>
                    <h2>
                     First name:
                    </h2>
                    </div>
                
                <div>
                    <textarea placeholder={this.state.firstname} className="textarea" onChange={event => this.setState({ firstname: event.target.value })} />



                </div>
                <div>
                    <h2>
                    Last name:
                    </h2>
                    </div>
                <div>
                    <textarea placeholder={this.state.lastname} className="textarea" onChange={event => this.setState({ lastname: event.target.value })}/>
                   
                </div>
                <div>
                    <h2>
                    Username:
                    </h2>
                    </div>
                <div>
                    <textarea placeholder={this.state.username} className="textarea" onChange={event => this.setState({ username: event.target.value })} />
                   
                </div>
                <div>
                    <h2>
                    Email:
                    </h2>
                    </div>
                <div>
                    <textarea placeholder={this.state.email} className="textarea" onChange={event => this.setState({ email: event.target.value })} />
                   
                </div>
                <div>
                    <h2>
                    Password:
                    </h2>
                    </div>
                <div>
                    <textarea placeholder={this.state.password} className="textarea" onChange={event => this.setState({ password: event.target.value })} />
                   
                </div>
                
        <center>
                    <Button className="btn btn-danger" onClick={() => this.clickSave()}>
                        Save
        </Button> 
        <Button className="btn btn-info" onClick={this.close.bind(this)}>Close</Button>
</center>
            </div >
            </div></div>
        );
    }
}

function mapStateToProps(state) {
    return { user: state.user };
}



export default connect(mapStateToProps, actions)(UserShow);