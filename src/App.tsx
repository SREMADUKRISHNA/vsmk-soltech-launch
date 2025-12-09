import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import AIAssistant from "./pages/AIAssistant";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Cybersecurity from "./pages/Cybersecurity";
import Coding from "./pages/Coding";
import Labs from "./pages/Labs";
import Courses from "./pages/Courses";
import SolveProblem from "./pages/SolveProblem";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  // In a real app, you'd have a more robust way of managing user state and roles.
  const [user, setUser] = useState({ loggedIn: true, role: 'student' });

  return(
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/login" element={<Login />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />

            {/* Student Routes */}
            <Route 
              path="/student/dashboard" 
              element={
                <ProtectedRoute isAllowed={user.loggedIn && user.role === 'student'}>
                  <StudentDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student/cybersecurity" 
              element={
                <ProtectedRoute isAllowed={user.loggedIn && user.role === 'student'}>
                  <Cybersecurity />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student/coding" 
              element={
                <ProtectedRoute isAllowed={user.loggedIn && user.role === 'student'}>
                  <Coding />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student/coding/:problemSlug" 
              element={
                <ProtectedRoute isAllowed={user.loggedIn && user.role === 'student'}>
                  <SolveProblem />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student/labs" 
              element={
                <ProtectedRoute isAllowed={user.loggedIn && user.role === 'student'}>
                  <Labs />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student/courses" 
              element={
                <ProtectedRoute isAllowed={user.loggedIn && user.role === 'student'}>
                  <Courses />
                </ProtectedRoute>
              } 
            />
            
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
)};

export default App;
