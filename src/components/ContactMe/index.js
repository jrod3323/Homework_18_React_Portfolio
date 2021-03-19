import React from "react" ;
import "./style.css";

function ContactMe() {
    return (
        <div id="contactMe" className="row min-vh-100 justify-content-center align-items-center">
            <div class="card w-75 min-vh-50 contactMeCardContainer justify-content-center align-items-center my-5">
                <div class="card-body my-5 contactMeCard w-50">
                  <h1 class="card-title">Lets Talk About Your Goals</h1>
                  <form action="https://formspree.io/f/xoqpnglg" method="POST" class="d-flex flex-column">
                    <label class="d-flex flex-column">
                      Your Name:
                      <input type="text" name="name" />
                    </label>
                    <label class="d-flex flex-column">
                    Your email Address:
                      <input type="text" name="_replyto"/>
                    </label>
                    <label class="d-flex flex-column">
                      How Can I Help You:
                      <textarea rows="4" name="message" ></textarea>
                    </label>
                    <div class="justify-content-center align-items-center">
                      <button type="submit" class="btn btn-primary btn-lg formSubmit">Send</button>
                    </div> 
                </form>
                <div class="my-3">
                  <h3 class="contact">Or Contact Me Directly</h3>
                  <h5 class= "contactInfo">Email: jrod3323@gmail.com</h5>
                  <h5 class= "contactInfo">Phone: 512-817-3516</h5>
                </div>
              
                </div>
              </div>

        </div>
        );
  }
  
  export default ContactMe;