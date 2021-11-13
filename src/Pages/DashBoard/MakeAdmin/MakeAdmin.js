import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)

    const handdleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleMakeAdmin = e => {
        const user = { email }
        fetch('https://damp-mesa-00086.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                    console.log(data);
                    e.target.reset()


                };
            })

        e.preventDefault()
    }

    return (
        <div className="py-5 mt-5">
            <h1 className="p-3">MAKE ADMIN</h1>
            {success && <div className="alert alert-success mb-3 m-auto mt-3 w-50" role="alert">
                MAKE SUCCESS ADMIN
            </div>}
            <form onSubmit={handleMakeAdmin}>
                <input className="w-50 py-1 text-center"
                    type="email"
                    name="email"
                    onBlur={handdleOnBlur}
                    required
                    placeholder="Specific e-mail for make an admin dashboard" />
                <br />
                <input className="w-50 mt-3 fw-bold text-white login" type="submit" value="MAKE ADMIN" />
            </form>
        </div>
    );
};

export default MakeAdmin;