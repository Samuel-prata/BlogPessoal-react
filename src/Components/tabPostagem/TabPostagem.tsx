import React, { useState } from "react";
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import {TabContext,  TabPanel } from '@material-ui/lab';
import { Box } from "@mui/material";
import ListaPostagens from '../postagens/ListaPostagens';
import './TabPostagem.css'



function TabPostagem() {
    const [value, setValue] = useState('1')
   function handleEvent (event:React.ChangeEvent<{}>, newValue: string) {
      setValue(newValue)
    }

    return (
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered className="butPost" onChange={handleEvent} >
                        <Tab className="fontes" label="Todas as Postagens" value='1'></Tab>
                        <Tab className="fontes" label="Sobre nós" value='2'></Tab>
                    </Tabs>
                </AppBar>
                <TabPanel value="1">
                    <Box display='flex' flexWrap='wrap' justifyContent='center'>
                        <ListaPostagens />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom style={{color:'white'}} component='h5' align="center" className="titulo">Sobre nós</Typography>
                    <Typography variant="body1" style={{color:'white'}} align="justify"> Lorem ipsum dolor sit amet consecteturu adipisicing elit. Odit accusantium consequatur, reiciendis sed libero recusandae ratione officia laborum provident ex sequi eius quas rem, laudantium laboriosam fugiat mollitia rerum quam?</Typography>
                </TabPanel>
            </TabContext>
        </>

    );
}
export default TabPostagem;