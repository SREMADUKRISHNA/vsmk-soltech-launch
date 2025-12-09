import React from 'react';
import { useSearchParams } from 'react-router-dom';

const PaymentSuccess: React.FC = () => {
    const [searchParams] = useSearchParams();
    const referenceNum = searchParams.get('reference');

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h1>
                <p className="text-gray-700">Your payment has been processed successfully.</p>
                <p className="text-gray-700">Reference No. {referenceNum}</p>
            </div>
        </div>
    );
};

export default PaymentSuccess;
