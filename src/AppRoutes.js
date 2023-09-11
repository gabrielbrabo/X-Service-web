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
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes