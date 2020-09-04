import React from "react";
import {Route} from "react-router-dom";
import ListPhotoContainer from "./components/photos/ListPhotosContainer";
import Profile from "./components/profile/profile";
import ImagePageContainer from "./components/imagePage/imagePageContainer";
import './App.css';
import HeaderContainer from "./components/header/headerConteiner";


const App = () => {
    return (

            <div className='container'>
                <Route path='/' component={HeaderContainer}/>
                <main className='main'>
                    <Route exact path='/' component={ListPhotoContainer}/>
                    <Route path='/image/:id'
                           render={({match}) => {
                               return <ImagePageContainer photoId={match.params.id}/>
                           }}/>
                    <Route path='/profile/' component={Profile}/>

                </main>

            </div>

    );
}


export default App;
