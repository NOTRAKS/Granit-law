"use client"

import { useState, type FormEvent } from "react"

type FormStatus = "idle" | "submitting" | "success" | "error"

const subjects = ["Консультация", "Представительство в суде", "Составление документов", "Правовой аудит", "Другое"]

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = (formData: FormData): boolean => {
    const newErrors: Record<string, string> = {}

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    if (!name || name.trim().length < 2) {
      newErrors.name = "Введите ваше имя"
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Введите корректный email"
    }

    if (!subject) {
      newErrors.subject = "Выберите тему обращения"
    }

    if (!message || message.trim().length < 10) {
      newErrors.message = "Сообщение должно содержать минимум 10 символов"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    if (!validateForm(formData)) {
      return
    }

    setFormStatus("submitting")

    // Simulating form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simulate success (in real app, this would be an API call)
    const success = Math.random() > 0.1 // 90% success rate for demo

    if (success) {
      setFormStatus("success")
      ;(e.target as HTMLFormElement).reset()
    } else {
      setFormStatus("error")
    }

    // Reset status after 5 seconds
    setTimeout(() => setFormStatus("idle"), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Обратная связь</h2>
          <p className="text-[#888888] text-center mb-12">
            Опишите вашу ситуацию, и мы свяжемся с вами в ближайшее время
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name field */}
            <div>
              <label htmlFor="name" className="block text-sm text-[#aaaaaa] mb-2">
                Имя <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full bg-[#222222] border ${errors.name ? "border-red-500" : "border-[#333333]"} text-white px-4 py-3 focus:outline-none focus:border-[#555555] transition-colors`}
                placeholder="Ваше имя"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm text-[#aaaaaa] mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full bg-[#222222] border ${errors.email ? "border-red-500" : "border-[#333333]"} text-white px-4 py-3 focus:outline-none focus:border-[#555555] transition-colors`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Subject field */}
            <div>
              <label htmlFor="subject" className="block text-sm text-[#aaaaaa] mb-2">
                Тема обращения <span className="text-red-500">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                className={`w-full bg-[#222222] border ${errors.subject ? "border-red-500" : "border-[#333333]"} text-white px-4 py-3 focus:outline-none focus:border-[#555555] transition-colors appearance-none cursor-pointer`}
                defaultValue=""
              >
                <option value="" disabled>
                  Выберите тему
                </option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>

            {/* Message field */}
            <div>
              <label htmlFor="message" className="block text-sm text-[#aaaaaa] mb-2">
                Сообщение <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={`w-full bg-[#222222] border ${errors.message ? "border-red-500" : "border-[#333333]"} text-white px-4 py-3 focus:outline-none focus:border-[#555555] transition-colors resize-none`}
                placeholder="Опишите вашу ситуацию..."
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="w-full bg-[#333333] text-white py-4 font-medium hover:bg-black transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === "submitting" ? "Отправка..." : "Отправить сообщение"}
            </button>

            {/* Status messages */}
            {formStatus === "success" && (
              <div className="bg-green-900/30 border border-green-700 text-green-400 px-4 py-3 text-center">
                Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.
              </div>
            )}

            {formStatus === "error" && (
              <div className="bg-red-900/30 border border-red-700 text-red-400 px-4 py-3 text-center">
                Произошла ошибка при отправке. Пожалуйста, попробуйте позже.
              </div>
            )}
          </form>

          {/* Legal disclaimer */}
          <p className="text-xs text-[#555555] mt-8 text-center leading-relaxed">
            Отправляя форму, вы соглашаетесь с обработкой персональных данных в соответствии с политикой
            конфиденциальности. Информация, предоставленная через данную форму, защищена адвокатской тайной и не будет
            передана третьим лицам.
          </p>
        </div>
      </div>
    </section>
  )
}
