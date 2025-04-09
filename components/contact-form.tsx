"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {isSubmitted ? (
        <div className="text-center py-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="inline-flex items-center justify-center p-4 border-2 border-primary rounded-none mb-4"
          >
            <CheckCircle className="h-8 w-8 text-primary" />
          </motion.div>
          <h3 className="text-2xl font-mono text-primary mb-2">MESSAGE_SENT</h3>
          <p className="text-foreground font-mono">THANK YOU FOR REACHING OUT. I'LL GET BACK TO YOU SOON.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 font-mono">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-primary">
                NAME:
              </label>
              <input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="YOUR_NAME"
                required
                className="w-full bg-background border-2 border-primary p-2 text-foreground focus:outline-none focus:border-primary/70"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-primary">
                EMAIL:
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="YOUR.EMAIL@EXAMPLE.COM"
                required
                className="w-full bg-background border-2 border-primary p-2 text-foreground focus:outline-none focus:border-primary/70"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-primary">
              SUBJECT:
            </label>
            <input
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              placeholder="WHAT_IS_THIS_REGARDING?"
              required
              className="w-full bg-background border-2 border-primary p-2 text-foreground focus:outline-none focus:border-primary/70"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-primary">
              MESSAGE:
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="YOUR_MESSAGE..."
              rows={6}
              required
              className="w-full bg-background border-2 border-primary p-2 text-foreground focus:outline-none focus:border-primary/70"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto border-2 border-primary px-6 py-3 bg-primary text-background hover:bg-transparent hover:text-primary transition-colors font-mono flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </span>
                SENDING...
              </>
            ) : (
              <>
                SEND_MESSAGE
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  )
}
