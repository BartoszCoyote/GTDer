import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../action';
import { Link } from 'react-router-dom';


class Signin extends Component{


renderField(field){
    const { meta: { touched, error} } = field;
    const className= `form-group ${touched && error ? 'has-error' : ''}`;
    
    return(
    <div className={className}>
        <label>{field.label}</label>
            <input
                className="form-control"
                type="text"
                {...field.input}
                />
                <div className="text-help">
                {touched ? error : ''}
                </div>
    </div>
    );
}
onSubmit(values){
    console.log(values);
    console.log(this.props);
    this.props.actions.signinUser(values,this.props.history);
    
}

render(){

    const { handleSubmit } = this.props; 
       return(
          
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
                label="Username:"
                name="username"
                component={this.renderField}
                //onChange={e => this.setState({username: e.target.value})}
            />
            <Field
                label="Password:"
                name="password"
                component={this.renderField}
                //onChange={e => this.setState({password: e.target.value})}
            />
            <button type="submit" className="btn btn-primary"> Sign In </button>
            <Link to="/" className="btn btn-danger"> Cancel </Link>

        </form>
       
       

    );
}
}

function validate(values){
    const errors = {};
    if(!values.username){
        errors.username = "Enter Username";
    }
    if(!values.password){
        errors.password = "Enter Password";
    }

    return errors;
}



function mapStateToProps(state) {
    return { 
        form: state.form,
        errorMessage: state.auth.error
};
}

const mapDispatchToProps = (dispatch)=> {
    return {
        actions : bindActionCreators(actions , dispatch)
    };
    }


Signin = connect(
    mapStateToProps,
    mapDispatchToProps 
)(Signin);
    
export default reduxForm({
    validate,
form: 'signin'
})(Signin);