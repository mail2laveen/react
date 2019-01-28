import React, { Component } from 'react';
import {  fetchPosts} from "../../../actions/jph-post";
import{connect} from 'react-redux';
import propTypes from "prop-types";
class Posts extends Component {

    constructor(props){
        super(props);
        }
    componentDidMount(){
        this.props.fetchPosts();
    }
    
    render() {
        let title="Json Place Holde Posts!"
        return (
            <div>
                <h1>{title}</h1>
                <br/>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Post Id</th>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    
                    <tbody>{
                        this.props.posts.map((post,idx)=>
                    <tr key={idx}>
                        <td><span>{post.userId}</span></td>
                        <td><span>{post.id}</span></td>
                        <td><span>{post.title}</span></td>
                        <td><span>{post.body}</span></td>
                    </tr>
                   
                )
                    }
                     </tbody>
                </table>
            </div>
        )
    }
}

Posts.propTypes={
   
    posts:propTypes.array.isRequired,
    fetchPosts:propTypes.func.isRequired
}

const mapStateToProps= state=>({
    posts:state.jphReducer.posts
});

export default connect(mapStateToProps,{fetchPosts})(Posts)