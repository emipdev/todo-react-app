import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import {toTodo,toInProgress,toDone,removeTodo} from '../store/actions';

function TodoDetail({todos,toTodo,toDone,toInProgress,removeTodo}){
    let {id} = useParams();
    let [todo] = todos.filter(todo => todo.id === Number(id));
    if(todo){
        return(
            <div className="details">
                <h4>{todo.thing}</h4>
                <p>{todo.description}</p>
                <span>Date: {todo.date}</span>
                <span>Status: {todo.status}</span>
                <div>
                    <button onClick={() => toTodo(todo.id)}>To Todo</button>
                    <button onClick={() => toInProgress(todo.id)}>To InProgress</button>
                    <button onClick={() => toDone(todo.id)}>To Done</button>
                </div>
                <button className="del" onClick={() => removeTodo(todo.id)}>Delete</button>
            </div>
        )
    } else return (
        <div>
            The ID you're searching for doesn't exists, or was deleted!!
        </div>
    )
}

function mapStateToProps(state){
    return ({
        todos: state
    })
}

export default connect(mapStateToProps,{toTodo,toDone,toInProgress,removeTodo})(TodoDetail);