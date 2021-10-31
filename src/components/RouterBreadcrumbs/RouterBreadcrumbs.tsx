import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link, { LinkProps } from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';


const breadcrumbNameMap: { [key: string]: string } = {
    '/request': 'Запрос',
    '/request/united_json': 'Единый запрос json',
};

interface LinkRouterProps extends LinkProps {
    to: string;
    replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => (
    <Link {...props} component={RouterLink as any} />
);

export const RouterBreadcrumbs: FC = () => {
    const location = useLocation()
    const pathnames = location.pathname.split('/').filter((x) => x);
    if (pathnames.length < 2) {
        return null
    }
    return (
        <Breadcrumbs sx={{ mb: 2, px: 5 }}>
            {/* <LinkRouter underline="hover" color="inherit" to="/">
                Home
            </LinkRouter> */}
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return last ? (
                    <Typography color="text.primary" key={to}>
                        {breadcrumbNameMap[to] ?? value}
                    </Typography>
                ) : (
                    <LinkRouter underline="hover" color="inherit" to={to} key={to}>
                        {breadcrumbNameMap[to] ?? value}
                    </LinkRouter>
                );
            })}
        </Breadcrumbs>
    );
}