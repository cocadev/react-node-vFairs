import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import * as base from 'app/env';

const api = base.base_url;

class ChatPanel extends Component {
  state = {
    avatars: []
  }

  async getInitialData() {
    var data = [];
    // eslint-disable-next-line
    await fetch(api + 'representatives/get').then(res => res.json()).then(result => { result.map(row => {
      data.push({
        id: row.id,
        logo: row.logo
      })
    })})

    await this.setState({ avatars: data });
  }

  componentDidMount() {
    this.getInitialData();
  }

  render() {
    var avatar = this.state.avatars.map(line => {
      return (
        <Avatar key={line.id} className="avatar my-12 rep-hover" src={line.logo} />
      );
    });

    return (
      <div className="flex flex-col w-auto chat-panel px-12" style={{ backgroundColor: '#505050' }}>
        {avatar && avatar}
      </div>
    );
  }
}

export default ChatPanel;
