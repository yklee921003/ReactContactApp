import React, { Component } from 'react';
import ListContacts from './ListContact';



class App extends Component {
  state = {
    contacts: [
      {
        id: 'tyler',
        name: 'Tyler McGinnis',
        handle: '@tylermcginnis',
        avatarURL: 'http://localhost:5001/tyler.jpg'
      },
      {
        id: 'karen',
        name: 'Karen Isgrigg',
        handle: '@karen_isgrigg',
        avatarURL: 'http://localhost:5001/karen.jpg'
      },
      {
        id: 'richard',
        name: 'Richard Kalehoff',
        handle: '@richardkalehoff',
        avatarURL: 'http://localhost:5001/richard.jpg'
      },
    ]
  }
  removeContact= (contact) => {
    this.setState((currentState) =>({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id 
      })
    }))
  }


  render() {
    return (
      <div>
       
        <ListContacts 
          deleteContact = {this.removeContact}
          contacts={this.state.contacts}
          
        />
        
      </div>
    );
  }
}

export default App;
