import React, { Component } from 'react'
import { Tag } from '../../UI/misc';
import Reveal from 'react-reveal/Reveal';
import PlayersCards from './cards';
import Stripes from '../../../Resources/images/stripes.png';
export default class MeetPlayers extends Component {
    state = {
        show:false
    }
  render() {
    return (
        <Reveal
           //fraction={1}
           onReveal={() => {
               this.setState({
                   show:true
               })
           }}
        >
            <div className="home_meetplayers"
                style={{
                    background:`#ffffff url(${Stripes})`
                }}
            >
                    <div className="container">
                        <div className="home_meetplayers_wrapper">
                            <div className="home_card_wrapper">
                                <PlayersCards
                                    show={this.state.show}
                                />
                            </div>
                            <div className="home_text_wrapper">

                                <div>
                                    <Tag background="#0e1731" color="#ffffff" size="100px" add={{display:"inline-block",marginBottom:"20px"}}>Meet</Tag>
                                </div>

                                <div>
                                    <Tag background="#0e1731" color="#ffffff" size="100px" add={{display:"inline-block",marginBottom:"20px"}}>The</Tag>
                                </div>
                                
                                <div>
                                    <Tag background="#0e1731" color="#ffffff" size="100px" add={{display:"inline-block",marginBottom:"20px"}}>Players</Tag>
                                </div>
                                
                                <div>
                                    <Tag background="#ffffff" color="#0e1731" size="27px" link={true} linkTo="/the_team" add={{display:"inline-block",marginBottom:"27px",border:"1px solid #0e1731"}}>Meet them here</Tag>
                                </div>

                            </div>
                        </div>
                    </div> 
            </div>
        </Reveal>
    )
  }
}
