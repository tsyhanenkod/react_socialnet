import Posts from "./Posts";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reducer'
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (postText) => {
            dispatch(updateNewPostTextActionCreator(postText))
        },
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps) (Posts);

export default PostsContainer