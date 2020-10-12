import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import styles from './styles.module.css'

const Input = props => {
    const {list , setList} = props;
    let task = {
        name: "",
        isCompleted: false
    
    }
   

    const onChange = e => {
        task.name = e.target.value;
        console.log(task)
    }
    const onClick = (e) => {
      
        setList([...list , task])
         e.target.value='';
         task = '';
        console.log(list)}
       
    const displayTask = props=> {
        return ( <p>{list}</p>)
    }

    

    return (
     <div>
        <input  className={styles.add}type='text' placeholder='Add more' onChange={onChange}></input>
        <Button onClick={onClick} >Add</Button>
     </div>

    )

}
export default Input;