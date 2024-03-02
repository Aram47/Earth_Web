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
  link: {
    color: '#81A1C1',
    textDecoration: 'none', 
    fontWeight: 'bold', 
    '&:hover': {
      color: '#88C0D0', 
      textDecoration: 'underline',
    },
    display: 'inline-block',
    margin: '10px 0', 
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
