import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import Todo from './Todo';
import {removeTodo} from '../store/actions';

function ToDos({status,todos,removeTodo}){
    return(
        <div className="todos">
            <span>{status}</span>
            {todos.map(todo => {
                if(todo.status === status){
                    return (
                        <div className="todo" key={todo.id}>
                            <button onClick={() => removeTodo(todo.id)}>X</button>
                            <Link to={`/edit/${todo.id}`}>
                                <Todo {...todo} />
                            </Link>
                        </div>
                    )
                }
                return null;
            })}
        </div>
    )
}

function mapStateToProps(state){
    return {
        todos: state
    }
}

export default connect(mapStateToProps,{removeTodo})(ToDos);