import React, {createContext, useState} from 'react';
import {Link, Switch, Route, useRouteMatch} from 'react-router-dom';
import AddEnemyContainer from './AddEnemyContainer';
import Enemy from './Enemy';

export const EnemyContext = createContext(null);

export const EnemiesContainer = () => {
    const {path, url} = useRouteMatch();
    const [enemies, setEnemies] = useState([]);

    const addEnemy = (enemy) => {
        const existingSameEnemies = enemies.filter(e => e.name.includes(enemy.name)).length;
        const newEnemy = {
            name: `${enemy.name}${existingSameEnemies === 0 ? '' : existingSameEnemies+1}`,
            color: 'lightcoral',
            img: enemy.img,
            hitsTaken: 0,
            isDead: false
        };
        setEnemies([...enemies, newEnemy]);
    };

    const inflictDamage = (enemyName) => {
        const up2dateEnemies = enemies.map(e => {
            if (e.name === enemyName) {
                return {...e, hitsTaken: e.hitsTaken + 1};
            } else {
                return e;
            }
        });
        setEnemies(up2dateEnemies);
    };

    const reduceDamage = (enemyName) => {
        const up2dateEnemies = enemies.map(e => {
            if (e.name === enemyName) {
                return {...e, hitsTaken: Math.max(0, e.hitsTaken - 1)};
            } else {
                return e;
            }
        });
        setEnemies(up2dateEnemies);
    };

    const removeEnemy = (enemyName) => {
        const up2DateEnemies = enemies.filter(e => e.name !== enemyName);
        setEnemies(up2DateEnemies);
    }

    const toggleDead = (enemyName) => {
        const up2dateEnemies = enemies.map(e => {
            if (e.name === enemyName) {
                return {...e, isDead: !e.isDead};
            } else {
                return e;
            }
        });
        setEnemies(up2dateEnemies);
    }

    const actions = {
        inflictDamage,
        reduceDamage,
        removeEnemy,
        toggleDead
    };

    return(
        <React.Fragment>
            <div className="enemies">
                {enemies.map(e => <Enemy key={e.name} {...e} actions={actions}/>)}
                <Link to={`${url}add-enemy`} className="add-enemy-btn">
                    Add Enemy
                </Link>
            </div>
            <EnemyContext.Provider value={{addEnemy}}>
                <Switch>
                    <Route path={`${path}add-enemy`}>
                        <AddEnemyContainer/>
                    </Route>
                </Switch>
            </EnemyContext.Provider>
        </React.Fragment>
        
    );
};