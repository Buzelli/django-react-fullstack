import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';


export default function OverView() {
    const [valorTotal, setValorTotal] = useState('')
    const [qtdItens, setQtdItens] = useState('')
    
    const products = useSelector(state => state.productStore.products)

    useEffect(()=>{
      setQtdItens(products.length);
      setValorTotal(products.reduce((total, item) => Number(total) + Number(item.valor), 0));
    },[products]);
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 250,
          height: 250,
        },
      }}
    >
      <Paper elevation={3}>
        <h4>Resumo</h4>
        <p>Total: <b>R$</b><b>{valorTotal}</b></p>
        <p>Qtd Itens: <b>{qtdItens}</b></p>
      </Paper>
    </Box>
  );
}
