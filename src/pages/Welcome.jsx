import { Link } from "react-router-dom";

export default function Welcome() {
    return (
        <div className="flex flex-col  max-w-xl my-10 mx-[60vh] border-2 border-black h-[90vh] rounded-xl p-10 text-center">
            <h1 className="text-5xl text-start font-bold mt-[60vh]">Welcome to PopX</h1>
            <p className="text-gray-500 text-start mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/signup" className="mt-4 w-full bg-purple-700 text-white py-2 rounded-lg  items-center text-center">Create Account</Link>
            <Link to="/login" className="mt-2 w-full bg-purple-300 text-white py-2 rounded-lg text-center">Already Registered? Login</Link>
        </div>
    );
}
