import React from 'react';
import {Link} from 'react-router-dom';
import './Landing.css'

const users = [
    {
        name: 'Mana',
        color: 'blue',
        budget: 20
    },
    {
        name: 'Jasmine',
        color: 'red',
        budget: 10
    },
    {
        name: 'Aura',
        color: 'green',
        budget: 5
    },
    {
        name: 'Tina',
        color: 'yellow',
        budget: 3
    }
];

function Landing(props) {
    return (
        <div>
            <h1>Who's Watching</h1>
            <div className="users">
                {users.map((user, index) => {
                    return (
                        <div key={index} className="user" style={{backgroundColor: user.color}}>
                            <Link to={`/catalog`} state={{user}}>
                                <h2>{user.name}</h2>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Landing;
