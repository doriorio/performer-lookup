import React from 'react';
import { connect } from "react-redux";
import {removeSelectedPerformer } from '../../redux/reducers'
import styles from './PerformerList.module.css';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import placeholder from './Placeholder_person.png'

const mapStateToProps = (state) => {
    return {
        input: state.input,
        selectedPerformers: state.selectedPerformers
    }
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        removeSelectedPerformer: (obj) => dispatch(removeSelectedPerformer(obj)),

    };
  };



const PerformerList = (props) => {

    const removePerformer = (evt) => {
        let performer = evt.target.getAttribute('data-performer');
        return props.removeSelectedPerformer(performer);
    }

    console.log(props);

    const performer = props.selectedPerformers;
    return (
       <div className={styles.performer}>
           {/* {performer} */}
           {performer ?
           <div>
            {performer.name}<Badge bg="danger"  style={{margin: '5px'}} data-performer={performer.name} onClick={removePerformer.bind(performer)}>REMOVE</Badge>
            <div style={{padding: '10px'}}>
            {/* <Image style={{height: '45px', width: '45px'}} src={performer.performer.image_path || placeholder} roundedCircle /> */}
            </div>

            
            </div>
           :
           <h4><span className="material-icons md-light">
           north
           </span>No actors selected</h4>
        }
        </div>
    );

}

export default connect(mapStateToProps, mapDispatchToProps)(PerformerList);

