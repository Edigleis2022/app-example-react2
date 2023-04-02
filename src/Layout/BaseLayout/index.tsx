
import { AppBar, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { ContactCard } from '../../components/ContactCard';


type BaseLayoutProps = {
  children: React.ReactNode;
  appBarTitle: string;
}
export function BaseLayout({ children, appBarTitle }: BaseLayoutProps) {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant='h5'>{appBarTitle}</Typography>
        </Toolbar>
      </AppBar>
      <Box 
      >
        {children}
      </Box>
    </>
  );
}