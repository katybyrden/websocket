import React, {useEffect, useState} from 'react';

const Sidebar = ({socket}) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        socket.on('responseNewUser', (data)=> setUsers(data))
    }, [socket, users])
    return (
        <div className='sidebar'>
            <h4 className='header'>Users</h4>
            <ul className='users'>
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
            </ul>
        </div>
    );
};

export default Sidebar;