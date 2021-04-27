import React from 'react'

export default function Nav({signOut}) {
    return (
        <nav>
            <p onClick={signOut}>
                Sign out
            </p>    
        </nav>
    )
}
