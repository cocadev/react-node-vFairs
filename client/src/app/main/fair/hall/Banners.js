import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as base from 'app/env';

const api = base.base_url;

class Banners extends Component {
  state = {
    banners: []
  }

  async getInitialData() {
    var data = [];
    // eslint-disable-next-line
    await fetch(api + 'banners/get').then(res => res.json()).then(result => { result.map(row => {
      data.push({
        id: row.id,
        cls: 'banner' + row.position + ' banner',
        lnk: row.link,
        src: row.base64
      })
    })})

    await this.setState({ banners: data });
  }

  componentDidMount() {
    this.getInitialData();
  }

  render() {
    var banner = this.state.banners.map(line => {
      return (
        <Link key={line.id} className={line.cls} to={line.lnk}><img src={line.src} alt="Banner" /></Link>
      );
    });

    return (
      <div>
        {banner && banner}
      </div>
    );
  }
}

export default Banners;
