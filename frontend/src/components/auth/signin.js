import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signin extends Component{

constructor(props){
    super(props);
    this.state= {};
    this.onSubmit = this.onSubmit.bind(this);
}

    renderField(field){
        return(
        <div className="form-group">
            <label>{field.label}</label>
            <input
                className="form-control"
                type="text"
                {...field.input}
                />
           
        </div>
        );
    }

    onSubmit(e){
        e.preventDefault();
        let {login,password} = this.state;
        //this.props.login(login,password);
        console.log({login,password});
        this.props.singinUser({login,password});
        this.setState({
            login: '',
            password: ''
        })
    }

   


    render(){
        let {login,password} = this.state;
      

        return(
            <form onSubmit={this.onSubmit}>
                
                <Field
                    label="Login:"
                    name="login"
                    component={this.renderField}
                    onChange={e => this.setState({login: e.target.value})}
                />
                <Field
                    label="Password:"
                    name="password"
                    component={this.renderField}
                    onChange={e => this.setState({password: e.target.value})}
                />
                <button action="submit" className="btn btn-primary"> Sign In </button>
            </form>

        );
    }
}


function mapStateToProps(state) {
    return { form: state.form };
}

export default reduxForm({
    form: 'signin'
}, mapStateToProps, actions)(Signin);
