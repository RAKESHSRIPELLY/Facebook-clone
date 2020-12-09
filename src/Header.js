
import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import FlagIcon from '@material-ui/icons/Flag';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className='header'>
            <div className='header__left'>
                <img  src="https://www.ebsta.com/wp-content/uploads/2020/08/Facebook-share-icon.png" alt=''/>
                <div className='header__input'>
                    <SearchIcon/>
                    <input placeholder='facebook search' className='input'/>
                </div>
            </div>
            <div className='header__center '>
                <div className='header__option'>
                   <HomeIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                   <SubscriptionsIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                   <FlagIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                   <StorefrontIcon fontSize='large'/>  
                </div>
                <div className='header__option'>
                   <SupervisedUserCircleIcon fontSize='large'/>
                </div>
            </div>
            <div className='header__right'>
                <div className='header__info'>
                     <Avatar  src={user.photoURL}/>
                    <h2>{user.displayName}</h2>
                </div>
                <div className='header__info'>
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                </div>
                <div className='header__info'>
                     <IconButton>
                        <ForumIcon/>
                     </IconButton>
                </div>
                <div className='header__info'>
                     <IconButton>
                        <NotificationsActiveIcon/>
                     </IconButton>
                </div>
                <div className='header__info'>
                     <IconButton>
                        <ExpandMoreIcon/>
                     </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header
