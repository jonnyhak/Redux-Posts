
import { FETCH_POSTS, NEW_POST } from './types'

export const fetchPosts = () => dispatch => {
    console.log('fetching')
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            return response.json()
        })
        .then((postsArr) => {
            dispatch({
                type: FETCH_POSTS, postsArr,
                posts: postsArr
            })
        })
    
}
export const createPost = (postObj) => dispatch => {
    console.log('action called')
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(postObj)
        })
            .then(response => {
                return response.json()
            })
            .then((post) => {
            dispatch({
                type: NEW_POST, 
                posts: post
            })
        })
        
        // this.setState({
        //     title: '',
        //     body: ''
        // })
    
}