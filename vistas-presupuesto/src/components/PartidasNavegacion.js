import { AppBar, Box, Button, Container, Toolbar, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';

export default function PartidasNavegacion(){
    const navigate = useNavigate()
    return(
        <Box style={{ flexGrow: 1 }}>
            <AppBar position='sticky' color='primary' >
                <Container>
                    <Toolbar>
                        <Typography variant='h5' style={{ flexGrow: 1 }}>
                            <Link to="/" style={{textDecoration: 'none', color:'white'}}>Gestión presupuestal</Link> / Catálogo de Partidas
                        </Typography>
                        <Button variant='outlined' color='inherit' onClick={() => navigate("/partidas/agregar")}>Agregar</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}