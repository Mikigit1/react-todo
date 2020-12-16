import { combineReducers } from 'redux'
import {createSelector} from 'reselect'
import { TypeOf } from 'yup';

// アクションType→アクションcreaterを一意に定めるオブジェクトを作ってる。
export const actionTypes ={
    ADD_TODO:'TODO/ADD_TODO',
    DONE_TODO:'TODO/DONE_TODO',
    DELETE_TODO:'TODO/DELETE_TODO',
    SET_FILTER_ALL:'TODO/SET_FILTER_ALL',
    SET_FILTER_OPEN:'SET_FILTER_OPEN'
}as const;
// as constをつけるとreadonlyになる

//actionCreater
export const addTodo = (text:string) => ({type:actionTypes.ADD_TODO,payload:{text}});
export const doneTodo = (id:number) => ({type:actionTypes.DONE_TODO,payload:{id}});
export const deleteTodo = (id:number) => ({type:actionTypes.DELETE_TODO,payload:{id}});
export const setFilterAll = () => ({type:actionTypes.SET_FILTER_ALL});
export const setFilterOpen = () => ({type:actionTypes.SET_FILTER_OPEN});

export type IAction = ReturnType<typeof addTodo> | ReturnType<typeof doneTodo> | ReturnType<typeof deleteTodo> | ReturnType<typeof setFilterAll> | ReturnType<typeof setFilterOpen>

interface IItem {
    id:number;
    name:string;
    isDone:false;
} 
const filterValue ={
    ALL:'all',
    OPEN:'open',
} as const;
type IFIlterValue = typeof filterValue.ALL | typeof filterValue.OPEN

export interface ITodoState {
    list: IItem[];
    currentId:number;
    filter:IFIlterValue;
}

const initialState:ITodoState ={
    list:[
        {
            id:1,
            name:'掃除',
            isDone:false
        },
        {
            id:2,
            name:'洗濯',
            isDone:false
        },
        {
            id:3,
            name:'料理',
            isDone:false
        }
    ],
    currentId:3,
    filter:filterValue.ALL
};

export const todo = (state = initialState,action:IAction):ITodoState =>{
    switch(action.type){
        case actionTypes.ADD_TODO:{
            return {
                ...state,
                list:[...state.list,{id:state.currentId+1, name:action.payload.text,isDone:false}],
                currentId:state.currentId+1
            };
        }
        
    }
}
//

