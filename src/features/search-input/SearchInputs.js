import React, { useState } from 'react';
import { connect } from "react-redux";
import { addInput, removeInput, addSelectedPerformer, removeSelectedPerformer } from '../../redux/reducers'
import styles from './SearchInput.module.css';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import getResults, { processResults } from './processResults';
import Badge from 'react-bootstrap/Badge';

const mapStateToProps = (state) => {
    return {
        input: state.input,
        selectedPerformers: state.selectedPerformers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addInput: (obj) => dispatch(addInput(obj)),
        removeInput: () => dispatch(removeInput()),
        addSelectedPerformer: (obj) => dispatch(addSelectedPerformer(obj)),
        removeSelectedPerformer: (obj) => dispatch(removeSelectedPerformer(obj))
    };
};


const SearchInputs = (props) => {
    const [input, setInput] = useState('');

    async function searchPerformers(evt) {
        if (!evt.target.value) return;

        var query = evt.target.value;
        
        let data = await getResults(query);

        getDataOut(data);

        
    };
    

    const getDataOut = (results) => {
        props.addInput({
            results
        });

        setInput(results);
        

    };



    const pickPerformer = (evt) => {

        var current = evt.target.getAttribute('data-performer');
        var performer = input[current];
        props.addSelectedPerformer({
            performer: performer,
            name: current
            
        });
        
        document.getElementById('searchPerformers').value = '';
        setInput(null);
    }


    return (
       <div className={styles.performerSearch}>
        <input onInput={searchPerformers} className={styles.input} id="searchPerformers" placeholder="Enter actor's name..." />
        {input && 
        
        <ListGroup id="performerSelect" className={styles.performerSuggestions}>
            {input &&  input.map((performer, idx) => (
                <ListGroupItem 
                key={idx}>
                    {performer.name} 
                <Badge onClick={pickPerformer.bind(performer.name)} 
                data-performer={performer.name} 
                className={styles.selectItem} bg="success">+</Badge>
                </ListGroupItem>
                )
                )}
            
            </ListGroup>       
        
    } 
        
    </div>

    );

};


export default connect(mapStateToProps, mapDispatchToProps)(SearchInputs);
