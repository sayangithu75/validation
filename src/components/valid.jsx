import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Label,Input,Form,Button} from 'reactstrap'
import {Grid,Typography} from '@mui/material'
import './valid.css'

const Valid=()=>{
    const [fname,setFname]=useState('');
    const [lname,setLname]=useState('');
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [dob,setDob]=useState('');
    const [show,setShow]=useState(false)

    const handleAlert=()=>{
        if(!fname)
        alert("please fill the first name field");
        if(!lname)
        alert("please fill the last name field");
        if(!email)
        alert("please fill the email field");
        if(!pass)
        alert("please fill the password field");
        if(!dob)
        alert("please fill the date of birth field");
        else
        alert("Thank you");
    }

    const handleFocus=()=>{

        setShow(true)
        // if(show){
        //     return(
        //         <div>
        //         <p>atleast one uppercase letter</p>
        //         <p>atleast one lowercase letter</p>
        //         <p>atleast one speacial charachter</p>
        //         <p>minimum 8 charachters</p>
        //     </div>
        //     )
           
        //     // setShow(false);
        // }


    }


    return(
        <Container>
            <Form>
                <Label htmlFor='fname'>Your First Name</Label>
                <Input id="fname" type="text" required value={fname} onChange={(e)=>setFname(e.target.value)} onClick={()=>setShow(false)}/>
                <Label htmlFor='lname'>Your Last Name</Label>
                <Input id="lname" type="text" required value={lname}onChange={(e)=>setLname(e.target.value)}  onClick={()=>setShow(false)}/>
                <Label htmlFor='email'>Email Id</Label>
                <Input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} onClick={()=>setShow(false)}/>
                <Label htmlFor='pass'>Password</Label>
                <Input id="pass" type="password"  required value={pass} onChange={(e)=>setPass(e.target.value)} onClick={handleFocus}/>
                <Label htmlFor='DOB'>Date of Birth</Label>
                <Input id="DOB" type="date" required value={dob} onChange={(e)=>setDob(e.target.value)} onClick={()=>setShow(false)}/>
                <Container className="text-center">
                 <Button color="primary" onClick={handleAlert} >Post</Button>
                </Container>
            </Form>
            <Grid container direction='column' alignItems='center' justify='center' backgroundColor='#141215' color='#74f57d'>
                {show?
                <div >
                    <h3 >Atleast one uppercase letter</h3>
                    <h3>Atleast one lowercase letter  </h3>
                    <h3> Atleast one speacial charachter</h3>
                    <h3> Minimum 8 charachters</h3>
                </div>
                

               :null
            // setShow(false);
            }
            </Grid>
        </Container>
    )
}

export default Valid;