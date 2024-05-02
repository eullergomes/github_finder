import { MdOutlineError } from "react-icons/md";
import classes from './ErrorRequest.module.css';

interface ErrorRequestProps {
  error: string; // Definindo corretamente o tipo de error
}

const ErrorRequest = ({ error }: ErrorRequestProps) => { // Usando desestruturação para extrair a propriedade error
  return ( 
    <div className={classes.error}>
      <MdOutlineError />
      <p>{error}</p>
    </div>
  );
}

export default ErrorRequest;
