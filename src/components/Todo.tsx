import React, {useState} from 'react';
import Textfield from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

interface ITodo {
    id:number,
    title:string,
    isdone:false;
}

//デザイン
const useStyles = makeStyles({
    root:{
        // cssライクな記法で記載  
    }
});

const Todo : React.FC = () =>{
    // デザインを受け取る
    const classes = useStyles();

    // state（状態を定義する）  
    const [todos,settodo] = useState<ITodo[]>([]);


return (
    <React.Fragment>
        <div>
            <h3>TodoList</h3>
            <form>
                <div>
                    <Textfield id="new-todo" label="どんなタスクがありますか？"/>
                </div>
            </form>
        </div>
    </React.Fragment>
    );
};


export default Todo;