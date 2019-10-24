import React, {useState} from 'react';

const Player = ({name, img, hp, hitsTaken, actions}) => {

  const [isChangingHp, setIsChangingHp] = useState(false);

  const hpBarWidth = 100 - (100 * hitsTaken) / hp;

  const onChangeHp = (event) => {
    const newValue = parseInt(event.target.value);
    if (typeof newValue == 'number') {
      console.log(newValue);
      actions.updateHp(name, newValue);
    }
  };

  const _renderHpInput = () => {
    return(
      <div>
        <input type="number" onChange={onChangeHp}/>
        <button onClick={() => setIsChangingHp(false)}>Ok</button>
      </div>
    );
  }

  const _renderHpBar = () => {
    return(
      <div className="hp-bar" onClick={() => setIsChangingHp(true)}>
        <span style={{width: `${hpBarWidth}%`}}></span>
        <div>{`${hp - hitsTaken}/${hp}`}</div>
      </div>
    );
  }

    return(
      <div className="player shadow-around">
        <span className="arrow arrow-left" onClick={() => actions.movePlayerToTheleft(name)}></span>
        <span className="arrow arrow-right" onClick={() => actions.movePlayerToTheRight(name)}></span>
        <div className="hp-bar-container">
          { isChangingHp ? _renderHpInput() : _renderHpBar() }
        </div>
        <h4>{name}</h4>
        <img src={img}/>
        <div className="player-actions-container">
          <button className="btn btn-red btn-round" onClick={() => actions.incrementHp(name)}>❤️+</button>
          <button className="btn btn-red btn-round" onClick={() => actions.decrementHp(name)}>❤️-</button>
          <button className="btn btn-red btn-round" onClick={() => actions.incrementHitsTaken(name)}>⚔️+</button>
          <button className="btn btn-red btn-round" onClick={() => actions.decrementHitsTaken(name)}>⚔️-</button>
          <button className="btn btn-red btn-round" onClick={() => actions.resetPlayer(name)}>Reset</button>
        </div>
      </div>
    );
};

export default Player;