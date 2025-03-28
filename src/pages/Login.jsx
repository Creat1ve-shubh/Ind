import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="flex flex-col  max-w-xl border-2 rounded-xl border-black my-10 h-[90vh] p-10 mx-[60vh] text-center">
            <h1 className="text-5xl font-bold text-start ">Signin to your <br></br> PopX account</h1>
            <p className="text-gray-400 mt-2 text-2xl text-start"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            <div className="flex flex-col items-center justify-center h-full">
                <input type="email" placeholder="Email" className="mt-4 p-2  border rounded w-full" />
                <input type="password" placeholder="Password" className="mt-2 p-2 border rounded w-full" />
                <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg">Login</button>
                <Link to="/signup" className="mt-2 text-purple-600">Create an account</Link>
            </div>
        </div>
    );
}