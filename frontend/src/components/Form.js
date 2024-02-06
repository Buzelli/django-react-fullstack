import React, {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {produtos} from "../produtos";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import {
addProduct,
removeProduct
} from '../slices/productSlices'
export default function FormHome() {
    
    const dispatch = useDispatch();

    const products = useSelector((state) => state.productStore)

    const [item, setItem] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const buscarItem = (e) =>{
        const item = produtos.filter((item)=>item.nome.includes(e.toString()))
        console.log(item)
        if(item){
          dispatch(addProduct(item));
        }
        console.log(products)
    }

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
    </Box>
  );
}
