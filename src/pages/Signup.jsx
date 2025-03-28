import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    const [isAgency, setIsAgency] = useState(null)
    return (
        <div className="flex flex-col gap-4  max-w-xl my-10 rounded-xl border-2 border-black max-h-[90vh] p-10 mx-[60vh] text-center">
            <h1 className="text-5xl text-start font-bold">Create your <br></br> PopX account</h1>
            <input type="text" placeholder="Name" className="mt-4 p-2 border rounded w-full" />
            <input type="number" placeholder="Phone Number" className="mt-2 p-2 border rounded w-full" />
            <input type="email" placeholder="Email" className="mt-2 p-2 border rounded w-full" />
            <input type="password" placeholder="Password" className="mt-2 p-2 border rounded w-full" />
            <input type="text" placeholder="Company Name" className="mt-2 p-2 border rounded w-full" />
            <div className="mt-4 w-full text-left">
                <p className="text-sm font-semibold">Are you an Agency? *</p>
                <div className="flex items-center gap-4 mt-2">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="agency"
                            value="yes"
                            checked={isAgency === "yes"}
                            onChange={() => setIsAgency("yes")}
                            className="hidden"
                        />
                        <span className={`w-5 h-5 inline-block border-2 rounded-full ${isAgency === "yes" ? 'bg-purple-600 border-purple-600' : 'border-gray-400'}`}></span>
                        Yes
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="agency"
                            value="no"
                            checked={isAgency === "no"}
                            onChange={() => setIsAgency("no")}
                            className="hidden"
                        />
                        <span className={`w-5 h-5 inline-block border-2 rounded-full ${isAgency === "no" ? 'bg-purple-600 border-purple-600' : 'border-gray-400'}`}></span>
                        No
                    </label>
                </div>
            </div>
            <div className="mt-36">
                <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg">Sign Up</button>
                <Link to="/login" className="mt-2 text-purple-600">Already have an account? Login</Link>
            </div>
        </div>
    );
}