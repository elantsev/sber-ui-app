import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { StyledNavLink } from './style';

export const SidebarNavLink = ({
  path,
  title,
  icon,
}: {
  path: string;
  title: string;
  icon: React.FC;
}): JSX.Element => {
  const Icon: React.FC = icon;
  return (
    <StyledNavLink to={path}>
      <Button
        fullWidth
        sx={{
          textTransform: 'none',
          color: 'inherit',
          justifyContent: 'start',
        }}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <Box sx={{ color: 'inherit', fill: 'inherit' }} px={0.5}>
            <Icon />
          </Box>
          <Typography sx={{ whiteSpace: 'pre-wrap' }} textAlign="left">
            {title}
          </Typography>
        </Box>
      </Button>
    </StyledNavLink>
  );
};
