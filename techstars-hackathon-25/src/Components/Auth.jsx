"use client"

import { useState } from "react"
import "./Auth.css"

const departments = [
  "Engineering",
  "Medicine",
  "Law",
  "Business Administration",
  "Computer Science",
  "Mass Communication",
  "Economics",
  "Pharmacy",
  "Architecture",
  "Education",
  "Arts",
  "Science",
  "Social Sciences",
  "Environmental Sciences",
]

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Login form data
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  // Signup form data
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    department: "",
    matricNo: "", // changed from studentId to matricNo
    phoneNumber: "", // changed from whatsappNumber to phoneNumber
    agreeToTerms: false,
  })

  const [errors, setErrors] = useState({})

  const validateLoginForm = () => {
    const newErrors = {}

    if (!loginData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!loginData.password.trim()) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateSignupForm = () => {
    const newErrors = {}

    if (!signupData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!signupData.lastName.trim()) newErrors.lastName = "Last name is required"

    if (!signupData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!signupData.password.trim()) {
      newErrors.password = "Password is required"
    } else if (signupData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (signupData.password !== signupData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (!signupData.department) newErrors.department = "Department is required"

    if (!signupData.matricNo.trim()) {
      newErrors.matricNo = "Matric number is required"
    } else if (signupData.matricNo.length !== 10) {
      newErrors.matricNo = "Matric number must be exactly 10 characters"
    }

    if (!signupData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required"
    } else if (!/^(\+234|0)[789]\d{9}$/.test(signupData.phoneNumber.replace(/\s/g, ""))) {
      newErrors.phoneNumber = "Please enter a valid Nigerian phone number"
    }

    if (!signupData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault()

    if (!validateLoginForm()) return

    setIsLoading(true)
    setErrors({})

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      alert("Welcome back! Login successful.")
      console.log("Login successful - would redirect to marketplace")
    } catch {
      setErrors({ general: "Something went wrong. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignupSubmit = async (e) => {
    e.preventDefault()

    if (!validateSignupForm()) return

    setIsLoading(true)
    setErrors({})

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      alert("Welcome to UNILAG Market! Account created successfully.")
      console.log("Signup successful - would redirect to marketplace")
    } catch {
      setErrors({ general: "Something went wrong. Please try again later." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="auth-container">
      {/* Header */}
      
      <div className="auth-content">
        <div className="auth-wrapper">
          {/* Logo */}
          <div className="auth-logo-section">
            <div className="auth-logo">
              <svg
                className="graduation-cap-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <h1 className="auth-title">Unilag Marketplace</h1>
            <p className="auth-subtitle">
              {isLogin
                ? "Sign in to access textbooks, supplies & more"
                : "Create your student account to start shopping"}
            </p>
          </div>

          {/* Auth Card */}
          <div className="auth-card">
            <div className="auth-card-header">
              <h2 className="auth-card-title centered">{isLogin ? "Sign In" : "Create Account"}</h2>
            </div>

            <div className="auth-card-content">
              {/* Tab Switcher */}
              <div className="auth-tabs">
                <button
                  className={`auth-tab ${isLogin ? "active" : ""}`}
                  onClick={() => {
                    setIsLogin(true)
                    setErrors({})
                  }}
                >
                  Sign In
                </button>
                <button
                  className={`auth-tab ${!isLogin ? "active" : ""}`}
                  onClick={() => {
                    setIsLogin(false)
                    setErrors({})
                  }}
                >
                  Sign Up
                </button>
              </div>

              {/* Login Form */}
              {isLogin ? (
                <form onSubmit={handleLoginSubmit} className="auth-form">
                  {errors.general && (
                    <div className="error-alert">
                      <svg className="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      {errors.general}
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your.email@unilag.edu.ng"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      className={`form-input ${errors.email ? "error" : ""}`}
                      disabled={isLoading}
                    />
                    {errors.email && (
                      <p className="error-text">
                        <svg className="error-icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <div className="password-input-wrapper">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        className={`form-input password-input ${errors.password ? "error" : ""}`}
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="m15 18-.722-.447A23.077 23.077 0 0 0 12 17c-4 0-8-2.5-11-7a23.077 23.077 0 0 1 2.722-3.447M2 2l20 20-2-2M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="error-text">
                        <svg className="error-icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div className="forgot-password">
                    <a href="/forgot-password" className="forgot-link">
                      Forgot password?
                    </a>
                  </div>

                  <button type="submit" className="submit-button" disabled={isLoading}>
                    {isLoading ? (
                      <div className="loading-content">
                        <div className="spinner"></div>
                        Signing In...
                      </div>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>
              ) : (
                /* Signup Form */
                <form onSubmit={handleSignupSubmit} className="auth-form">
                  {errors.general && (
                    <div className="error-alert">
                      <svg className="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      {errors.general}
                    </div>
                  )}

                  {/* Name Fields */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        placeholder="John"
                        value={signupData.firstName}
                        onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
                        className={`form-input ${errors.firstName ? "error" : ""}`}
                        disabled={isLoading}
                      />
                      {errors.firstName && <p className="error-text-small">{errors.firstName}</p>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        placeholder="Doe"
                        value={signupData.lastName}
                        onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })}
                        className={`form-input ${errors.lastName ? "error" : ""}`}
                        disabled={isLoading}
                      />
                      {errors.lastName && <p className="error-text-small">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="signupEmail" className="form-label">
                      Email Address
                    </label>
                    <input
                      id="signupEmail"
                      type="email"
                      placeholder="your.email@unilag.edu.ng"
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      className={`form-input ${errors.email ? "error" : ""}`}
                      disabled={isLoading}
                    />
                    {errors.email && <p className="error-text-small">{errors.email}</p>}
                  </div>

                  {/* Department */}
                  <div className="form-group">
                    <label className="form-label">Department</label>
                    <select
                      value={signupData.department}
                      onChange={(e) => setSignupData({ ...signupData, department: e.target.value })}
                      className={`form-select ${errors.department ? "error" : ""}`}
                      disabled={isLoading}
                    >
                      <option value="">Select your department</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                    {errors.department && <p className="error-text-small">{errors.department}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="matricNo" className="form-label">
                      Matric Number
                    </label>
                    <input
                      id="matricNo"
                      placeholder="e.g., 180101001"
                      value={signupData.matricNo}
                      onChange={(e) => setSignupData({ ...signupData, matricNo: e.target.value })}
                      className={`form-input ${errors.matricNo ? "error" : ""}`}
                      disabled={isLoading}
                      maxLength={10}
                    />
                    {errors.matricNo && <p className="error-text-small">{errors.matricNo}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phoneNumber" className="form-label">
                      Phone Number
                    </label>
                    <input
                      id="phoneNumber"
                      placeholder="+234 801 234 5678"
                      value={signupData.phoneNumber}
                      onChange={(e) => setSignupData({ ...signupData, phoneNumber: e.target.value })}
                      className={`form-input ${errors.phoneNumber ? "error" : ""}`}
                      disabled={isLoading}
                    />
                    {errors.phoneNumber && <p className="error-text-small">{errors.phoneNumber}</p>}
                    <p className="input-help">Buyers will contact you directly on this number</p>
                  </div>

                  {/* Password Fields */}
                  <div className="form-group">
                    <label htmlFor="signupPassword" className="form-label">
                      Password
                    </label>
                    <div className="password-input-wrapper">
                      <input
                        id="signupPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        value={signupData.password}
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                        className={`form-input password-input ${errors.password ? "error" : ""}`}
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="m15 18-.722-.447A23.077 23.077 0 0 0 12 17c-4 0-8-2.5-11-7a23.077 23.077 0 0 1 2.722-3.447M2 2l20 20-2-2M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
                      </button>
                    </div>
                    {errors.password && <p className="error-text-small">{errors.password}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <div className="password-input-wrapper">
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={signupData.confirmPassword}
                        onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                        className={`form-input password-input ${errors.confirmPassword ? "error" : ""}`}
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        disabled={isLoading}
                      >
                        {showConfirmPassword ? (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="m15 18-.722-.447A23.077 23.077 0 0 0 12 17c-4 0-8-2.5-11-7a23.077 23.077 0 0 1 2.722-3.447M2 2l20 20-2-2M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && <p className="error-text-small">{errors.confirmPassword}</p>}
                  </div>

                  {/* Terms Agreement */}
                  <div className="terms-section">
                    <div className="checkbox-group">
                      <input
                        id="agree-terms"
                        type="checkbox"
                        checked={signupData.agreeToTerms}
                        onChange={(e) => setSignupData({ ...signupData, agreeToTerms: e.target.checked })}
                        disabled={isLoading}
                        className="checkbox"
                      />
                      <label htmlFor="agree-terms" className="checkbox-label">
                        I agree to the{" "}
                        <a href="/terms" className="terms-link">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="terms-link">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                    {errors.agreeToTerms && <p className="error-text-small">{errors.agreeToTerms}</p>}
                  </div>

                  <button type="submit" className="submit-button" disabled={isLoading}>
                    {isLoading ? (
                      <div className="loading-content">
                        <div className="spinner"></div>
                        Creating Account...
                      </div>
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Trust Message (Signup only) */}
          {!isLogin && (
            <div className="trust-card">
              <div className="trust-content">
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <div>
                  <h4 className="trust-title">Safe & Trusted</h4>
                  <p className="trust-text">
                    Your information is secure. We only share your contact details with verified buyers and sellers.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Auth
