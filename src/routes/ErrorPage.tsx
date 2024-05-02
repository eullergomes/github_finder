import classes from './ErrorPage.module.css'

const ErrorPage = () => {
  return ( 
    <div className={classes.error}>
      <h1>404</h1>
      <h2>ERRO 404 - PÁGINA NÃO ENCONTRADA</h2>
      <p>A página solicitada não pôde ser encontrada</p>
    </div> 
  );
}
 
export default ErrorPage;