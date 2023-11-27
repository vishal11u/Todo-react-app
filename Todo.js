import React, { useState } from 'react';

const Todo = () => {
    const initialData = {
        "enter": ""
    };

    const [data, setData] = useState(initialData);
    const [todo, setTodo] = useState([]);

    const sendData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const Send = () => {
        if (data.enter === "") {
            alert("Enter New To-do ");
        } else {
            setTodo([...todo, data]);
            setData(initialData); // Clear the input after adding todo
        }
    };

    const deleteData = (i) => {
        let row = [...todo];
        row.splice(i, 1);
        setTodo(row);
    };

    const updateData = (i) => {
        let selectedTodo = todo[i];
        setData({ ...data, enter: selectedTodo.enter });
        //remove the updated todo from the list
        let updatedTodos = todo.filter((item, index) => index !== i);
        setTodo(updatedTodos);
    };

    return (
        <div className='h-screen bg-blue-500'>
            <div className='pt-32 pb-5 text-5xl flex justify-center font-semibold shadow-lg'>
                <h1>To-do App List</h1>
            </div>
            <div className=' flex justify-center mt-5'>
                <div className='flex bg-white py-8 md:py-10 md:h-32 px-6 md::px-12 rounded-md'>
                    <div className=''>
                        <input className='border-2 lg:w-[20vw] py-2 rounded-lg mr-3 text-xl px-4' type='text' name='enter' value={data.enter || ""} placeholder='Add your new todo' onChange={sendData} />
                    </div>
                    <div className=''>
                        <button className='rounded-lg bg-orange-400 py-2 px-3 hover:bg-gray-300 text-xl' type='button' onClick={Send}>➕</button>
                    </div>
                </div>
            </div>

            <div className='flex justify-center mt-2  '>
                <table>
                    <tbody>
                        {todo.map((item, i) => (
                            <tr className='border-b shadow-2xl bg-indigo-400' key={i}>
                                <td className=' w-[19.5vw] px-4 text-xl py-4 font-medium'>{item.enter}</td>
                                <button className='px-3 py-2 mt-1.5 mr-2 rounded-lg bg-red-300 hover:bg-gray-300 text-xl' onClick={() => updateData(i)}>✏️</button>
                                <button className='px-3 py-2 mt-1.5 mr-2 rounded-lg bg-green-400 hover:bg-gray-300 text-xl' onClick={() => deleteData(i)}>❌</button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Todo;
