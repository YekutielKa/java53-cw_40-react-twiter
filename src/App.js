import './App.css';
import React from "react";
import Nav from "./components/Nav";
import Body from "./components/Body";
import {TwitterContext} from "./utils/context";


const avatars = ['mp', 'identicon', 'monsterid', 'wavatar', 'retro', 'robohash', 'blank']

function randomAvatar() {
    const randomIndex = Math.floor(Math.random() * avatars.length)
    const avatarRandom = avatars[randomIndex]
    return avatarRandom
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                avatar: `https://gravatar.com/avatar//0?d=${randomAvatar()}`,
                name: 'Monster',
                random: randomAvatar()
            },
            stats: {
                fallowers: 1,
                fallowing: 1
            },
        }
    }

    render() {
        return (
            <div className="app">
                <TwitterContext.Provider value={
                    {
                        user: this.state.user,
                        stats: this.state.stats,
                        randomAvatar: this.state.randomAvatar
                    }
                }>
                    <Nav/>
                    <Body/>
                </TwitterContext.Provider>
            </div>
        );
    }


}

export default App;
