import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email:'',
      message: '',
      error: false
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChangeName(event){
    this.setState({name: event.target.value});
  }

  handleChangeEmail(event){
    this.setState({email: event.target.value});
  }

  handleChangeMessage(event) {
    this.setState({message: event.target.value});
  }


  handleSubmit(event) {
   if (this.state.name !== '' && this.state.email !== '' && this.state) {
      axios.post('http://localhost:5000/contact', {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }).then(function(response) {
        if (response.status === 200){
          alert('Message sent!')
        }else{
          alert('An error occurred while trying to send the message, please try again later ! ')
        }
      }).catch(function( error){
        console.log(error)
      })
   }else{
      return alert('All fields are required !')
   }

  }


  render() {
    return (
      <div className="App"> 

        <div id='contact-form' className='container'>
            <fieldset>
                <h1 className="text-center display-1">Contact</h1>
                <div className="form-group">
                  <label className="col-md-3 control-label" >Name</label>
                  <div className="col-md-9" >
                    <input  id="name" name="name" type="text"  value={this.state.name} onChange={this.handleChangeName}  placeholder="Your name" className="form-control"/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-3 control-label"  >Your E-mail</label>
                  <div className="col-md-9">
                    <input id="email" name="email" type="text" value={this.state.email}  onChange={this.handleChangeEmail} placeholder="Your email" className="form-control"/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-3 control-label"  >Your message</label>
                  <div className="col-md-9">
                    <textarea className="form-control" value={this.state.message} onChange={this.handleChangeMessage} id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-md-12 text-center">
                    <button className="btn btn-primary btn-lg" onClick={this.handleSubmit}>Submit</button>
                  </div>
                </div>
            </fieldset>
        </div>
      </div>
    );
  }
}

export default App;
