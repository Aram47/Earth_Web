import { useState } from 'react';
import useStyles from './style';

function SignUpComponent() {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('Male');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [nickname, setNickname] = useState('');
  
    const handleSubmit = (e: any) => {
      e.preventDefault();
      console.log('Signing in with:', { username, password });
    };
  
    return (
        <form onSubmit={handleSubmit} className={classes.form}>
          <h2 className={classes.title}>Sign Up</h2>
          <input
            type="text"
            placeholder="Name"
            className={classes.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
          type="text"
          placeholder="Surname"
          className={classes.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
          <input
            type="text"
            placeholder="Nickname"
            className={classes.input}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        <input
            type="text"
            placeholder="Email"
            className={classes.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            className={classes.input} 
            required 
        />
          <input
            type="password"
            placeholder="Password"
            className={classes.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Repeat Password"
            className={classes.input}
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
           <select
            className={classes.select}
            name="gender"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="" disabled>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        <button type="submit" className={classes.button}>Sign Up</button>
          
        </form>
    );
};

export default SignUpComponent;