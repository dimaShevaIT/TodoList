import { connect } from "react-redux";
import PostList from './PostList';
import { getPostsWithSelectedTag } from "../../redux/posts/postsSelector";
import { deletePosts } from "../../redux/posts/postsActions";


const mapStateToProps = state => ({
    items: getPostsWithSelectedTag(state),
});

const mapDispatchToProps = dispatch => ({
    onDeletePosts: id => dispatch(deletePosts(id)),
});



export default connect(mapStateToProps, mapDispatchToProps)(PostList);


