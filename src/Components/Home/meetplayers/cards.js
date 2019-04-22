import React, { Component } from 'react'
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import OtamendiPlayer from '../../../Resources/images/players/Otamendi.png';
import CardsPlayers from '../../UI/cardsplayers';

export default class PlayersCards extends Component {
    state = {
        show : this.props.show,
        cards:[
            {
                bottom:90,
                left:300
            },
            {
                bottom:60,
                left:200
            },
            {
                bottom:30,
                left:100
            },
            {
                bottom:0,
                left:0
            }
        ]
    }
    showAnimateCards = () => (
        this.state.cards.map((cards,i) => (
            <Animate
                key={i}
                show={this.props.show}
                start={{
                    left:0,
                    bottom:0
                }}
                enter={{
                    left:[cards.left],
                    bottom:[cards.bottom],
                    timing:{delay:0,duration:500,ease:easePolyOut}
                }}
            >
                {({ left,bottom }) => {
                    return(
                        <div
                            style={{
                                position:"absolute",
                                left,
                                bottom
                                
                            }}
                        >
                            <CardsPlayers
                                number="30"
                                name="Nicolas"
                                lastname="Otamendi"
                                backgroundImage={OtamendiPlayer}
                            />
                        </div>
                    )
                }}
            </Animate>
        ))
    )
  render() {
    return (
        <div>
            {this.showAnimateCards()}
        </div>
    )
  }
}
