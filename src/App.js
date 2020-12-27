import React, { Component } from 'react';
import ListContacts from './ListContact';


class App extends Component {
  state = {
    contacts: [
      {
        id: 'richard',
        name: 'Richard Kalehoff',
        handle: '@richardkalehoff'
        // avatarURL: 
      },
      {
        id: 'karen',
        name: 'Karen Isgrigg',
        handle: '@karen_isgrigg'
        // avatarURL: 
      },
      {
        id: 'tyler',
        name: 'Tyler McGinnis',
        handle: '@tylermcginnis'
        // avatarURL: 
      }
    ]

  }
  render() {
    return (
      <div>
        Hello World
        <ListContacts contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
