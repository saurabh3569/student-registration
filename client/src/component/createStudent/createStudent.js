import  React, { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'


const useStyles = makeStyles((theme)=>({
    root:{
        '& > *':{
            margin: theme.spacing(1),
        width: '25ch',
        },
    },
}))


export default function Create() {
    const classes = useStyles()

     const[student,setStudent] = useState({
        rollNo : 0,
        name : ' ',
        class : ' ',
        section : ' '

     })

     function handleChange(event) {
        setStudent(event.target.value);
      }

      const createStudent = (event) =>{
        axios.post('http://localhost:5000/students',{
          
          rollNo : document.getElementById("rollNo").value,
          name : document.getElementById("name").value,
          class : document.getElementById("class").value,
          section : document.getElementById("section").value

        })
        .then(() => {
          window.location.reload(false);
        })
      }
 
  return (
    <>
    <h2>Create Student</h2>
    <form className={classes.root} noValidate autoCompelete="off">  
        <TextField id="rollNo" label="Roll Number" variant="standard" value={student.rollNo} onChange={handleChange}/>
        <TextField id="name" label="Name" variant="standard" value={student.name} onChange={handleChange}/>
        <TextField id="class" label="Class" variant="standard" value={student.class} onChange={handleChange}/>
        <TextField id="section" label="Section" variant="standard" value={student.section} onChange={handleChange}/>
    <Button variant="contained" color="primary" onClick={createStudent}>Create</Button>
    </form>
    </>
  );
}
 