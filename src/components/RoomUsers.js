import React, { useEffect, useState } from 'react'
import '../styles/components/RoomUsers.css'
export default function RoomUsers({roomData}) {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setUsers(roomData.users)
        if(users){
            setIsLoading(false)
        }
    }, [users])
    if(isLoading){
        return(
            <div>Loading...</div>
        )
    }
    return (
        <div className='room-users-wrapper'>
            <div className='room-users-title'>
                    Users
            </div>
            <div className='room-users-list'>
                <ul>
                    { users.map(u => {
                        return(
                            <li key={u.id}>{u.name}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
