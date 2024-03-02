import { useState } from 'react';
import useStyles from './style';

function SignInComponent({ setIsLogin }: any) {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e: any) => {
      e.preventDefault();
      console.log('Signing in with:', { username, password });
    };
  
    return (
        <form onSubmit={handleSubmit} className={classes.form}>
          <h2 className={classes.title}>Sign In</h2>
          <input
            type="text"
            placeholder="Username"
            className={classes.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className={classes.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={classes.button}>Sign In</button>
          <a className={classes.link} onClick={() => {setIsLogin(false)}}>Don't have an account yet?</a>
        </form>
    );
  }
  
  export default SignInComponent;