import { Link } from "react-router-dom";
import pfp from "/pfp.jpg";

export default function Account() {
    return (
        <div className="flex flex-col items-center justify-center rounded-xl border-2 mx-[60vh] my-10 max-w-xl border-black h-[90vh] p-10">
            <div className="w-full max-w-md bg-white shadow-lg  rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
                <div className="flex items-center gap-4">

                    <img
                        src={pfp}
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="text-lg font-bold">Marry Doe</h3>
                        <p className="text-gray-500 text-sm">Marry@gmail.com</p>
                    </div>
                </div>
                <p className="mt-4 text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam.
                </p>
            </div>
            <button className="mt-4 w-full max-w-md bg-red-600 text-white py-2 rounded-lg">
                Logout
            </button>
            <Link to="/" className="mt-2 text-purple-600">Back to Home</Link>
        </div>
    );
}
