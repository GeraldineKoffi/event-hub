import React, { useRef} from 'react'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'

function Login(){
    const [redirect, setRedirect] = React.useState(false)
    const emailInputRef= useRef();
    const passwordInputRef= useRef();
    const[checked, setChecked] = React.useState();

   
   const handleValidation= async(event)=>{
    
        event.preventDefault();
        const Mail= emailInputRef.current.value; 
        const Pass= passwordInputRef.current.value;
      
        try{
        await axios.post('http://localhost:4000/Auth/user',{
            Mail,
            Pass
          })
          .then(response=>{
            
            { checked ? localStorage.setItem('remember', true) : localStorage.setItem('remember', false) }

            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('setRemember', true);
            localStorage.setItem('lastName', response.data.user.lastName)
            localStorage.setItem('firstName', response.data.user.firstName)
            localStorage.setItem('mail', response.data.user.mail)
            localStorage.setItem('phone', response.data.user.phone)
            localStorage.setItem('id', response.data.user.id)
            
          }
           )
         
        }catch(error){
          console.log("error try:", error)
        }
        setRedirect(true)
      }
    
    return (
        <form className='login' onSubmit={handleValidation}>

        <div className='head'>Login User</div><br/>

        <label>Email</label><br/>
        <input required placeholder='Entrer votre email' name='email' type="email" ref={emailInputRef}/><br/>
        <label>Mot de passe</label><br/>
        <input required placeholder='Entrer votre mot de passe' type="password" name='password'ref={passwordInputRef}/><br/>
        
        <input type="checkbox" className='remember' value={checked} onChange={() => setChecked(!checked)}  />
        <label className='text'> Se souvenir de moi</label>

         <Link to={'/forgetPass'} className='pass'>Mot de passe oublié?</Link><br />
         
          <button className='valid'>Valider</button><br/>
          {redirect? <Redirect to="/dashboard" />: null}
          <Link to={'./role'} className='newcompte'>
            Vous n'avez pas de compte, <span>Créer un compte?</span>
          </Link>
          </form>
               

    )
}
export default Login