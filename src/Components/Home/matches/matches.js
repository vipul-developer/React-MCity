import React from 'react';
import { Tag } from '../../UI/misc';
import Blocks from './Blocks';
const Matches = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag
                    background="#0e1731"
                    color="#ffffff"
                    size="50px"
                    add={{
                        color:"#ffffff"
                    }}
                >Matches</Tag>
                <Blocks/>
                <Tag
                    background="#ffffff"
                    color="#0e1731"
                    size="22px"
                    link={true}
                    linkTo="/the_team"
                    add={{
                        color:"#0e1731"
                    }}
                >
                    See more matches
                </Tag>
            </div>    
        </div>
    );
};

export default Matches;