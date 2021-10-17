import React, {SyntheticEvent, useState} from 'react';
import Layout from "../layouts/Layout";
import {useRouter} from "next/router";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("password",password)

        await router.push('/login');
    }

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
            <form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please register</h1>

                <input className="form-control flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" placeholder="Name" required
                       onChange={e => setName(e.target.value)}
                />

                <input type="email" className="form-control flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" placeholder="Email" required
                       onChange={e => setEmail(e.target.value)}
                />

                <input type="password" className="form-control flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" placeholder="Password" required
                       onChange={e => setPassword(e.target.value)}
                />

                <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" type="submit">Submit</button>
            </form>
            </div>
        </Layout>
    );
};

export default Register;