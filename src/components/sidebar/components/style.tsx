import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';


export const StyledNavLink = styled(NavLink)(
  ({ theme }) => ({
    width: '239px',
    overflow: 'hidden',
    justifyContent: 'flex-start',
    textDecoration: 'none',
    textTransform: 'none',
    fontsize: 'normal',
    color: '#262626',
    fill: '#262626',
    border: '2px solid transparent',
    '&.active': {
      border: '2px solid #262626',
    },
  }),
);