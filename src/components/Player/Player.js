import React, {Component, createRef } from 'react';
import styles from './Player.module.css';

export default class Player extends Component {
    playerRef = createRef();
    play = () => this.playerRef.current.play();
    pause = () => this.playerRef.current.pause();

    render() {
        return (
        <div className={styles.container}>
            <video 
             className={styles.player}
             src={this.props.source}
             ref={this.playerRef}
             />
            <div className={styles.controls} >
            <button type="button" onClick={this.play}>Play</button>
            <button type="button" onClick={this.pause}>Pause</button>
            </div>
        </div>
        )
    }
}


