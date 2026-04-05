'use client';

import React, { useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';

// Validation Schema
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  services: z.array(z.string()).min(1, "Select at least one service"),
  description: z.string().min(10, "Tell us a bit more about the project"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const totalSteps = 5;

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
      budget: '',
      timeline: '',
    },
    mode: 'onChange',
  });

  const { handleSubmit, trigger, formState: { errors } } = methods;

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    if (step === 1) fieldsToValidate = ['name'];
    if (step === 2) fieldsToValidate = ['services'];
    if (step === 3) fieldsToValidate = ['description', 'budget', 'timeline'];
    if (step === 4) fieldsToValidate = ['email'];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep((p) => Math.min(totalSteps, p + 1));
    }
  };

  const prevStep = () => setStep((p) => Math.max(1, p - 1));

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        import('canvas-confetti').then((confetti) => {
          confetti.default({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#3B82F6', '#60A5FA', '#E0E5EC']
          });
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Check your connection.");
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  if (isSuccess) {
    return (
      <div style={{ 
        padding: '100px 48px', 
        textAlign: 'center', 
        maxWidth: '700px', 
        margin: '0 auto',
        borderRadius: '48px',
        background: '#E0E5EC',
        boxShadow: '12px 12px 24px rgba(163, 177, 198, 0.6), -12px -12px 24px rgba(255, 255, 255, 0.8)',
      }}>
        <div style={{ fontSize: '5rem', marginBottom: '32px' }}>✨</div>
        <h2 style={{ fontFamily: 'var(--font-outfit)', fontWeight: 800, fontSize: '3rem', color: 'var(--text)', marginBottom: '16px' }}>Project Received!</h2>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto 48px' }}>
          We&apos;ve received your request and our team will reach out within 24 hours to schedule a discovery call.
        </p>
        <Button variant="primary" href="/">Return Home</Button>
      </div>
    );
  }

  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <FormProvider {...methods}>
      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
        
        {/* Progress Bar (Neumorphic) */}
        <div style={{ 
          width: '100%', 
          height: '14px', 
          background: '#E0E5EC', 
          boxShadow: 'inset 4px 4px 8px rgba(163, 177, 198, 0.4), inset -4px -4px 8px rgba(255, 255, 255, 0.6)',
          marginBottom: '56px', 
          borderRadius: '10px',
          position: 'relative', 
          overflow: 'hidden',
          padding: '2px'
        }}>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ 
              height: '100%', 
              borderRadius: '8px', 
              background: 'linear-gradient(90deg, #3B82F6, #60A5FA)',
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.2)'
            }} 
          />
        </div>

        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start' }}>
          {/* Sidebar steps (desktop) */}
          <div style={{ flex: '0 0 160px' }} className="md-hidden">
            {[1,2,3,4,5].map(i => (
              <div key={i} style={{ 
                fontFamily: 'var(--font-inter)', 
                marginBottom: '32px',
                color: step === i ? 'var(--primary)' : step > i ? 'var(--text)' : 'var(--text-muted)',
                transition: 'color 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: '#E0E5EC',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  boxShadow: step === i 
                    ? 'inset 4px 4px 8px rgba(163, 177, 198, 0.6), inset -4px -4px 8px rgba(255, 255, 255, 0.8)'
                    : '4px 4px 8px rgba(163, 177, 198, 0.6), -4px -4px 8px rgba(255, 255, 255, 0.8)',
                  color: step === i ? 'var(--primary)' : 'inherit',
                  transition: 'all 0.3s ease'
                }}>{i}</div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Step {i}</span>
              </div>
            ))}
          </div>

          {/* Form Content */}
          <div style={{ 
            flex: '1', 
            position: 'relative', 
            minHeight: '400px',
            background: '#E0E5EC',
            padding: '56px',
            borderRadius: '40px',
            boxShadow: '9px 9px 16px rgba(163, 177, 198, 0.5), -9px -9px 16px rgba(255, 255, 255, 0.7)'
          }}>
             <form onSubmit={handleSubmit(onSubmit)}>
                <AnimatePresence mode="wait" custom={1}>
                  <motion.div
                    key={step}
                    custom={1}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {step === 1 && <Step1 />}
                    {step === 2 && <Step2 />}
                    {step === 3 && <Step3 />}
                    {step === 4 && <Step4 />}
                    {step === 5 && <Step5 />}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px', borderTop: '2px solid rgba(0,0,0,0.03)', paddingTop: '40px' }}>
                  {step > 1 ? (
                    <Button variant="secondary" onClick={prevStep} style={{ background: 'transparent', boxShadow: 'none' }}>
                      ← Back
                    </Button>
                  ) : <div />}
                  
                  {step < totalSteps ? (
                    <Button variant="primary" onClick={nextStep}>
                      Continue →
                    </Button>
                  ) : (
                    <Button variant="primary" onClick={handleSubmit(onSubmit)}>
                      START PROJECT 🚀
                    </Button>
                  )}
                </div>
             </form>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .md-hidden { display: none !important; }
          div[style*="padding: 56px"] { padding: 32px !important; }
        }
      `}</style>
    </FormProvider>
  );
}

// STEP 1
function Step1() {
  const { register, formState: { errors } } = useFormContext<FormData>();
  return (
    <div>
      <h2 style={{ fontFamily: 'var(--font-outfit)', fontWeight: 800, fontSize: '2.5rem', color: 'var(--text)', marginBottom: '8px' }}>Let&apos;s start with you</h2>
      <p style={{ fontFamily: 'var(--font-inter)', color: 'var(--text-muted)', marginBottom: '48px' }}>Tell us who we&apos;re speaking with.</p>
      
      <div style={{ marginBottom: '32px' }}>
        <label style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: 'var(--text)', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Full Name *</label>
        <input 
          {...register('name')}
          style={{ 
            width: '100%', 
            padding: '20px', 
            background: '#E0E5EC',
            borderRadius: '16px',
            border: 'none',
            boxShadow: 'inset 5px 5px 10px rgba(163, 177, 198, 0.4), inset -5px -5px 10px rgba(255, 255, 255, 0.6)',
            color: 'var(--text)', 
            outline: 'none', 
            fontFamily: 'var(--font-inter)' 
          }}
          placeholder="John Doe"
        />
        {errors.name && <span style={{ color: '#E53E3E', fontSize: '0.8rem', marginTop: '8px', display: 'block' }}>{errors.name.message}</span>}
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: 'var(--text)', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company / Organization</label>
        <input 
          {...register('company')}
          style={{ 
            width: '100%', 
            padding: '20px', 
            background: '#E0E5EC',
            borderRadius: '16px',
            border: 'none',
            boxShadow: 'inset 5px 5px 10px rgba(163, 177, 198, 0.4), inset -5px -5px 10px rgba(255, 255, 255, 0.6)',
            color: 'var(--text)', 
            outline: 'none', 
            fontFamily: 'var(--font-inter)' 
          }}
          placeholder="Acme Corp"
        />
      </div>
    </div>
  );
}

// STEP 2
function Step2() {
  const { watch, setValue, formState: { errors } } = useFormContext<FormData>();
  const selectedServices = watch('services') || [];
  
  const servicesList = [
    { id: 'web', icon: '💻', title: 'Web Development' },
    { id: 'app', icon: '📱', title: 'App Development' },
    { id: 'ai', icon: '🤖', title: 'AI & Automation' },
    { id: 'design', icon: '✨', title: 'Design' },
    { id: 'marketing', icon: '📈', title: 'Marketing' },
    { id: 'other', icon: '🔍', title: 'Other' },
  ];

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setValue('services', selectedServices.filter(s => s !== id), { shouldValidate: true });
    } else {
      setValue('services', [...selectedServices, id], { shouldValidate: true });
    }
  };

  return (
    <div>
      <h2 style={{ fontFamily: 'var(--font-outfit)', fontWeight: 800, fontSize: '2.5rem', color: 'var(--text)', marginBottom: '8px' }}>What do you need?</h2>
      <p style={{ fontFamily: 'var(--font-inter)', color: 'var(--text-muted)', marginBottom: '40px' }}>Select all that apply.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
        {servicesList.map(s => {
          const isActive = selectedServices.includes(s.id);
          return (
            <motion.div 
              key={s.id}
              onClick={() => toggleService(s.id)}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '24px 16px',
                borderRadius: '24px',
                cursor: 'pointer',
                background: '#E0E5EC',
                boxShadow: isActive 
                  ? 'inset 4px 4px 8px rgba(163, 177, 198, 0.6), inset -4px -4px 8px rgba(255, 255, 255, 0.8)'
                  : '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.8)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{s.icon}</div>
              <div style={{ fontFamily: 'var(--font-inter)', fontWeight: isActive ? 700 : 500, fontSize: '0.9rem', color: isActive ? 'var(--primary)' : 'var(--text)' }}>{s.title}</div>
            </motion.div>
          )
        })}
      </div>
      {errors.services && <span style={{ color: '#E53E3E', fontSize: '0.8rem', marginTop: '24px', display: 'block' }}>{errors.services.message}</span>}
    </div>
  );
}

// STEP 3
function Step3() {
  const { register, watch, setValue, formState: { errors } } = useFormContext<FormData>();
  const budget = watch('budget');
  const timeline = watch('timeline');

  return (
    <div>
      <h2 style={{ fontFamily: 'var(--font-outfit)', fontWeight: 800, fontSize: '2.5rem', color: 'var(--text)', marginBottom: '8px' }}>Project Details</h2>
      <p style={{ fontFamily: 'var(--font-inter)', color: 'var(--text-muted)', marginBottom: '40px' }}>Tell us about your vision.</p>
      
      <div style={{ marginBottom: '40px' }}>
        <label style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: 'var(--text)', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase' }}>Description *</label>
        <textarea 
          {...register('description')}
          style={{ 
            width: '100%', 
            padding: '20px', 
            background: '#E0E5EC',
            borderRadius: '20px',
            border: 'none',
            boxShadow: 'inset 5px 5px 10px rgba(163, 177, 198, 0.4), inset -5px -5px 10px rgba(255, 255, 255, 0.6)',
            color: 'var(--text)', 
            outline: 'none', 
            minHeight: '140px',
            fontFamily: 'var(--font-inter)' 
          }}
          placeholder="We need to build a platform that..."
        />
        {errors.description && <span style={{ color: '#E53E3E', fontSize: '0.8rem', marginTop: '8px', display: 'block' }}>{errors.description.message}</span>}
      </div>

      <div style={{ marginBottom: '40px' }}>
        <label style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: 'var(--text)', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase' }}>Budget Range *</label>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['< ₹2 Lakh', '₹2 Lakh - ₹10 Lakh', '₹10 Lakh - ₹25 Lakh', '₹25 Lakh +'].map(b => (
            <div 
              key={b}
              onClick={() => setValue('budget', b, { shouldValidate: true })}
              style={{
                padding: '14px 24px', 
                borderRadius: '16px',
                cursor: 'pointer',
                background: '#E0E5EC',
                boxShadow: budget === b 
                  ? 'inset 4px 4px 8px rgba(163, 177, 198, 0.6), inset -4px -4px 8px rgba(255, 255, 255, 0.8)'
                  : '4px 4px 8px rgba(163, 177, 198, 0.3), -4px -4px 8px rgba(255, 255, 255, 0.5)',
                fontFamily: 'var(--font-inter)', 
                fontSize: '0.85rem',
                fontWeight: budget === b ? 700 : 500,
                color: budget === b ? 'var(--primary)' : 'var(--text-muted)',
                transition: 'all 0.3s ease'
              }}
            >
              {b}
            </div>
          ))}
        </div>
        {errors.budget && <span style={{ color: '#E53E3E', fontSize: '0.8rem', marginTop: '12px', display: 'block' }}>{errors.budget.message}</span>}
      </div>

      <div>
        <label style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: 'var(--text)', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase' }}>Timeline *</label>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['ASAP', '1-3 Months', '3-6 Months', 'Flexible'].map(t => (
            <div 
              key={t}
              onClick={() => setValue('timeline', t, { shouldValidate: true })}
              style={{
                padding: '14px 24px', 
                borderRadius: '16px',
                cursor: 'pointer',
                background: '#E0E5EC',
                boxShadow: timeline === t 
                  ? 'inset 4px 4px 8px rgba(163, 177, 198, 0.6), inset -4px -4px 8px rgba(255, 255, 255, 0.8)'
                  : '4px 4px 8px rgba(163, 177, 198, 0.3), -4px -4px 8px rgba(255, 255, 255, 0.5)',
                fontFamily: 'var(--font-inter)', 
                fontSize: '0.85rem',
                fontWeight: timeline === t ? 700 : 500,
                color: timeline === t ? 'var(--primary)' : 'var(--text-muted)',
                transition: 'all 0.3s ease'
              }}
            >
              {t}
            </div>
          ))}
        </div>
        {errors.timeline && <span style={{ color: '#E53E3E', fontSize: '0.8rem', marginTop: '12px', display: 'block' }}>{errors.timeline.message}</span>}
      </div>
    </div>
  );
}

// STEP 4
function Step4() {
  const { register, formState: { errors } } = useFormContext<FormData>();
  return (
    <div>
      <h2 style={{ fontFamily: 'var(--font-outfit)', fontWeight: 800, fontSize: '2.5rem', color: 'var(--text)', marginBottom: '8px' }}>Final Details</h2>
      <p style={{ fontFamily: 'var(--font-inter)', color: 'var(--text-muted)', marginBottom: '40px' }}>Where should we send the proposal.</p>
      
      <div style={{ marginBottom: '32px' }}>
        <label style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: 'var(--text)', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase' }}>Email Address *</label>
        <input 
          type="email"
          {...register('email')}
          style={{ 
            width: '100%', 
            padding: '20px', 
            background: '#E0E5EC',
            borderRadius: '16px',
            border: 'none',
            boxShadow: 'inset 5px 5px 10px rgba(163, 177, 198, 0.4), inset -5px -5px 10px rgba(255, 255, 255, 0.6)',
            color: 'var(--text)', 
            outline: 'none',
            fontFamily: 'var(--font-inter)'
          }}
          placeholder="john@example.com"
        />
        {errors.email && <span style={{ color: '#E53E3E', fontSize: '0.8rem', marginTop: '8px', display: 'block' }}>{errors.email.message}</span>}
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: 'var(--text)', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase' }}>Phone / WhatsApp (Optional)</label>
        <input 
          {...register('phone')}
          style={{ 
            width: '100%', 
            padding: '20px', 
            background: '#E0E5EC',
            borderRadius: '16px',
            border: 'none',
            boxShadow: 'inset 5px 5px 10px rgba(163, 177, 198, 0.4), inset -5px -5px 10px rgba(255, 255, 255, 0.6)',
            color: 'var(--text)', 
            outline: 'none',
            fontFamily: 'var(--font-inter)'
          }}
          placeholder="+91 98765-43210"
        />
      </div>
    </div>
  );
}

// STEP 5
function Step5() {
  const { watch } = useFormContext<FormData>();
  const data = watch();

  return (
    <div>
      <h2 style={{ fontFamily: 'var(--font-outfit)', fontWeight: 800, fontSize: '2.5rem', color: 'var(--text)', marginBottom: '8px' }}>Confirm Request</h2>
      <p style={{ fontFamily: 'var(--font-inter)', color: 'var(--text-muted)', marginBottom: '40px' }}>Review your details before sending.</p>
      
      <div style={{ 
        padding: '32px', 
        borderRadius: '24px',
        background: '#E0E5EC',
        boxShadow: 'inset 4px 4px 8px rgba(163, 177, 198, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.5)',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>Name</div>
            <div style={{ color: 'var(--text)', fontSize: '1.1rem', fontWeight: 600 }}>{data.name}</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>Company</div>
            <div style={{ color: 'var(--text)', fontSize: '1.1rem', fontWeight: 600 }}>{data.company || 'N/A'}</div>
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>Services Needed</div>
            <div style={{ color: 'var(--primary)', fontSize: '1rem', fontWeight: 700 }}>{data.services?.join(', ')}</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>Estimated Budget</div>
            <div style={{ color: 'var(--text)', fontSize: '1rem', fontWeight: 600 }}>{data.budget}</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>Timeline</div>
            <div style={{ color: 'var(--text)', fontSize: '1rem', fontWeight: 600 }}>{data.timeline}</div>
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>Email Address</div>
            <div style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: 700 }}>{data.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
