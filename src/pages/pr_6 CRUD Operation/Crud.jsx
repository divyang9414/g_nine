import React, { useState, useEffect } from "react"
import './crud.css'

const Crud = () => {
    const [input, setInput] = useState({})
    const [edit, setEdit] = useState(false)
    const [id, setId] = useState()
    const [products, setProduct] = useState(() => {
        return JSON.parse(localStorage.getItem("products")) || []
    })

    useEffect(() => {
        console.log("hello")
        localStorage.setItem("products", JSON.stringify(products))
    }, [products])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (edit) {
            var pro = [...products]
            pro[id] = input
            setEdit(false)
            setProduct(pro)
        } else {
            setProduct([...products, input])
        }
        setInput({})
    }

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleDelete = (id) => {
        var pro = [...products]
        pro.splice(id, 1)
        setProduct(pro)
    }
    const handleEdit = (id) => {
        setInput(products[id])
        setEdit(true)
        setId(id)
    }

    return (
        <>
            <section id="crud">
                <center>
                    <div className="w-50">
                        <h1 className="d-inline-block px-3 border-dark border-bottom rounded-3 mb-5">Products</h1>
                        <form className="w-100" action="" onSubmit={handleSubmit}>
                            <input className="w-50 fs-3 py-1 px-2" type="text" name="name" value={input.name || ""} onChange={handleChange} placeholder="Enter product name"/>
                            <input className="w-50 fs-3 py-1 px-2" type="number" name="price" value={input.price || ""} onChange={handleChange} placeholder="Enter product price"/>
                            <button className="btn btn-primary w-100 mt-3 mb-0">{edit ? "UPDATE" : "ADD"}</button>
                        </form>
                        <table className="table-auto mt-5 w-100">
                            <thead>
                                <tr>
                                    <th colSpan={2} className="w-50 text-center">
                                        <span className=" border-dark border-bottom rounded-3 px-3">Name</span>
                                    </th>
                                    <th colSpan={2} className="w-50 text-center">
                                        <span className=" border-dark border-bottom rounded-3 px-3">Price</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td className="text-center">
                                            <button className="text-primary h1" onClick={() => handleEdit(index)}>Edit</button>
                                        </td>
                                        <td className="text-center">
                                            <button className="text-danger h1" onClick={() => handleDelete(index)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </center>
            </section>
        </>
    )
}

export default Crud
