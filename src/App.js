import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
// import PhotosContainer from "./components/photos/photosContainer";
import PhotoContainer from "./components/photo/photoContainer";
import './App.css';
import HeaderContainer from "./components/header/headerConteiner";
import ProfileContainer from "./components/profile/profileContainer";
import PhotosContainerHook from "./components/photos/photosContainerHook";


const App = () => {
    return (
        <div className='container'>
            <HeaderContainer/>
            <main className='main'>
                <Switch>
                    <Route exact path='/' component={PhotosContainerHook}/>
                    <Route exact path='/image/:id'
                           render={({match}) => {
                               return <PhotoContainer photoId={match.params.id}/>
                           }}/>
                    <Route exact path='/profile' component={ProfileContainer}/>
                    <Redirect to='/'/>
                </Switch>
            </main>
        </div>
    );
}


export default App;
