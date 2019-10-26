import React, {useContext} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';
import {EnemyContext} from './EnemiesContainer';
import ork from '../img/ork.jpg';
import wolf from '../img/wolf.jpg';
import thief from '../img/thief.jpg';
import goblin from '../img/goblin.jpg';

const enemiesList = [
    {name: 'Goblin', img: ork},
    {name: 'Wolf', img: wolf},
    {name: 'Thief', img: thief},
    {name: 'Ork', img: goblin},
]

const AddEnemyContainer = () => {

    const {addEnemy} = useContext(EnemyContext);
    const history = useHistory();
    const {url} = useRouteMatch();
    const onClick = (name) => {
        addEnemy(name);
        // TODO: to run app on a path under my blog
        // this workaround smells pretty bad. fix router manager
        const pushUrl = url.replace('/add-enemy', '');
        history.push(pushUrl);
    }

    return (
        <div className="overlay">
            <div className="add-enemy-list-container">
                <ul>
                    {enemiesList.map(e => <li key={e.name} onClick={() => onClick(e)}>{e.name}</li>)}
                </ul>
            </div>
        </div>
    )
};

export default AddEnemyContainer;