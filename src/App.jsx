import style from "./style.module.css";
import logo from "./assets/logos/logo.svg";
import dots from "./assets/logos/bg-pattern-dots.svg";
import desktop_image from "./assets/desktop/image-host.jpg";
import { podcast_list } from "./variables";
import { useState } from "react";

const App = () => {

  const [isValid, setIsValid] = useState(true)
  const [email, setEmail] = useState('')
  const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const emailCheck = e => {
    e.preventDefault()
    setIsValid(emailFormat.test(email))
  }

  return (
    <div className={style.main_container}>
      <div className={style.content_container}>
        <div className={style.logo_container}>
            <img src={logo} alt='desktop logo' />
        </div>
        <img src={desktop_image} alt="desktop image background" />
        <div className={style.text_form_container}>
          <h1>Publish your podcasts <span>everywhere.</span></h1>
          <p>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, 
          Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
          <form>
            <input type="text" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)}/>
            <button onClick={emailCheck}>Request access</button>
            <span className={style.email_error} style={{display: `${!isValid ? 'block' : 'none'}`}}>Oops! Please check your email</span>
          </form> 
          <ul>
            {
              podcast_list.map( item => 
                <li key={item}><img src={item} alt={`${item} logo`} /></li>
              )
            }    
          </ul>
        </div>
        <img className={style.dots} src={dots} alt="dots background" />
      </div>
    </div>
  )
}
export default App
