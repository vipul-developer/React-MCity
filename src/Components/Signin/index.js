import React, { Component } from 'react';
import { firebase } from "../../FirebaseConfig";
import FormField from "../UI/formfields";
import { validate } from "../UI/misc";
export default class SignIn extends Component {
    state = {
        formError: false,
        formSuccess: "",
        formdata: {
          email: {
            element: "input",
            value: "",
            config: {
              name: "email_input",
              type: "email",
              placeholder: "Enter your email"
            },
            validation: {
              required: true,
              email: true
            },
            valid: false,
            validationMessage: ""
          },
          password: {
            element: "input",
            value: "",
            config: {
              name: "password_input",
              type: "password",
              placeholder: "Enter your password"
            },
            validation: {
              required: true,
            },
            valid: false,
            validationMessage: ""
          }
        }
      }
    updateForm = (element) => {
        const newFormData = {
            ...this.state.formdata
        }
        const newElement = {...newFormData[element.id]}
        newElement.value = element.event.target.value;
        let valiData = validate(newElement)
        newElement.valid = valiData[0];
        newElement.validationMessage = valiData[1]
        newFormData[element.id] = newElement;
      //   console.log(newFormData);
        this.setState({
            formError: false,
            formdata: newFormData
        })
    }
    submitForm = (event) => {
        event.preventDefault();
        let dataToSubmit = {};
        let formIsValid = true;
        for(let key in this.state.formdata){
            dataToSubmit[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }
        if(formIsValid){
            // console.log(dataToSubmit);
            firebase.auth().signInWithEmailAndPassword(
                dataToSubmit.email,
                dataToSubmit.password
            ).then(() => {
                // console.log("user is auth");
                this.props.history.push("/dashboard");
            }).catch(error =>{
                this.setState({
                    formError: true
                })
            })
            //this.resetFormSuccess()
        }else{
            this.setState({
                formError: true
            })
        }
        
  }
  render() {
    return (
      <div className="container">
          <div className="signin_wrapper" style={{margin:"100px"}}>
            <form onSubmit={(event) => this.submitForm(event)}>
                <h2>Please Login</h2>
                <FormField 
                    id={"email"} 
                    formdata={this.state.formdata.email} 
                    change={(element) => this.updateForm(element)}
                />
                <FormField 
                    id={"password"} 
                    formdata={this.state.formdata.password} 
                    change={(element) => this.updateForm(element)}
                />
                { this.state.formError ? 
                <div    className="error_label">Something is wrong, try again.</div>
                :null
                }
                <button onClick = { (event) => this.submitForm(event) }>Login</button>
            </form>
          </div>
      </div>
    )
  }
}
