import React, {useState} from 'react';
import lampiao from '../img/lampiao_jr.jpg';
import rha from '../img/rha.jpg';
import rodo from '../img/rodo.jpg';
import lila from '../img/lila.jpg';
import bia from '../img/bia.jpg';
import antonio from '../img/antonio.jpg';
import Player from './Player';

const defaultPlayers = [
    {name: 'Elisilian', img: lila, hp: 10, hitsTaken: 0},
    {name: 'Miread', img: rha, hp: 10, hitsTaken: 0},
    {name: 'Auriel', img: bia, hp: 10, hitsTaken: 0},
    {name: 'Tschis', img: rodo, hp: 10, hitsTaken: 0},
    {name: 'Narê', img: antonio, hp: 10, hitsTaken: 0},
    {name: 'Lampião Jr.', img: lampiao, hp: 10, hitsTaken: 0},
];

const PlayersContainer = () => {
    const [players, setPlayers] = useState(defaultPlayers);

    const getUp2DatePlayers = (playerName, updatePlayersFn) => {
        return players.map(player => {
            if(player.name === playerName) {
                return updatePlayersFn(player);
            }
            return player;
        });
    
    }

    const incrementHitsTaken = (playerName) => {
        const up2datePlayers = getUp2DatePlayers(playerName, (player) => ({...player, hitsTaken: Math.min(player.hitsTaken+1, player.hp)}));
        setPlayers(up2datePlayers);
    };

    const decrementHitsTaken = (playerName) => {
        const up2datePlayers = getUp2DatePlayers(playerName, (player) => ({...player, hitsTaken: Math.max(player.hitsTaken-1, 0)}));
        setPlayers(up2datePlayers);
    };

    const incrementHp = (playerName) => {
        const up2datePlayers = getUp2DatePlayers(playerName, (player) => ({...player, hp: player.hp+1}));
        setPlayers(up2datePlayers);
    };

    const decrementHp = (playerName) => {
        const up2datePlayers = getUp2DatePlayers(playerName, (player) => ({...player, hp: Math.max(player.hp-1, 0)}));
        setPlayers(up2datePlayers);
    };

    const updateHp = (playerName, newHp) => {
        const up2datePlayers = getUp2DatePlayers(playerName, (player) => ({...player, hp: Math.max(newHp, 0)}));
        setPlayers(up2datePlayers);
    }

    const resetPlayer = (playerName) => {
        const defaultPlayer = defaultPlayers.find(p => p.name === playerName);
        if (defaultPlayer) {
            const up2datePlayers = getUp2DatePlayers(playerName, (p) => ({...defaultPlayer}));
            setPlayers(up2datePlayers);
        }
    }

    const movePlayerToTheleft = (playerName) => {
        const index = players.findIndex(p => p.name === playerName);
        if (index !== -1 && index > 0) {
            const copy = [...players];
            const player = {...players[index]};
            copy[index] = copy[index - 1];
            copy[index-1] = player;
            setPlayers(copy);
        }
    }

    const movePlayerToTheRight = (playerName) => {
        const index = players.findIndex(p => p.name === playerName);
        if (index !== -1 && index < players.length-1) {
            const copy = [...players];
            const player = {...players[index]};
            copy[index] = copy[index + 1];
            copy[index+1] = player;
            setPlayers(copy);
        }
    }

    const actions = {
        incrementHitsTaken, 
        decrementHitsTaken,
        incrementHp, 
        decrementHp,
        updateHp,
        resetPlayer,
        movePlayerToTheleft,
        movePlayerToTheRight
    };

    return(
        <div className="players">
          { players.map(player => <Player key={player.name} actions={actions} {...player}/>) }
        </div>
    );
};

export default PlayersContainer;