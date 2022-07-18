import { Card, CardContent, CardHeader, Grid, FormControl,
     TextField, Button, CircularProgress, Collapse } from '@material-ui/core'
import { Alert, Box, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

//import { red } from '@material-ui/core/colors';

export default function PartidaForma(){
    const [partida, setPartida] = useState({
        clave: '',
        descripcion: ''
    })

    const [loading, setLoading] = useState(false)
    const [editing, setEditing] = useState(false)
    const [open, setOpen] = useState(false);
    const [mensaje, setMensaje] = useState('');

    const navigate=useNavigate()

    const params = useParams()

    
    
    const handleSubmit= async (e) => {
        e.preventDefault()
        setLoading(true)
        if(editing){            
            await fetch(`http://localhost:4000/partidas/${params.id}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(partida)
            })

        }
        else{
           
            const res=await fetch("http://localhost:4000/partidas",{
                method: "POST",
                body: JSON.stringify(partida),
                headers: {"Content-Type": "application/json"},
            })
            const data = await res.json()
            //colocar un mensaje para orientar al usuario, se está validando desde sequelize
    
            if(data.message)
            {                
                setOpen(true)
                data.message==="llave duplicada viola restricción de unicidad «partidas_descripcion_key»" ?
                setMensaje('La descripción ya existe') : setMensaje('La clave ya existe')
                setLoading(false)
                return
            }
            else{
                setOpen(false)
            } 
        }
        setLoading(false)

        navigate('/')
    }

    const cargarPartida=async(id)=>{
        const res = await fetch(`http://localhost:4000/partidas/${id}`)
        const data = await res.json()
        setPartida({clave: data.clave, descripcion: data.descripcion})
        setEditing(true) //Estado
    }

    useEffect(()=>{
        if(params.id){
            cargarPartida(params.id)
        }
    }, [params.id])

    const handleChange = e =>{
        setPartida({...partida, [e.target.name]: e.target.value})
        //copio todo lo que tenga la tarea y luego actualizo lo que se está tecleando
    }
    return(
        <Grid container direction='row' justifyContent='center' style={{marginTop:50}}>
            <Grid item xs={4}>
                <Card>
                    <CardHeader title={editing ? 'Editar Partida':'Agregar Nueva Partida'}></CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                        <FormControl>
                            
                           <TextField label='Escriba la clave' name='clave' onChange={handleChange} value={partida.clave}/>
                           <TextField label='Escriba la descripción' name='descripcion' multiline minRows='5' onChange={handleChange} value={partida.descripcion}/>
                           <Button variant='contained' color='primary' type='submit' style={{marginTop:20}} disabled={!partida.clave || !partida.descripcion}>
                                {loading ? <CircularProgress color='inherit' size={24}></CircularProgress> : 'Guardar'}
                           </Button>                           
                        </FormControl>
                        </form>
                        <Box sx={{ width: '100%' }}>
                            <Collapse in={open}>
                                <Alert severity='error'
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                        >
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    }
                                    style={{marginTop: 30}}
                                >
                                    {mensaje}
                                </Alert>
                            </Collapse>
                        </Box>
                    </CardContent>
                </Card>

            </Grid>
        </Grid>
    )
}