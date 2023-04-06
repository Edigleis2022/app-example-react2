
import { AppBar, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { ContactCard } from '../../components/ContactCard';
import { ContactList } from '../../components/ContactList';
import { Contact } from '../../Types';



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
        display='flex'
        flexDirection='column'
        alignItems='center'
        padding={2}
        mt={10}
        sx={{
          bgcolor: "palette.background.default",
          width: "100%",
        }}
        minHeight={100}
      >
        {children}
      </Box>
    </>
  );
}