import React, { Component } from 'react';
import Die from '../dice/die.component';
import "./rolldice.style.css";

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dice1 : {
                number:1
            },
            dice2 : {
                number:2
            },
            isRolling:false
        }
    }

    roll = () => {
        let rand1 = Math.floor(Math.random() * 5)
        let rand2 = Math.floor(Math.random() * 5)
        this.setState({dice1:{number:rand1},dice2:{number:rand2},isRolling:true });
        setTimeout(()=> {
            this.setState({isRolling:false})
        },1000)
    }

    render() {
        return (
            <div className="RollDice">
                <Die number = {this.state.dice1.number}/>
                <Die number = {this.state.dice2.number}/>
                <button onClick={this.roll} disabled={this.state.isRolling}>
                    {this.state.isRolling?"Rolling..":"Roll the dice"}
                </button>

            </div>
        )
    }
}

export default RollDice;