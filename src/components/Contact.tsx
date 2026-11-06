import { type ChangeEvent, type FormEvent, useState } from 'react'
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react'
import { company } from '../data/company'
import Reveal from './Reveal'

interface FormState {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

const initial: FormState = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.phone.trim()) errors.phone = 'Please enter your phone number.'
  if (!values.subject.trim()) errors.subject = 'Please enter a subject.'
  if (!values.message.trim()) {
    errors.message = 'Please enter your message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }
  return errors
}

export default function Contact() {
  const [values, setValues] = useState<FormState>(initial)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const onChange = (field: keyof FormState) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }))
    if (status !== 'idle') setStatus('idle')
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length > 0) {
      setStatus('error')
      return
    }
    // Frontend-only: no backend configured. Show success UI without claiming delivery.
    setStatus('success')
    setValues(initial)
  }

  const fieldClass = (hasError?: string) =>
    `w-full bg-white border px-4 py-3.5 text-sm text-metro-charcoal placeholder:text-metro-muted/60 focus:outline-none focus:border-metro-navy transition-colors ${
      hasError ? 'border-metro-red' : 'border-metro-navy/15'
    }`

  return (
    <section id="contact" className="py-20 lg:py-28 bg-metro-light" aria-labelledby="contact-heading">
      <div className="container-metro">
        <Reveal>
          <div className="max-w-3xl mb-14">
            <p className="section-label mb-4">CONTACT METRO</p>
            <div className="w-12 h-[2px] bg-metro-red mb-8" aria-hidden="true" />
            <h2 id="contact-heading" className="section-heading">
              WE&apos;D LIKE TO{' '}
              <span className="text-metro-red">HEAR FROM YOU.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-sm font-semibold tracking-[0.15em] uppercase text-metro-navy mb-2">
                  Company
                </h3>
                <p className="text-metro-charcoal font-medium">{company.name}</p>
              </div>

              <div className="flex gap-4">
                <Phone className="text-metro-red shrink-0 mt-0.5" size={20} aria-hidden />
                <div>
                  <h3 className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-metro-muted mb-1">
                    Phone
                  </h3>
                  <a
                    href={company.phoneTel}
                    className="text-metro-navy text-lg font-medium hover:text-metro-red transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-metro-red shrink-0 mt-0.5" size={20} aria-hidden />
                <div>
                  <h3 className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-metro-muted mb-1">
                    Email
                  </h3>
                  <a
                    href={company.emailMailto}
                    className="text-metro-navy text-lg font-medium hover:text-metro-red transition-colors break-all"
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-metro-red shrink-0 mt-0.5" size={20} aria-hidden />
                <div>
                  <h3 className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-metro-muted mb-1">
                    Address
                  </h3>
                  <p className="text-metro-charcoal leading-relaxed">{company.address}</p>
                </div>
              </div>

              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-navy inline-flex gap-2"
              >
                OPEN GOOGLE MAPS <ExternalLink size={14} />
              </a>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="bg-white p-6 sm:p-8 lg:p-10 space-y-5"
              noValidate
              aria-label="Contact form"
            >
              <div>
                <label htmlFor="fullName" className="block font-heading text-[11px] tracking-[0.15em] uppercase text-metro-navy mb-2">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  value={values.fullName}
                  onChange={onChange('fullName')}
                  className={fieldClass(errors.fullName)}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="mt-1.5 text-xs text-metro-red" role="alert">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block font-heading text-[11px] tracking-[0.15em] uppercase text-metro-navy mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={onChange('email')}
                    className={fieldClass(errors.email)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-metro-red" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block font-heading text-[11px] tracking-[0.15em] uppercase text-metro-navy mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={onChange('phone')}
                    className={fieldClass(errors.phone)}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1.5 text-xs text-metro-red" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block font-heading text-[11px] tracking-[0.15em] uppercase text-metro-navy mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={values.subject}
                  onChange={onChange('subject')}
                  className={fieldClass(errors.subject)}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1.5 text-xs text-metro-red" role="alert">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block font-heading text-[11px] tracking-[0.15em] uppercase text-metro-navy mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={onChange('message')}
                  className={`${fieldClass(errors.message)} resize-y min-h-[120px]`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-metro-red" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              {status === 'success' && (
                <div
                  className="border border-metro-navy/20 bg-metro-light px-4 py-3 text-sm text-metro-navy"
                  role="status"
                >
                  Form validated successfully. No email backend is configured yet — please contact
                  Metro directly via phone or email to ensure your message is received.
                </div>
              )}

              {status === 'error' && Object.keys(errors).length > 0 && (
                <div className="text-sm text-metro-red" role="alert">
                  Please correct the highlighted fields and try again.
                </div>
              )}

              <button type="submit" className="btn-primary w-full sm:w-auto">
                SEND MESSAGE
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
