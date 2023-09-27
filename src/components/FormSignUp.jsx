import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function FormSignUp({handleSubmit}){

    const [name, setName] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [promo, setPromo] = useState(true)
    const [nove, setNove] = useState(true)

    return  <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit({
                    name,
                    apellido,
                    email,
                    promo,
                    nove
                })
            }}>
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
                    onChange={(e) => setApellido(e.target.value)}
                    value={apellido} 
                />
                <TextField 
                    id="email" 
                    label="Email" 
                    variant="outlined"
                    fullWidth
                    margin="normal" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                
                <FormGroup>
                    <FormControlLabel 
                        control={
                            <Switch 
                                checked={promo}
                                onChange={(e) => setPromo(e.target.checked)}
                            />
                        }
                        label="Promociones" 
                    />
                    <FormControlLabel 
                        control={
                            <Switch 
                                checked={nove}
                                onChange={(e) => setNove(e.target.checked)}
                            />
                        }
                        label="Novedades" 
                    />
                </FormGroup>              
                <Button variant="contained" type='submit'>Registrarse</Button>
            </form>
}

export default FormSignUp