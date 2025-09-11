"use client"

import { useState, useEffect } from "react"
import { Eye, EyeOff, Mail, Lock, User, Phone, Check, Loader2 } from "lucide-react"
import PropTypes from "prop-types"
import "./Auth.css"

const PASSWORD_STRENGTH = {
  WEAK: "weak",
  MEDIUM: "medium",
  STRONG: "strong",
}

const checkPasswordStrength = (password) => {
  if (!password) return { strength: null, message: "" }

  const hasMinLength = password.length >= 8
  const hasNumber = /[0-9]/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)

  const strengthScore = [hasMinLength, hasNumber, hasSpecialChar, hasUpperCase, hasLowerCase].filter(Boolean).length

  if (strengthScore <= 2) {
    return {
      strength: PASSWORD_STRENGTH.WEAK,
      message: "Weak password. Try including numbers, special characters, and both cases.",
    }
  }
  if (strengthScore <= 4) {
    return {
      strength: PASSWORD_STRENGTH.MEDIUM,
      message: "Medium strength. Add more complexity for better security.",
    }
  }

  return {
    strength: PASSWORD_STRENGTH.STRONG,
    message: "Strong password!",
  }
}

export function Auth({ onAuthSuccess }) {
  const [authMode, setAuthMode] = useState("login")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [passwordStrength, setPasswordStrength] = useState({ strength: null, message: "" })
  const [touchedFields, setTouchedFields] = useState({})
  const [rememberMe, setRememberMe] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    faculty: "",
    matricNo: "",
    agreeToTerms: false,
  })

  const faculties = [
    "Engineering",
    "Medicine",
    "Law",
    "Arts",
    "Science",
    "Social Sciences",
    "Education",
    "Environmental Sciences",
    "Pharmacy",
    "Dental Sciences",
    "Other",
  ]

  useEffect(() => {
    if (authMode === "signup" || authMode === "login") {
      const strength = checkPasswordStrength(formData.password)
      setPasswordStrength(strength)
    }
  }, [formData.password, authMode])

  const handleInputChange = (field, value) => {
    if (field === "matricNo") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10)
      setFormData((prev) => ({
        ...prev,
        [field]: numericValue,
      }))
      return
    }

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleBlur = (field) => {
    setTouchedFields((prev) => ({
      ...prev,
      [field]: true,
    }))
  }

  const getFieldError = (fieldName, value) => {
    if (!touchedFields[fieldName]) return ""

    if (!value) return "This field is required"

    if (fieldName === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) return "Please enter a valid email address"
    }

    if (fieldName === "password" && value.length < 8) {
      return "Password must be at least 8 characters"
    }

    if (fieldName === "confirmPassword" && value !== formData.password) {
      return "Passwords do not match"
    }

    if (fieldName === "matricNo" && value.length !== 10) {
      return "Matric number must be 10 digits"
    }

    if (fieldName === "phone" && !/^\d{11}$/.test(value)) {
      return "Please enter a valid 11-digit phone number"
    }

    return ""
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Mark all fields as touched to show validation errors
    const allFields = Object.keys(formData)
    const newTouched = {}
    allFields.forEach((field) => {
      newTouched[field] = true
    })
    setTouchedFields(newTouched)

    // Check for any validation errors
    const hasErrors = allFields.some((field) => {
      return getFieldError(field, formData[field])
    })

    if (hasErrors) {
      return
    }

    setError("")
    setLoading(true)

    // Basic validation
    if (authMode === "signup" && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    if (authMode === "signup" && !formData.agreeToTerms) {
      setError("You must agree to the terms and conditions")
      setLoading(false)
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      if (authMode === "forgot") {
        alert("Password reset link sent to your email!")
        setAuthMode("login")
        return
      }

      const user = {
        id: "1",
        email: formData.email,
        firstName: formData.firstName || "John",
        lastName: formData.lastName || "Doe",
        faculty: formData.faculty || "Engineering",
        matricNo: formData.matricNo,
        avatar: "/placeholder.svg?key=user-avatar",
      }

      if (onAuthSuccess) {
        onAuthSuccess(user)
      }
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const isFormValid = () => {
    if (authMode === "login") {
      return formData.email && formData.password && !getFieldError("email", formData.email)
    }
    if (authMode === "signup") {
      return (
        formData.email &&
        formData.password &&
        formData.confirmPassword &&
        formData.firstName &&
        formData.lastName &&
        formData.phone &&
        formData.faculty &&
        formData.matricNo &&
        formData.matricNo.length === 10 &&
        formData.agreeToTerms &&
        formData.password === formData.confirmPassword &&
        passwordStrength.strength !== PASSWORD_STRENGTH.WEAK
      )
    }
    if (authMode === "forgot") {
      return formData.email && !getFieldError("email", formData.email)
    }
    return false
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-content-area">
        <header className="auth-branding">
          <div className="auth-logo">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2.25C12 1.83579 11.6642 1.5 11.25 1.5H5.25C4.83579 1.5 4.5 1.83579 4.5 2.25V7.5H11.25V2.25ZM18.75 2.25C18.75 1.83579 18.4142 1.5 18 1.5H12V7.5H18.75V2.25Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.5 8.25V13.5H11.25V8.25H4.5ZM12 8.25V13.5H18.75V8.25H12Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.5 14.25V19.5C4.5 19.9142 4.83579 20.25 5.25 20.25H11.25C11.6642 20.25 12 19.9142 12 19.5V14.25H4.5ZM18.75 14.25V19.5C18.75 19.9142 18.4142 20.25 18 20.25H12.75C12.3358 20.25 12 19.9142 12 19.5V14.25H18.75Z"
                fill="white"
              />
            </svg>
          </div>
          <h1 className="auth-main-title">
            {authMode === "login" && "Welcome Back"}
            {authMode === "signup" && "Join UNILAG Market"}
            {authMode === "forgot" && "Reset Password"}
          </h1>
          <p className="auth-main-subtitle">
            {authMode === "login" && "Sign in to your UNILAG Marketplace account"}
            {authMode === "signup" && "Create your account to start trading safely"}
            {authMode === "forgot" && "Enter your email to receive a password reset link"}
          </p>
        </header>

        <div className="auth-card">
          <div className="auth-card-header">
            <h3 className="auth-card-title">
              {authMode === "login" && "Sign In"}
              {authMode === "signup" && "Create Account"}
              {authMode === "forgot" && "Reset Password"}
            </h3>
            {error && <div className="error-message">{error}</div>}
          </div>
          <div className="auth-card-body">
            <form onSubmit={handleSubmit} className="auth-form">
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address<span className="required">*</span>
                </label>
                <div className="input-field-wrapper">
                  <Mail className="input-icon" />
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@student.unilag.edu.ng"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    className={`form-input ${touchedFields.email && getFieldError("email", formData.email) ? "input-error" : ""}`}
                    required
                    autoComplete="email"
                  />
                </div>
                {touchedFields.email && getFieldError("email", formData.email) && (
                  <div className="error-text">{getFieldError("email", formData.email)}</div>
                )}
              </div>

              {/* Password Fields */}
              {authMode !== "forgot" && (
                <div className="form-group">
                  <div className="label-with-action">
                    <label htmlFor="password" className="form-label">
                      Password<span className="required">*</span>
                    </label>
                    {authMode === "login" && (
                      <button type="button" onClick={() => setAuthMode("forgot")} className="forgot-password-link">
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="input-field-wrapper">
                    <Lock className="input-icon" />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      onBlur={() => handleBlur("password")}
                      className={`form-input password-input ${touchedFields.password && getFieldError("password", formData.password) ? "input-error" : ""}`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="password-toggle-button"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {touchedFields.password && formData.password && (
                    <div className="password-strength">
                      <div className={`strength-bar ${passwordStrength.strength || ""}`}>
                        <div className="strength-segment"></div>
                        <div className="strength-segment"></div>
                        <div className="strength-segment"></div>
                      </div>
                      <div className={`strength-text ${passwordStrength.strength || ""}`}>
                        {passwordStrength.message}
                      </div>
                    </div>
                  )}
                  {touchedFields.password && getFieldError("password", formData.password) && (
                    <div className="error-text">{getFieldError("password", formData.password)}</div>
                  )}
                  {authMode === "signup" && formData.password && formData.confirmPassword && (
                    <p
                      className={`password-match ${formData.password === formData.confirmPassword ? "match" : "no-match"}`}
                    >
                      {formData.password === formData.confirmPassword ? (
                        <>
                          <Check size={14} className="inline-icon" />
                          Passwords match
                        </>
                      ) : (
                        "Passwords do not match"
                      )}
                    </p>
                  )}
                </div>
              )}

              {authMode === "signup" && (
                <>
                  {/* Confirm Password Field */}
                  <div className="form-group">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password<span className="required">*</span>
                    </label>
                    <div className="input-field-wrapper">
                      <Lock className="input-icon" />
                      <input
                        id="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        onBlur={() => handleBlur("confirmPassword")}
                        className={`form-input password-input ${touchedFields.confirmPassword && getFieldError("confirmPassword", formData.confirmPassword) ? "input-error" : ""}`}
                        required
                      />
                    </div>
                    {touchedFields.confirmPassword && getFieldError("confirmPassword", formData.confirmPassword) && (
                      <div className="error-text">{getFieldError("confirmPassword", formData.confirmPassword)}</div>
                    )}
                  </div>

                  {/* Name Fields */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label">
                        First Name<span className="required">*</span>
                      </label>
                      <div className="input-field-wrapper">
                        <User className="input-icon" />
                        <input
                          id="firstName"
                          type="text"
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          onBlur={() => handleBlur("firstName")}
                          className={`form-input ${touchedFields.firstName && getFieldError("firstName", formData.firstName) ? "input-error" : ""}`}
                          required
                        />
                      </div>
                      {touchedFields.firstName && getFieldError("firstName", formData.firstName) && (
                        <div className="error-text">{getFieldError("firstName", formData.firstName)}</div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label">
                        Last Name<span className="required">*</span>
                      </label>
                      <div className="input-field-wrapper">
                        <User className="input-icon" />
                        <input
                          id="lastName"
                          type="text"
                          placeholder="Enter your last name"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          onBlur={() => handleBlur("lastName")}
                          className={`form-input ${touchedFields.lastName && getFieldError("lastName", formData.lastName) ? "input-error" : ""}`}
                          required
                        />
                      </div>
                      {touchedFields.lastName && getFieldError("lastName", formData.lastName) && (
                        <div className="error-text">{getFieldError("lastName", formData.lastName)}</div>
                      )}
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number<span className="required">*</span>
                    </label>
                    <div className="input-field-wrapper">
                      <Phone className="input-icon" />
                      <input
                        id="phone"
                        type="tel"
                        placeholder="08012345678"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        onBlur={() => handleBlur("phone")}
                        className={`form-input ${touchedFields.phone && getFieldError("phone", formData.phone) ? "input-error" : ""}`}
                        required
                      />
                    </div>
                    {touchedFields.phone && getFieldError("phone", formData.phone) && (
                      <div className="error-text">{getFieldError("phone", formData.phone)}</div>
                    )}
                  </div>

                  {/* Faculty and Matric Number */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="faculty" className="form-label">
                        Faculty<span className="required">*</span>
                      </label>
                      <div className="select-wrapper">
                        <select
                          id="faculty"
                          value={formData.faculty}
                          onChange={(e) => handleInputChange("faculty", e.target.value)}
                          onBlur={() => handleBlur("faculty")}
                          className={`form-input ${touchedFields.faculty && getFieldError("faculty", formData.faculty) ? "input-error" : ""}`}
                          required
                        >
                          <option value="">Select your faculty</option>
                          {faculties.map((faculty) => (
                            <option key={faculty} value={faculty}>
                              {faculty}
                            </option>
                          ))}
                        </select>
                      </div>
                      {touchedFields.faculty && getFieldError("faculty", formData.faculty) && (
                        <div className="error-text">{getFieldError("faculty", formData.faculty)}</div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="matricNo" className="form-label">
                        Matric Number<span className="required">*</span>
                      </label>
                      <div className="input-field-wrapper">
                        <input
                          id="matricNo"
                          type="text"
                          placeholder="1234567890"
                          value={formData.matricNo}
                          onChange={(e) => handleInputChange("matricNo", e.target.value)}
                          onBlur={() => handleBlur("matricNo")}
                          className={`form-input ${touchedFields.matricNo && getFieldError("matricNo", formData.matricNo) ? "input-error" : ""}`}
                          required
                          maxLength={10}
                        />
                      </div>
                      {touchedFields.matricNo && getFieldError("matricNo", formData.matricNo) && (
                        <div className="error-text">{getFieldError("matricNo", formData.matricNo)}</div>
                      )}
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="checkbox-group">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={(e) => handleInputChange("agreeToTerms", e.target.checked)}
                      className="checkbox-input"
                      required
                    />
                    <label htmlFor="agreeToTerms" className="checkbox-label">
                      I agree to the{" "}
                      <a href="#" className="text-link">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-link">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </>
              )}

              {authMode === "login" && (
                <div className="form-options">
                  <label className="checkbox-container">
                    <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                    <span className="checkmark"></span>
                    Remember me
                  </label>
                </div>
              )}

              <button
                type="submit"
                className={`auth-button ${!isFormValid() ? "disabled" : ""}`}
                disabled={!isFormValid() || loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-4 w-4" />
                    {authMode === "login"
                      ? "Signing In..."
                      : authMode === "signup"
                        ? "Creating Account..."
                        : "Sending Reset Link..."}
                  </>
                ) : authMode === "login" ? (
                  "Sign In"
                ) : authMode === "signup" ? (
                  "Create Account"
                ) : (
                  "Reset Password"
                )}
              </button>
            </form>

            <div className="auth-footer">
              {authMode === "login" ? (
                <p className="auth-footer-text">
                  Don't have an account?{" "}
                  <button type="button" onClick={() => setAuthMode("signup")} className="text-link">
                    Sign up
                  </button>
                </p>
              ) : authMode === "signup" ? (
                <p className="auth-footer-text">
                  Already have an account?{" "}
                  <button type="button" onClick={() => setAuthMode("login")} className="text-link">
                    Sign in
                  </button>
                </p>
              ) : (
                <p className="auth-footer-text">
                  Remember your password?{" "}
                  <button type="button" onClick={() => setAuthMode("login")} className="text-link">
                    Back to login
                  </button>
                </p>
              )}
            </div>

            {authMode === "signup" && (
              <div className="info-notice">
                <p className="info-text">
                  <svg className="inline-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  A verification link will be sent to your UNILAG email to verify your student status.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

Auth.propTypes = {
  onAuthSuccess: PropTypes.func,
}
