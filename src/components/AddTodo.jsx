import { connect } from 'react-redux';
import {addTodo} from '../store/actions';
import {useState} from 'react';

function AddTodo({addTodo}){
    const [data,setData] = useState({
        thing: "",
        description: "",
        date: ""
    });
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(data);
        setData({
            thing: "",
            description: "",
            date: ""
        })
    }

    return (
        <div className="add">
            <form onSubmit={handleSubmit}>
                <label>Thing</label>
                <input required name='thing' value={data.thing} onChange={handleChange}/>
                <label>Description</label>
                <textarea name='description' value={data.description} onChange={handleChange}/>
                <label>Date</label>
                <input name='date' value={data.date} onChange={handleChange}/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default connect(null,{addTodo})(AddTodo)