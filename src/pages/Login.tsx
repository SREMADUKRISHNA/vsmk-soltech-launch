import Antigravity from '@/components/ui/Antigravity';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/layout/Layout';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // New state for name
  const [loginType, setLoginType] = useState<'admin' | 'student' | null>(null);
  const [isSigningUp, setIsSigningUp] = useState(false); // New state for signup

  const handleLogin = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: 'Login Successful!',
      description: `Welcome, ${email}`,
    });

    if (loginType === 'admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/student/dashboard');
    }
    
    setIsSubmitting(false);
  };

  const handleSignup = async () => {
    setIsSubmitting(true);

    // Simulate signup submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: 'Signup Successful!',
      description: `Welcome, ${name}. Please log in.`,
    });

    setIsSigningUp(false); // Switch back to login view after signup
    setIsSubmitting(false);
  };

  const renderLoginForm = () => (
    <div className="w-full max-w-md p-8 space-y-8 bg-transparent rounded-lg">
      <form className="mt-8 space-y-6" onSubmit={(e) => { 
        e.preventDefault(); 
        if (isSigningUp) {
          handleSignup();
        } else {
          handleLogin();
        }
      }}>
        {loginType === 'student' && isSigningUp && ( // Conditionally render Name field for student signup
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-white font-bold italic">
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              required
              className="bg-gray-800 text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-white font-bold italic">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com"
            required
            className="bg-gray-800 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium text-white font-bold italic">
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            required
            className="bg-gray-800 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button 
            variant="accent" 
            size="lg" 
            className="w-full"
            type="submit"
            disabled={isSubmitting}
        >
            {isSubmitting ? (isSigningUp ? 'Signing Up...' : 'Logging in...') : (isSigningUp ? 'Sign Up' : 'Login')}
        </Button>
      </form>
      {loginType === 'student' && (
        <Button variant="link" onClick={() => setIsSigningUp(!isSigningUp)} className="text-white w-full mt-4">
          {isSigningUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </Button>
      )}
      <Button variant="link" onClick={() => {
        setLoginType(null);
        setIsSigningUp(false); // Reset signup state when going back to selection
      }} className="text-white">
        Back
      </Button>
    </div>
  );

  const renderLoginSelection = () => (
    <div className="w-full max-w-md p-8 space-y-8 bg-transparent rounded-lg">
      <div className="flex flex-col space-y-4">
        <Button variant="accent" size="lg" onClick={() => setLoginType('admin')}>
          Admin Login
        </Button>
        <Button variant="accent" size="lg" onClick={() => setLoginType('student')}>
          Student Login
        </Button>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="relative flex flex-col items-center justify-center h-screen">
        <div className="absolute inset-0 z-[-1]">
          <Antigravity type="login" />
        </div>
        <div className="text-center mt-10">
          <img src="/WELCOME-BACK-SIGN-IN-TO-YOUR-12-9-2025.gif" alt="Welcome" className="mx-auto w-96 h-auto" />
        </div>
        {loginType ? renderLoginForm() : renderLoginSelection()}
      </div>
    </Layout>
  );
};

export default Login;
