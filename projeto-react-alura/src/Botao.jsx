import './Botao.css';

function Botao({ children }) {
  return (
   <button type='submit' className='form_botao'>
    {children}
</button>
  );
}

export default Botao;