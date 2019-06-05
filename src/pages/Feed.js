import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Menu from '../components/Menu';

import loadFeed from '../actions/feed';

class Feed extends Component {
  componentDidMount() {
    const { loadFeed, auth } = this.props;
    const {
      user: { token }
    } = auth;
    loadFeed(token);
  }

  render() {
    const { feed, loadFeed, auth } = this.props;
    return (
      <section>
        <Menu auth={auth} loadFeed={loadFeed} />
        {feed.list &&
          feed.list.map(item => <img key={item} src={item} alt="dog" />)}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  feed: state.feed,
  auth: state.auth
});

const mapActionToDispatch = dispatch =>
  bindActionCreators(
    {
      loadFeed
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapActionToDispatch
)(Feed);
