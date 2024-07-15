import React from 'react';

const RefundPolicy = () => {
    return (
        <div className='container mx-auto py-8 px-4'>
            <div className="refund-policy-container max-w-3xl mx-auto bg-white shadow-md p-6 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">Refund Policy</h2>
                <p className="mb-4">Thank you for shopping at [Your Company Name].</p>
                <p className="mb-4">If you are not entirely satisfied with your purchase, we're here to help.</p>

                <h3 className="text-2xl font-bold mb-2">Returns</h3>
                <p className="mb-2">You have 30 calendar days to return an item from the date you received it.</p>
                <p className="mb-2">To be eligible for a return, your item must be unused and in the same condition that you received it.</p>
                <p className="mb-2">Your item must be in the original packaging.</p>
                <p className="mb-4">Your item needs to have the receipt or proof of purchase.</p>

                <h3 className="text-2xl font-bold mb-2">Refunds</h3>
                <p className="mb-2">Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.</p>
                <p className="mb-2">If your return is approved, we will initiate a refund to your credit card (or original method of payment).</p>
                <p className="mb-4">You will receive the credit within a certain amount of days, depending on your card issuer's policies.</p>

                <h3 className="text-2xl font-bold mb-2">Shipping</h3>
                <p className="mb-2">You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.</p>
                <p className="mb-4">If you receive a refund, the cost of return shipping will be deducted from your refund.</p>

                <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
                <p className="mb-4">If you have any questions on how to return your item to us, contact us at [Your Contact Information].</p>
            </div>
        </div>
    );
}

export default RefundPolicy;
