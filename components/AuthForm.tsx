"use client"

import React, { useState } from "react"
import Login from "./Login"
import Register from "./Register"

type AuthMode = "login" | "register"

interface AuthFormProps {
    initialMode?: AuthMode
    onLogin?: (data: { email: string; password: string }) => void
    onRegister?: (data: { firstName: string; lastName: string; email: string; password: string; confirmPassword: string }) => void
    className?: string
}

const AuthForm: React.FC<AuthFormProps> = ({
    initialMode = "login",
    onLogin,
    onRegister,
    className
}) => {
    const [mode, setMode] = useState<AuthMode>(initialMode)

    const handleToggle = () => {
        setMode(mode === "login" ? "register" : "login")
    }

    if (mode === "register") {
        return (
            <Register
                onSubmit={onRegister}
                onToggleLogin={handleToggle}
                className={className}
            />
        )
    }

    return (
        <Login
            onSubmit={onLogin}
            onToggleRegister={handleToggle}
            className={className}
        />
    )
}

export default AuthForm