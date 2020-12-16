import React, {useState} from 'react';
import Textfield from '@material-ui/core/TextField';

import * as Yup from 'yup';
import {useDispatch,useSelector} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { isTemplateExpression } from 'typescript';





interface Ivalues {
    title:string;
};
const initialValues:Ivalues = {
    title:'',
};

// Yupとは
const validationSchema = Yup.object({
    title:Yup.string().max(15,'${max}文字以下で入力してください').required('入力してください'),
});

const useStyles = makeStyles((theme)=>({
    textBox:{
        width:'300px',
    },
    addButton:{
        marginLeft:'12px',
        color:'#FFF',
        backgroundColor:theme.palette.secondary.main,
        '&:hover':{
            backgroundColor:theme.palette.secondary.dark,
        }
    }
}));

const Todo:React.FC = () =>{
    const dispatch =useDispatch();
    const items =useSelector(selectfilterdTodoList);
    return(
        <div></div>
    )
}

export default Todo;