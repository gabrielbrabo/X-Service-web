import React, {useState, useEffect, createContext} from 'react'
import {api, createSession } from '../Api'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = sessionStorage.getItem("id")
        const token = sessionStorage.getItem('token')

        if(recoveredUser && token) {
            setUser(JSON.parse(recoveredUser))
            api.defaults.headers.Authorization = `Bearer ${token}`
        }

        setLoading(false)
    }, [])

    const login = async (email, password) => {

        const response = await createSession(email, password)

        const Id = response.data.id
        const loggedUser = response.data.email
        const token = response.data.token
        const avatar = response.data.avatar
        const proUser = response.data.proUser
        sessionStorage.setItem("id", 
        JSON.stringify(Id))
        sessionStorage.setItem("token", token)
        
        sessionStorage.setItem("proUser", proUser)

        if (avatar) {
            sessionStorage.setItem("avatar", avatar)
        }
        
        api.defaults.headers.Authorization = `Bearer ${token}`
        setUser(loggedUser)
        
        navigate('/')

        window.location.reload()
        
    }
    
    const logout = () => {

        sessionStorage.removeItem("user")
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("patient")
        api.defaults.headers.Authorization = null
        setUser(null)
        
    }

    return (
        <AuthContext.Provider 
            value={
                {
                    authenticated: !!user, 
                    user,
                    loading,
                    login,
                    logout
                }
            }
        >
            {children}
            
        </AuthContext.Provider>
    )
}