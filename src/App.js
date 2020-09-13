import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import PhotoContainer from "./components/photos/photosContainer";
import ImagePageContainer from "./components/photo/photoContainer";
import './App.css';
import HeaderContainer from "./components/header/headerConteiner";
import ProfileContainer from "./components/profile/profileContainer";


const App = () => {
    return (
        <div className='container'>
            <HeaderContainer/>
            <main className='main'>
                <Switch>
                    <Route exact path='/' component={PhotoContainer}/>
                    <Route exact path='/image/:id'
                           render={({match}) => {
                               return <ImagePageContainer photoId={match.params.id}/>
                           }}/>
                    <Route exact path='/profile' component={ProfileContainer}/>
                    <Redirect to='/' />
                </Switch>
            </main>
        </div>
    );
}


export default App;
