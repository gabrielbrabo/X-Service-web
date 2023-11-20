import React, { useContext } from 'react'

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom"

import { AuthProvider, AuthContext } from './contexts/auth'

import SignUp from "./screens/SignUp"
import SignIn from "./screens/SignIn"
import Home from "./screens/Home"
import Search from "./screens/Search"
import Favorites from "./screens/Favorites"
import Profile from "./screens/Profile"

const AppRoutes = () => {

    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext)
    
        if(loading) {
          return <div className='loading'>Carregando...</div>
        }
    
        if( !authenticated ) {
          return <Navigate to="/signin" />
        }
    
        return children
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/signup" element={<SignUp/>}/>
                    <Route exact path="/signin" element={<SignIn/>}/>
                    <Route exact path="/" element={
                        <Private>
                            <Home/>
                        </Private>
                    }/>
                    <Route exact path="/search" element={
                        <Private>
                            <Search/>
                        </Private>
                    }/>
                    <Route exact path="/favorites" element={
                        <Private>
                            <Favorites/>
                        </Private>
                    }/>
                    <Route exact path="/profile" element={
                        <Private>
                            <Profile/>
                        </Private>
                    }/>
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes