import React, { useRef} from 'react'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'


function LoginOrg(){
    const [redirect, setRedirect] = React.useState(false)
    const emailInputRef= useRef();
    const passwordInputRef= useRef();
    const[checked, setChecked] = React.useState();

   
   const handleValidation= async(event)=>{
    
        event.preventDefault();
        const Mail= emailInputRef.current.value; 
        const Pass= passwordInputRef.current.value;
      
        try{
        await axios.post('http://localhost:4000/Auth/organisateur',{
            Mail,
            Pass
          })
          .then(response=>{
            { checked ? localStorage.setItem('remember', true) : localStorage.setItem('remember', false) }
            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('setRemember', true);
            localStorage.setItem('name', response.data.organisateur.name)
            localStorage.setItem('mail', response.data.organisateur.mail)
            localStorage.setItem('tel', response.data.organisateur.tel)
            localStorage.setItem('adresse', response.data.organisateur.adresse)
            localStorage.setItem('id', response.data.organisateur.id)
            localStorage.setItem('gerant', response.data.organisateur.gerant)
            localStorage.setItem('num_RCS', response.data.organisateur.num_RCS)
            console.log(response.data)

          }
           )
         
        }catch(error){
          console.log("error try:", error)
        }
        setRedirect(true)
    }
  
    return (
        <form className='login' onSubmit={handleValidation}>

        <div className='head'>Login Organisateur</div><br/>

        <label>Email</label><br/>
        <input required placeholder='Entrer votre email' name='email' type="email" ref={emailInputRef}/><br/>
        <label>Mot de passe</label><br/>
        <input required placeholder='Entrer votre mot de passe' type="password" name='password'ref={passwordInputRef}/><br/>
        
        <input type="checkbox" className='remember' value={checked} onChange={() => setChecked(!checked)} />
        <label className='text'> Se souvenir de moi</label>

         <Link to={'/forgetPass'} className='pass'>Mot de passe oublié?</Link><br />
         
          <button className='valid'>Valider</button><br/>
          {redirect? <Redirect to="/dashboardOrg" />: null}
         <Link to={'./role'} className='newcompte'>
            Vous n'avez pas de compte, <span>Créer un compte?</span>
          </Link>
          </form>
               

    )
}
export default LoginOrg