# Authentication Components

This folder contains reusable authentication components for login and registration functionality.

## Components Created

### UI Components (`/components/ui/`)
- **Button.tsx** - Reusable button component with multiple variants
- **Input.tsx** - Styled input component with form integration  
- **Label.tsx** - Accessible form label component
- **Card.tsx** - Container components for clean layout

### Auth Components (`/components/`)
- **Login.tsx** - Login form component with validation
- **Register.tsx** - Registration form component with validation
- **AuthForm.tsx** - Combined component that switches between login/register

### Pages (`/app/`)
- **auth/page.tsx** - Demo page showcasing the auth components

## Features

### Login Component
- Email and password validation
- Loading states
- Error handling and display
- Clean, accessible design

### Register Component  
- First name, last name, email, password fields
- Password confirmation validation
- Strong password requirements
- Real-time validation feedback

### Shared Features
- TypeScript support
- Tailwind CSS styling with theme support
- Form validation with error states
- Loading states during submission
- Responsive design
- Accessibility features

## Usage

### Basic Usage

```tsx
import AuthForm from "@/components/AuthForm"

function MyPage() {
  const handleLogin = (data) => {
    // Handle login logic
    console.log("Login:", data)
  }
  
  const handleRegister = (data) => {
    // Handle registration logic  
    console.log("Register:", data)
  }

  return (
    <AuthForm 
      onLogin={handleLogin}
      onRegister={handleRegister}
    />
  )
}
```

### Individual Components

```tsx
import Login from "@/components/Login"
import Register from "@/components/Register"

// Use components separately
<Login onSubmit={handleLogin} />
<Register onSubmit={handleRegister} />
```

## Validation Rules

### Login
- Email: Required, valid email format
- Password: Required, minimum 6 characters

### Registration  
- First Name: Required, non-empty
- Last Name: Required, non-empty
- Email: Required, valid email format
- Password: Required, minimum 8 characters, must contain uppercase, lowercase, and number
- Confirm Password: Required, must match password

## Customization

All components accept a `className` prop for additional styling:

```tsx
<AuthForm className="custom-styles" />
```

## Demo

Visit `/auth` to see the components in action.

## Next Steps

To integrate with a real authentication system:

1. Replace the demo `onLogin` and `onRegister` handlers with real API calls
2. Add session management (cookies, localStorage, or state management)
3. Implement JWT token handling  
4. Add protected routes
5. Consider adding:
   - Password reset functionality
   - Email verification
   - Social login options (Google, GitHub, etc.)
   - Remember me functionality
   - Two-factor authentication

## Dependencies Added

- `@radix-ui/react-slot` - For button component composition
- `@radix-ui/react-label` - For accessible labels
- `class-variance-authority` - For component variant management