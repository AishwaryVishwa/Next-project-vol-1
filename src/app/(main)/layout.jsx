import NavBar from '@/components/NavBar'
import React from 'react'

export default function layout({ children }) {
    return (
        <>
            <NavBar/>
            {children}
        </>
    )
}
