import React, { useState } from "react"
import { FaStar } from "react-icons/fa"
import style from './review.module.css'

const Review = () => {
    const [formData, setFormData] = useState({
        name: "",
        rating: 0,
        message: "",
    })

    const [testimonials, setTestimonials] = useState([])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newTestimonial = {
            name: formData.name,
            rating: formData.rating,
            message: formData.message,
        }

        if (!formData.name || !formData.message || formData.rating === undefined) {
            alert("Please fill in all required fields (Name, Rating, and Message).")
            return
        }

        setTestimonials([...testimonials, newTestimonial])

        setFormData({ name: "", rating: 0, message: "" })
    }

    const generateStars = (rating) => {
        return Array.from({ length: rating }, (_, index) => <FaStar key={index} className={`inline ${style.on}`}/>)
    }

    return (
        <section className={style.bgImg}>
            <div className="container mx-auto">
                <h1 className="mb-5 text-center font-semibold text-white">User Feedback</h1>
                <div className="row">
                    <form className="col-lg-6 py-3" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="form-label text-white fs-4">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control fs-5"
                                onChange={handleInputChange}
                                value={formData.name}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label text-white fs-4 me-5">Rating</label>
                            {[1, 2, 3, 4, 5].map((index) => (
                                <label key={index} className={`${index <= formData.rating ? style.on : style.off}`}>
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={index}
                                        checked={index === formData.rating}
                                        onChange={() => setFormData({ ...formData, rating: index })}
                                    />  
                                    <span className="me-2 fs-2">
                                        <FaStar className="inline" />
                                    </span>
                                </label>
                            ))}
                        </div>
                        <div className="mb-4">
                            <label className="form-label text-white fs-4">Message</label>
                            <textarea
                                name="message"
                                className="form-control fs-5"
                                onChange={handleInputChange}
                                value={formData.message}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg w-100">
                            Submit
                        </button>
                        <p className="text-xs text-white mt-3">
                            We are thankfull to you, that you gave your important time to share your respnse with us.
                        </p>
                    </form>
                    <div className="col-lg-6 py-3 border border-1 rounded-4 height">
                        <div className={style.reviewBox}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-light px-3 py-2 mb-2 rounded border border-1">
                                    <p className="fs-5 text-dark mb-2">{testimonial.name}</p>
                                    <div className="d-flex">
                                        <div className="w-25 border-end rounded-4">
                                            <img src="https://dummyimage.com/60x60/ce4c4c/000" className="rounded-circle ms-2" alt="" />
                                            <span className="d-block mt-2"> {generateStars(testimonial.rating)}</span>
                                        </div>
                                        <p className="fs-5 w-75 ps-3 text-dark">
                                            <span className="leading-relaxed">{testimonial.message}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review
