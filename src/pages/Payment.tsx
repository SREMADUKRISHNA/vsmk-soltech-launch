import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/contexts/CartContext';
import axios from 'axios';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Payment: React.FC = () => {
    const { totalPrice } = useCart();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');

    const handlePayment = async () => {
        setLoading(true);
        const orderAmount = totalPrice * 1.18; // Including 18% GST

        try {
            const { data: { key } } = await axios.get('http://localhost:5000/api/getkey');
            const { data: { order } } = await axios.post('http://localhost:5000/api/checkout', {
                amount: orderAmount,
            });

            const options = {
                key,
                amount: order.amount,
                currency: 'INR',
                name: 'VSMK SOLTECH',
                description: 'Test Transaction',
                image: 'https://example.com/your_logo',
                order_id: order.id,
                callback_url: 'http://localhost:5000/api/paymentverification',
                prefill: {
                    name: name,
                    email: email,
                    contact: contact,
                },
                notes: {
                    address: address,
                },
                theme: {
                    color: '#3399cc',
                },
            };
            const razor = new (window as any).Razorpay(options);
            razor.open();
        } catch (error) {
            console.error('Payment failed', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="flex justify-center items-center min-h-[80vh] section-padding">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Checkout</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                            </div>
                            <div>
                                <Label htmlFor="contact">Contact Number</Label>
                                <Input id="contact" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter your contact number" />
                            </div>
                            <div>
                                <Label htmlFor="address">Address</Label>
                                <Input id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your address" />
                            </div>
                        </div>
                        <Button onClick={handlePayment} disabled={loading} className="w-full mt-6">
                            {loading ? 'Processing...' : `Pay ${totalPrice * 1.18}`}
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
};

export default Payment;
