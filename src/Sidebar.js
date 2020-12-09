import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FlagIcon from '@material-ui/icons/Flag';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className='sidebar'>
            <SidebarRow  title='Rakesh Sripelly' src={user.photoURL}/>
            <SidebarRow title='Covid-19 information center' Icon={LocalHospitalIcon}/>
            <SidebarRow title='Friends' Icon={PeopleAltIcon}/>
            <SidebarRow title='Flag' Icon={FlagIcon}/>
            <SidebarRow title='Messenger' Icon={ ChatIcon}/>
            <SidebarRow title='Market place' Icon={StorefrontIcon}/>
            <SidebarRow title='videos' Icon ={VideoLibraryIcon}/>
            <SidebarRow title='Market place' Icon ={ExpandMoreIcon}/>
        </div>
    )
}

export default Sidebar
