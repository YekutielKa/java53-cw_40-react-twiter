import React from 'react';
import {TwitterContext} from "../utils/context";

const Avatar = ({size}) => {

    return (
        <TwitterContext.Consumer>
            {
                ({user}) => (
                    <img onClick={user.randomAvatar} className={`user-avatar ${size ?? ''}`}
                         src={user.avatar} alt={user.name}/>
                )
            }
        </TwitterContext.Consumer>
    );
};

export default Avatar;