"use client"

import AuthForm from "@/components/AuthForm"
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'

export default function AuthPage() {
    const router = useRouter()

    const handleLogin = (data: { email: string; password: string }) => {
        console.log("Login data:", data)
        // Here you would typically:
        // 1. Call your authentication API
        // 2. Store the user session/token
        // 3. Redirect to dashboard or home
        
        // Mock successful login - redirect to dashboard
        setTimeout(() => {
            router.push('/dashboard')
        }, 1000) // Small delay to simulate API call
        
        alert("Login successful! Redirecting to dashboard...")
    }

    const handleRegister = (data: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        confirmPassword: string;
    }) => {
        console.log("Register data:", data)
        // Here you would typically:
        // 1. Call your registration API
        // 2. Send email verification (optional)
        // 3. Auto-login or redirect to login
        
        // Mock successful registration - redirect to dashboard
        setTimeout(() => {
            router.push('/dashboard')
        }, 1000) // Small delay to simulate API call
        
        alert("Registration successful! Redirecting to dashboard...")
    }

    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4 transition-colors duration-300">
                <div className="w-full max-w-md">
                    <AuthForm
                        onLogin={handleLogin}
                        onRegister={handleRegister}
                    />
                </div>
            </div>
        </>
    )
}