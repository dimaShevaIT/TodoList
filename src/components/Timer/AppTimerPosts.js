import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimerContainer from './TimerContainer';
import StepSelector from './StepSelector/StepSelector';
import TagFilter from '../TagFilter/TagFilter';
import PostListContainer from '../PostList/PostListContainer';
// import { fetchPosts } from '../../redux/posts/postsActions';
// import posts from '../PostList/posts.json';
import TotalLikes from '../PostList/TotalLikes';
import { fetchPosts } from '../../redux/posts/postsOperations';


const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    paddingTop: 48,
}

class AppTimerPosts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        return(
            <div style={containerStyle}>
            <TimerContainer />
            <StepSelector />
            <hr style={{ width: '100%' }} />
            <TagFilter /> 
            <PostListContainer />   
            <TotalLikes />
            </div>
        );
    };
};


const mapDispatchToProps = ({
    fetchPosts,
});

export default connect(null, mapDispatchToProps)(AppTimerPosts);
