import React from 'react'
import Featured from './featured/Featured';
import Matches from './matches/matches';
import MeetPlayers from './meetplayers/meetplayers';
import Promotion from './promotion/Promotion';
const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <Matches/>
            <MeetPlayers/>
            <Promotion/>
        </div>
    )
}

export default Home