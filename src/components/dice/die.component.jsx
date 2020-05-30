import React from 'react';
// @ts-ignore
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne,faDiceTwo,faDiceThree,faDiceFour,faDiceFive,faDiceSix } from '@fortawesome/free-solid-svg-icons';

//FontAwesomeIcon is the component and faDiceOne etc are the props of icons it can take

//vscode note: rename symbol is for refactor a name across directories
const Die = props => {
    const dices = [faDiceOne,faDiceTwo,faDiceThree,faDiceFour,faDiceFive,faDiceSix]
    return (
        <div>
            <FontAwesomeIcon 
            icon={dices[props.number]} 
            size={"10x"} 
            color = {"pink"} 
            />
        </div>
    )
}

export default Die;