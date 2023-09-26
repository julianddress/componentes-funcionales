import './App.css';
import FormSignUp from './components/FormSignUp';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {
  return (
          <Container  maxWidth="sm">
            <Typography align='center' variant='h3'component="h3" >Formulario Registro</Typography >
            <FormSignUp />
          </Container>
  );
}

export default App;
