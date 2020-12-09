import { Avatar } from '@material-ui/core'
import { Share, ThumbUp } from '@material-ui/icons'
import React from 'react'
import './Post.css'
import CommentIcon from '@material-ui/icons/Comment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Post({profilePic,image,message,username,timestamp}) {
    return (
        <div className='post'>
            <div className='post__top'>
              <Avatar src={profilePic} className='post__avtar'/>
              <div className='post__topInfo'>
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
              </div>
            </div>
            <div className='post__bottom'>
                <h4>{message}</h4>
            </div>
            <div className='post__image'>
               <img src={image} alt=''/>
            </div>
            <div className='post__options'>
               <div className='post__option'>
                 <ThumbUp/>
                 <p>Like</p>
               </div>
               <div className='post__option'>
                 <CommentIcon/>
                 <p>Comment</p>
               </div>
               <div className='post__option'>
                  <Share/>
                  <p>Share</p>
               </div>
               <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
               </div>
            </div>
        </div>
    )
}

export default Post
