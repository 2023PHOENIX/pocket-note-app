import React from 'react';
import SideBar from '../components/SideBar';
import PocketNotes from '../components/PocketNotes';
function Home(props) {
    return (
        <div style={{display : "flex"}}>
            <SideBar />      
            <PocketNotes/> 
        </div>
    );
}

export default Home;