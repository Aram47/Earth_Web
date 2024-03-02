import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  form: {
    width: "100px",
    transform: "translateY(80%)",
    flexDirection: "column",
    paddingLeft: "50px",
    background: "none",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  input: {
    marginBottom: "10px",
    padding: "10px",
    border: "none",
    borderBottom: "2px solid #334E68",
    background: "transparent",
    color: "#FFFFFF",
    outline: "none",
    "&::placeholder": {
      color: "#5D7290",
    },
    "&:focus": {
      borderBottomColor: "gray",
    },
  },

  select: {
    marginBottom: '10px',
    padding: '10px',
    border: 'none',
    borderBottom: '2px solid #334E68',
    background: 'transparent',
    color: '#FFFFFF',
    outline: 'none',
    WebkitAppearance: 'none', // Removes default style in WebKit browsers
    MozAppearance: 'none', // Removes default style in Firefox
    appearance: 'none', // Removes default dropdown arrow
    '&:focus': {
      borderBottomColor: 'gray',
    },
    '&::-ms-expand': {
      display: 'none', // Removes the default dropdown arrow in IE
    },
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`, // Custom dropdown arrow
    backgroundPosition: 'right 10px top 50%', // Position for custom dropdown arrow
    cursor: 'pointer',
  },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    background: "#7F5AF0",
    color: "#FFFFFF",
    cursor: "pointer",
    transition: "background 0.3s",
    "&:hover": {
      background: "#9277FF",
    },
  },
  title: {
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: "20px",
  },
});

export default useStyles;
