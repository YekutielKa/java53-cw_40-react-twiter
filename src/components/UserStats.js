import React from 'react';
import Avatar from "./Avatar";
import {TwitterContext} from "../utils/context";

const UserStats = () => {
    return (

        <TwitterContext.Consumer>
            {({user, stats}) => (
                <div className='user-tats'>
                    <div>
                        <Avatar/>
                        {user.name}

                    </div>
                    <div className='stats'>
                        <div>Followers: {stats.fallowers}</div>
                        <div>Following: {stats.fallowing}</div>
                    </div>
                </div>
            )}
        </TwitterContext.Consumer>
    );
};

export default UserStats;