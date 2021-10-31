import { Paper, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';


export const StyledLink = styled(Link)(
  ({ theme }) => ({
    textDecoration: 'none',
  }),
);

export const StyledPaper = styled(Paper)(
  ({ theme }) => ({
    width: '239px',
    textDecoration: 'none',
    textTransform: 'none',
    fontsize: 'normal',
    color: '#262626',
    transition: '0.2s',
    ':hover': {
      background: '#eeeeee'
    }
  }),
);
export const DisabledTextField = styled(TextField)(
  ({ theme }) => ({
    '& .MuiOutlinedInput-root textarea.Mui-disabled': {
      '-webkit-text-fill-color': '#262626',
    }
  }),
);