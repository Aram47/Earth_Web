import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  globeContainer: {
    position: 'fixed', // Use fixed or absolute positioning
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, // Ensure it stays as a background
    overflow: 'hidden', // Prevent scrollbars
  },
});

export default useStyles;
