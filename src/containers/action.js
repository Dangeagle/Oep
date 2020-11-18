import { useEffect, useState } from "react";

const TodoAction = (props) => {
    const [data, setData] = useState({});
    const [isSubmit, setIsSubmit] = useState(props.isSubmit);
    const onSave = (event) => {
        event.preventDefault();
        // setIsSubmit(true);
        props.onSubmit(data);
    };

    const onchange = (params) => {
        let name = params.target.name;
        let value = params.target.value;
        setData({[name]: value});
        if(!value){
            props.changeCreate();
        }
    }

    useEffect(() => {
        setIsSubmit(props.isSubmit);
    }, [props.isSubmit])

    useEffect(() => {
        setData({...props.item, title: props.item.title});
    }, [props.item])

    return (
        <div id="myDIV" className="header container text-center " style={{width: '50%'}}>
            <form onSubmit={(e) => onSave(e)}>
                <h2 style={{ margin: '5px' }}>My List Thing</h2>
                <input disabled={isSubmit} type="text" onChange={onchange} name="title" id="myInput" placeholder="Title..." value={data.title || ""} />
                <button disabled={isSubmit} type="submit" className="addBtn">{props.action === "CREATE" ? "Thêm" : "Sửa"}</button>
                
            </form>
        </div>
    )
}

export default TodoAction;