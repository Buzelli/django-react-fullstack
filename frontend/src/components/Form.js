import React, {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {produtos} from "../produtos";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import {
addProduct,
removeProduct
} from '../slices/productSlices'
import { Button } from "@mui/material";

export default function FormHome() {
    
    const dispatch = useDispatch();

    const products = useSelector((state) => state.productStore.products)

    const [item, setItem] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const buscarItem = (e) =>{
        const item = produtos.filter((item)=>item.nome.includes(e.toString()))
        console.log(item)
        if(item){
          setItem(item)
        }
        console.log(products)
    }

    const addToTable = (item) =>{
      dispatch(addProduct(item))
    }

    useEffect(()=>{
      console.log(products)
    },[products]);

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField 
            id="outlined-basic" 
            label="Item" 
            variant="outlined" 
            onChange={(e) => buscarItem(e.target.value)}
        />
        <TextField 
            id="outlined-basic" 
            label="Quantidade" 
            variant="outlined" 
            value={quantidade} 
        />
        {
          item ?
          item.map((it)=>
          <Button onClick={(e)=>addToTable(it)}>{it.nome}</Button>
          ):
          (<h4></h4>)
        }
    </Box>
  );
}
