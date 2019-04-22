import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormField from "../../UI/formfields";
import { validate } from "../../UI/misc";
import { setTimeout } from "timers";
import { firebasePromotions } from "../../../FirebaseConfig";
class Enroll extends Component {
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
  resetFormSuccess = (type) => {
    const newFormData = {
        ...this.state.formdata
    }
    for(let key in newFormData){
        newFormData[key].value = "";
        newFormData[key].valid = false;
        newFormData[key].validationMessage = "";
    }
    this.setState({
        formError:false,
        formdata:newFormData,
        formSuccess: type ? "Congratulations":"Already on the database"
    });
    this.successMessage();
  }
  successMessage = () => {
      setTimeout(() => {
          this.setState({
            formSuccess:""
          })
      },2000)
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
            //console.log(dataToSubmit);

            firebasePromotions.orderByChild("email").equalTo(dataToSubmit.email).once("value").then((snapshot) => {
                //console.log(snapshot.val())
                if(snapshot.val() === null){
                    firebasePromotions.push(dataToSubmit);
                    this.resetFormSuccess(true)
                }else{
                    this.resetFormSuccess(false)
                }
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
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={ (event) => this.submitForm(event)}>
            <div className="enroll_title">Enter your email</div>
            <div className="enroll_input">
              <FormField 
                id={"email"} 
                formdata={this.state.formdata.email} 
                change={(element) => this.updateForm(element)}
              />
              { this.state.formError ? 
                <div className="error_label">Something is wrong, try again.</div>
                :null
              }
              <div className="success_label">{ this.state.formSuccess }</div>
              <button onClick = { (event) => this.submitForm(event) }>Enroll</button>
              <div className="enroll_discl">
              Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 20-metre (22-yard) pitch with a wicket at each end, each comprising two bails balanced on three stumps.
              </div>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
