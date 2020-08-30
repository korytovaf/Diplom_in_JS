import React from "react";
import {Route, Switch} from "react-router-dom";
import ImagesContainer from "./components/images/imagesContainer";
import Profile from "./components/profile/profile";
import ImagePageContainer from "./components/imagePage/imagePageContainer";
import './App.css';
import HeaderContainer from "./components/header/headerConteiner";
import {Redirect} from "react-router";


const App = () => {
    return (
        <Switch>
            <div className='container'>
                <Route path='/' component={HeaderContainer}/>
                <main className='main'>
                    <Route exact path='/' component={ImagesContainer}/>
                    <Route exact path='/image/:id'
                           render={({match}) => {
                               return <ImagePageContainer itemId={match.params.id}/>
                           }}/>
                    <Route path='/profile/' component={Profile}/>
                    <Redirect to='/'/>
                </main>

            </div>
        </Switch>
    );
}


export default App;
