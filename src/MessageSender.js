import { Avatar } from '@material-ui/core'
import React , {useState} from 'react'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { useStateValue } from './StateProvider';
import db from './firebase'
import firebase from 'firebase'


function MessageSender() {
    const [{user},dispatch] = useStateValue();
    
    const [input, setInput] = useState("");
    const[inputURL,setInputURL] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: inputURL
          })
        setInput('');
        setInputURL('');
    }
    console.log(setInput)
    return (
        <div className='message__sender'>
            <div className='message__top'>
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        className="message__input"
                        placeholder={`What's on your mind?${user.displayName}`}
                    />
                    <input
                        value={inputURL}
                        onChange={(e) => setInputURL(e.target.value)}
                        type="text"
                        placeholder="Image URL (Optional)"
                    />
                    <button onClick={handleSubmit} type="submit">
                        Hidden Button
                    </button>
               </form>
            </div>
            <div className='message__bottom'>
                 <div className='message__option'>
                 <VideocamIcon style={{color:'red'}}/><h3>Live Video</h3>
                 </div>
                 <div  className='message__option'>
                 <PhotoLibraryIcon style={{color:'green'}}/><h3>Gallery/Photo</h3>
                 </div>
                 <div  className='message__option'> 
                 <EmojiEmotionsIcon style={{color:'orange'}}/><h3>feeling</h3>
                 </div>
            </div>
            
        </div>
    )
}

export default MessageSender
