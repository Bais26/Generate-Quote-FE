import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomQuote } from "../components/quoteSlice";
import { RootState, AppDispatch } from "../app/store";
import { logout } from "../components/authSlice";
import { useNavigate } from "react-router-dom";

const QuoteComponent: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const Judul = useSelector((state: RootState) => state.quotes.Judul);
    const quote = useSelector((state: RootState) => state.quotes.Quote);
    const status = useSelector((state: RootState) => state.quotes.status);
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    const handleFetchQuote = () => {
        dispatch(fetchRandomQuote());
    };
    const handleLogout = () => {
        dispatch(logout()); // Memanggil action logout untuk menghapus token dan mengubah state
        navigate("/login"); // Mengarahkan ke halaman login setelah logout
    };

    return (
        <div className="flex items-center justify-center text-center text-white h-screen">
            <div className="container h-[400px] flex flex-col items-center justify-center text-center bg-gray-600">
            <h1 className="text-5xl mb-4  font-bold bg-gray-600">Random Quote Generator</h1>
            {status === "loading" ? (
                <p className="bg-gray-600">Loading...</p>
            ) : (
                <div className="bg-gray-600 mb-8">
                    <p className="bg-gray-600 text-xl">{Judul}</p>
                    <p className="bg-gray-600 text-xl">{quote}</p>
                </div>
            )}
            {/* <button onClick={handleFetchQuote}>Get Random Quote</button> */}
            <button onClick={handleFetchQuote} role="button">Get Random Quote</button>
            {isAuthenticated && (
                    <button 
                        onClick={handleLogout} 
                        className="px-4 py-2 bg-red-500 text-white rounded"
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuoteComponent;
