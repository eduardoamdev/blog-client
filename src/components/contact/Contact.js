import React, { Component } from "react";
import Footer from "../footer/Footer";
import emailjs from "emailjs-com";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  serviceId = {};

  templateId = {};

  userId = {};

  componentDidMount() {
    fetch("https://eblog-api.herokuapp.com/api/personal")
      .then((res) => res.json())
      .then(
        (result) => {
          let filteredResult = result.filter((element) => {
            return (
              element.type === "service_id" ||
              element.type === "template_id" ||
              element.type === "user_id"
            );
          });
          filteredResult.map((element) => {
            if (element.type === "service_id") {
              this.serviceId = element.text;
            } else if (element.type === "template_id") {
              this.templateId = element.text;
            } else {
              this.userId = element.text;
            }
          });
          this.setState({
            isLoaded: true,
            info: filteredResult,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  sendEmail(event) {
    event.preventDefault();
    emailjs
      .sendForm(this.serviceId, this.templateId, event.target, this.userId)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  }

  render() {
    return (
      <div className="assistant-container">
        <div className="main-container">
          <div className="info-container">
            <form className="contact-form" onSubmit={this.sendEmail.bind(this)}>
              <label className="normal-text paragraph">
                ¿Qué me quieres contar?
              </label>
              <textarea name="message" rows="10" cols="80" />
              <input type="submit" value="Enviar" className="normal-text" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
