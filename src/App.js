import React from "react";
import {Route} from "react-router-dom";
import PhotoContainer from "./components/photos/photosContainer";
import ImagePageContainer from "./components/photo/photoContainer";
import './App.css';
import HeaderContainer from "./components/header/headerConteiner";
import ProfileContainer from "./components/profile/profileContainer";


const App = () => {
    return (

            <div className='container'>
                <Route path='/' component={HeaderContainer}/>
                <main className='main'>
                    <Route exact path='/' component={PhotoContainer}/>
                    <Route path='/image/:id'
                           render={({match}) => {
                               return <ImagePageContainer photoId={match.params.id}/>
                           }}/>
                    <Route path='/profile/' component={ProfileContainer}/>

                </main>

            </div>

    );
}


export default App;
