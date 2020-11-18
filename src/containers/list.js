import React, { useState, useEffect } from 'react';
const TodoList = (props) => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        setResult(props.data)
    }, [props.data])

    const getItem = (id) => {
        props.getItem(id)
    }

    const onRemove = (id) => {
        props.onRemove(id);
    }

    return (
        <div className="text-center">
            <ul id="myUL" className="" style={{marginTop:"5px", width:"50%"}}>
            {/*<li className="checked">Pay bills</li>*/}
            {
                result.length > 0 ? result.map((value, key) => <li key={key} ><div onClick={() => getItem(value.id)}>{value.title}</div> <div onClick={() => onRemove(value.id)} style={{textAlign: 'right', float: "right", marginBottom:"3px"}}><button>x</button></div></li>) : (
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )
            }
        </ul>
        </div>
        
    )
}

export default TodoList;