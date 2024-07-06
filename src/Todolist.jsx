import React, { useState } from 'react'

export const Todolist = () => {
    const [data, setData] = useState([]);
  const [data1, setData1] = useState({ title: '', description: '', status: 'notcompleted' });


  const handleChange = (event) => {
    setData1({ ...data1, [event.target.name]: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, data1]);
    setData1({ title: '', description: '', status: 'notcompleted' });
  };


  return (
    <div className='w-screen h-screen flex flex-col p-4'>
        <form onSubmit={handleSubmit}>
        <div className='p-6 rounded-lg w-[450px]'>
          <div className='font-bold text-2xl'>TODO LIST</div>
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <label className='w-28 text-white '>TITLE:</label>
              <input onChange={handleChange} value={data1.title} className='text-black h-9 bg-white pl-3 w-72 rounded-md border' name='title' type='text' />
            </div>
            <div className='flex items-center'>
              <label className='w-28 text-white'>DESCRIPTION:</label>
              <input onChange={handleChange} value={data1.description} className='text-black h-9 w-72 rounded-md border' name='description'type='text'/>
            </div>
            <div className='flex items-center'>
              <label className='w-28 text-white font-semibold'>STATUS:</label>
              <select onChange={handleChange} value={data1.status} className='text-black h-9 bg-white pl-3 w-72 border' name='status'>
                <option value="completed">Complete</option>
                <option value="notcompleted">Not Completed</option>
              </select>
            </div>
            <button type='submit' className='bg-white rounded-md border px-4 py-2 mt-4'>ADD</button>
          </div>
        </div>
      </form>

      <table className='w-[600px] bg-white rounded-lg shadow-lg'>
        <thead className='bg-slate-400 text-white'>
          <tr>
            <th className='p-3'>TITLE</th>
            <th className='p-3'>DESCRIPTION</th>
            <th className='p-3'>STATUS</th>
            <th className='p-3'>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className='text-center'>
              <td className='p-3'>{item.title}</td>
              <td className='p-3'>{item.description}</td>
              <td className='p-3'>{item.status}</td>
              <td className='p-3 flex justify-center gap-4'>
                <button className=' px-2 py-1 '>EDIT</button>
                <button className=' px-2 py-1 '>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
