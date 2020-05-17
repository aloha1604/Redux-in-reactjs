import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import { addNewHobby, setActiveHobby } from '../actions/hobby';

HomePage.propTypes = {

};

const randomNumber = () => {
    return 1000 + Math.trunc((Math.random() * 9000));
}

function HomePage(props) {
    const hoobyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
    const dispatch = useDispatch();

    console.log('Hobby list :', hoobyList);

    const handleAddHobbyClick = () => {
        //Random a hooby object : id + title;
        const newId = randomNumber();
        const newHobby = {
            // id: casual.uuid,
            // title: casual.title,
            id: newId,
            title: `Hobby ${newId}`
        }

        // Dispath action to add a new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div className="home-page">
            <h1>Redux hooks - Home Page</h1>
            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <HobbyList
                hobbyList={hoobyList}
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            ></HobbyList>
        </div>
    );
}

export default HomePage;

