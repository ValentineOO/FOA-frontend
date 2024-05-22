import React from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const SuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
     <div className="flex flex-col items-center justify-center overflow-hidden">
      <Confetti width={width} height={height} />
      <div className="container mx-auto text-center p-4 max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Congratulations!</h1>
        <p className="text-lg text-green-700 mb-8">Your order has been successfully placed.</p>
        <button
          onClick={handleBackToHome}
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 transition duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
