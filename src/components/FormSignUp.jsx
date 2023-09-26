import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function FormSignUp(){

    const [name, setName] = useState("")

    useEffect(() => {
        console.log("Name cambió: ",name)
    }, [name])

    return  <div>
                <TextField 
                    id="name" 
                    label="Nombre" 
                    variant="outlined"
                    fullWidth
                    margin="normal" 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <TextField 
                    id="last-name" 
                    label="Apellidos" 
                    variant="outlined"
                    fullWidth
                    margin="normal" 
                />
                <TextField 
                    id="email" 
                    label="Email" 
                    variant="outlined"
                    fullWidth
                    margin="normal" 
                />
                
                <FormGroup>
                    <FormControlLabel 
                        control={<Switch defaultChecked />} 
                        label="Promociones" 
                    />
                    <FormControlLabel 
                        required 
                        control={<Switch />} 
                        label="Novedades" />
                </FormGroup>              
                <Button variant="contained">Registrarse</Button>
            </div>
}

export default FormSignUp