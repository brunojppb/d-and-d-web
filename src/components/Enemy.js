import React from 'react';

const Enemy = ({name, img, hitsTaken, isDead, actions}) => {

    const opacity = isDead ? '0.3' : '1';
    const killButtonText = isDead ? '💊 Revive' : '☠️ mark as dead';

    return(
        <div className="enemy shadow-around" style={{opacity}}>
            <h4>{name}</h4>
            <img src={img} alt={name}>
            </img>
            <div class="hits-taken">
                Hits Taken: <span>{hitsTaken}</span>
            </div>
            <button className="btn btn-round" onClick={() => actions.inflictDamage(name)}>
                ⚔️ +
            </button>
            <button className="btn btn-round" onClick={() => actions.reduceDamage(name)}>
                ⚔️ -
            </button>
            <button className="btn btn-round" onClick={() => actions.toggleDead(name)}>
                {killButtonText}
            </button>
            <button className="btn btn-round" onClick={() => actions.removeEnemy(name)}>
                ❌ delete
            </button>
        </div>
    );

}

export default Enemy;