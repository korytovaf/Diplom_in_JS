import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import ImagesContainer from "./components/images/imagesContainer";
import Profile from "./components/profile/profile";
import ImagePageContainer from "./components/imagePage/imagePageContainer";
import './App.css';
import HeaderContainer from "./components/header/headerConteiner";


const App = () => {
    return (
        <div className='container'>

            <HeaderContainer />

            <main className='main'>
                <BrowserRouter>
                    <Route path='/' component={ImagesContainer} exact/>
                    <Route path='/image/:id' exact
                           render={({match}) => {
                               return <ImagePageContainer itemId={match.params.id}/>
                           }}/>
                    <Route path='/profile/' component={Profile}/>
                </BrowserRouter>
            </main>

        </div>
    );
}


export default App;
