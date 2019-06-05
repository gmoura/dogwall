import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Menu from '../components/Menu';
import PhotoGrid from '../components/PhotoGrid';
import ImagePreview from '../components/PhotoGrid/ImagePreview';

import loadFeed from '../actions/feed';
import { loadImagePreview, closeImagePreview } from '../actions/image_preview';

class Feed extends Component {
  componentDidMount() {
    const { loadFeed, auth } = this.props;
    const {
      user: { token }
    } = auth;
    loadFeed(token);
  }

  render() {
    const {
      feed,
      loadFeed,
      auth,
      loadImagePreview,
      closeImagePreview,
      imagePreview
    } = this.props;
    return (
      <section>
        <Menu auth={auth} loadFeed={loadFeed} />
        {feed.list && (
          <PhotoGrid data={feed.list} loadImagePreview={loadImagePreview} />
        )}
        <ImagePreview
          image={imagePreview}
          closeImagePreview={closeImagePreview}
        />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  feed: state.feed,
  auth: state.auth,
  imagePreview: state.imagePreview
});

const mapActionToDispatch = dispatch =>
  bindActionCreators(
    {
      loadFeed,
      loadImagePreview,
      closeImagePreview
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapActionToDispatch
)(Feed);
