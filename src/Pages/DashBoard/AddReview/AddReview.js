import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddReview.css'

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://damp-mesa-00086.herokuapp.com/review', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('Your Service Add Successfully')
                    reset()
                }
            })
    };
    return (
        <div className="addReview">
            <h1 className="p-5 text-center">Give Your FeedBack</h1>
            <form className="pb-5" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Your Name" required />
                <input {...register("img")} placeholder="Add Image URL" required />
                <textarea rows="3" {...register("review")} placeholder="Please Fill Your Feedback" required />
                <input type="number" {...register("Retting")} placeholder="Give Your rating 1 to 5" />
                <input className="bg-feedback" type="submit" />
            </form>

        </div>
    );
};

export default AddReview;