import React from 'react';
import SideBar from '../components/SideBar';
import PocketNotes from '../components/PocketNotes';
import { useContext } from 'react';
import { formContext } from '../context/formProvider';



function Home() {

    const { showForm } = useContext(formContext);
    return (
        <div style={{display : "flex"}} className={showForm ? 'overlay' : ''}>
            <SideBar />      
            <PocketNotes /> 
          
        </div>
    );
}

export default Home;