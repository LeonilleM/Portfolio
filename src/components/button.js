import React from 'react';

function Button() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Enables smooth scrolling
        });
    };

    return (
        <div>
            <button
                onClick={scrollToTop}
                className="bg-1E1E1E text-white py-2 px-4 rounded-full hover:bg-303837 transition duration-300 ease-in-out fixed sm:bottom-5 bottom-14 right-5"
            >
                ↑
            </button>
        </div>
    );
}

export default Button;
