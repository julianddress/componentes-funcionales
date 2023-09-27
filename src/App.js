import './App.css';
import FormSignUp from './components/FormSignUp';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {

  const handleSubmit = (valores) => {
    console.log("Valores desde App: ", valores)
  }
  return (
          <Container  maxWidth="sm">
            <Typography align='center' variant='h3'component="h3" >Formulario Registro</Typography >
            <FormSignUp handleSubmit={handleSubmit}/>
          </Container>
  );
}

export default App;
