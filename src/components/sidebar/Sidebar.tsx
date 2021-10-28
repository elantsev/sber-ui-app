import { Button, ButtonGroup } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/system';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../../icons/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../icons/arrowRight.svg';
import { ReactComponent as Logo } from '../../icons/Logo.svg';
import { SidebarNavLink } from './components';
import { SIDEBAR_FOOTER_LINKS, SIDEBAR_LINKS } from './const';
import { Drawer, DrawerHeader } from './style';



export const Sidebar: FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader sx={{ padding: open ? '2rem 0.5rem' : '2rem 0.1875rem' }}>
        <Link to='/'>
          <Logo />
        </Link>
      </DrawerHeader>
      <Divider />
      <ButtonGroup orientation='vertical' color='primary'>
        {SIDEBAR_LINKS.map((link, index) => (
          <SidebarNavLink {...link} key={index} />
        ))}
      </ButtonGroup>
      <Box flexGrow={1} />
      <Divider />
      <ButtonGroup orientation='vertical' color='primary' >
        {SIDEBAR_FOOTER_LINKS.map((link, index) => (
          <SidebarNavLink {...link} key={index} />
        ))}
      </ButtonGroup>
      <Button fullWidth onClick={() => setOpen(open => !open)}
        sx={{ justifyContent: 'end', marginTop: '3rem', fill: '#262626', paddingRight: '0.8rem' }}
      >
        {open ? <ArrowLeft /> : <ArrowRight />}
      </Button>
    </Drawer >
  )
}


