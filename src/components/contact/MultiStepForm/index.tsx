'use client';

import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
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
    // Validate current step before proceeding
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

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);
    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      // Trigger confetti (using dynamic import for canvas-confetti)
      import('canvas-confetti').then((confetti) => {
        confetti.default({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#5b3cf5', '#00ffb2', '#ff3d6b']
        });
      });
    }, 1000);
  };

  // Animation variants
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
      <div className="skeuo-raised" style={{ padding: '80px 48px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ fontSize: '4rem', marginBottom: '24px' }}>🚀</div>
        <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '2.5rem', marginBottom: '16px' }}>Project Launched!</h2>
        <p style={{ color: 'var(--text-muted)' }}>We've received your request and our team will reach out within 24 hours to schedule a discovery call.</p>
        <Button variant="primary" href="/" style={{ marginTop: '40px' }}>Return Home</Button>
      </div>
    );
  }

  // Calculate progress
  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <FormProvider {...methods}>
      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        
        {/* Progress Bar */}
        <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', marginBottom: '40px', position: 'relative', overflow: 'hidden' }}>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, background: 'var(--accent)', boxShadow: '0 0 10px rgba(0,255,178,0.5)' }} 
          />
        </div>

        <div style={{ display: 'flex', gap: '40px' }}>
          {/* Sidebar steps (desktop) */}
          <div style={{ flex: '0 0 150px' }} className="md-hidden">
            {[1,2,3,4,5].map(i => (
              <div key={i} style={{ 
                fontFamily: 'var(--font-space-mono)', 
                marginBottom: '24px',
                color: step === i ? 'var(--accent)' : step > i ? 'var(--white)' : 'var(--text-muted)',
                transition: 'color 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div className={step === i ? "skeuo-pressed" : "skeuo-raised"} style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.8rem',
                  border: step === i ? '1px solid var(--accent)' : 'none'
                }}>{i}</div>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase' }}>Step {i}</span>
              </div>
            ))}
          </div>

          {/* Form Content */}
          <div style={{ flex: '1', position: 'relative', minHeight: '400px' }}>
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
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '32px' }}>
                  {step > 1 ? (
                    <button type="button" onClick={prevStep} className="skeuo-btn-outline" style={{ padding: '12px 24px', fontFamily: 'var(--font-space-mono)', fontSize: '0.8rem', color: 'var(--white)' }}>
                      ← Back
                    </button>
                  ) : <div></div>}
                  
                  {step < totalSteps ? (
                    <button type="button" onClick={nextStep} className="skeuo-btn" style={{ padding: '12px 32px', fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--white)' }}>
                      Continue →
                    </button>
                  ) : (
                    <button type="submit" className="skeuo-btn" style={{ padding: '16px 40px', background: 'var(--accent)', color: 'var(--black)', fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1rem', clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}>
                      LAUNCH PROJECT 🚀
                    </button>
                  )}
                </div>
             </form>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .md-hidden { display: none !important; }
        }
      `}</style>
    </FormProvider>
  );
}

// Sub-components for Steps (putting them in same file for brevity)

// STEP 1
function Step1() {
  const { register, formState: { errors } } = useFormContext<FormData>();
  return (
    <div>
      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '2rem', marginBottom: '8px' }}>Let's start with you</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Tell us who we're speaking with.</p>
      
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontFamily: 'var(--font-space-mono)', fontSize: '0.7rem', color: 'var(--accent)', marginBottom: '8px', textTransform: 'uppercase' }}>Full Name *</label>
        <input 
          {...register('name')}
          className="skeuo-pressed focus:skeuo-input-active"
          style={{ width: '100%', padding: '16px', color: 'var(--white)', outline: 'none', transition: 'all 0.3s' }}
          placeholder="John Doe"
        />
        {errors.name && <span style={{ color: 'var(--accent2)', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.name.message}</span>}
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontFamily: 'var(--font-space-mono)', fontSize: '0.7rem', color: 'var(--accent)', marginBottom: '8px', textTransform: 'uppercase' }}>Company / Organization</label>
        <input 
          {...register('company')}
          className="skeuo-pressed focus:skeuo-input-active"
          style={{ width: '100%', padding: '16px', color: 'var(--white)', outline: 'none', transition: 'all 0.3s' }}
          placeholder="Acme Corp"
        />
      </div>
    </div>
  );
}

import { useFormContext } from 'react-hook-form';

// STEP 2
function Step2() {
  const { register, watch, setValue, formState: { errors } } = useFormContext<FormData>();
  const selectedServices = watch('services') || [];
  
  const servicesList = [
    { id: 'web', icon: '💻', title: 'Web Development' },
    { id: 'app', icon: '📱', title: 'App Development' },
    { id: 'ai', icon: '🤖', title: 'AI / Maching Learning' },
    { id: 'design', icon: '✨', title: 'UI/UX Design' },
    { id: 'marketing', icon: '📈', title: 'Digital Marketing' },
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
      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '2rem', marginBottom: '8px' }}>What do you need?</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Select all that apply.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        {servicesList.map(s => {
          const isActive = selectedServices.includes(s.id);
          return (
            <div 
              key={s.id}
              onClick={() => toggleService(s.id)}
              className={isActive ? 'skeuo-pressed' : 'skeuo-raised'}
              style={{
                padding: '24px 20px',
                cursor: 'pointer',
                border: isActive ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.05)',
                transition: 'all 0.2s',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{s.icon}</div>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.9rem', color: isActive ? 'var(--accent)' : 'var(--white)' }}>{s.title}</div>
            </div>
          )
        })}
      </div>
      {errors.services && <span style={{ color: 'var(--accent2)', fontSize: '0.8rem', marginTop: '16px', display: 'block' }}>{errors.services.message}</span>}
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
      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '2rem', marginBottom: '8px' }}>Tell us more</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>The details of your mission.</p>
      
      <div style={{ marginBottom: '32px' }}>
        <label style={{ display: 'block', fontFamily: 'var(--font-space-mono)', fontSize: '0.7rem', color: 'var(--accent)', marginBottom: '8px', textTransform: 'uppercase' }}>Project Description *</label>
        <textarea 
          {...register('description')}
          className="skeuo-pressed focus:skeuo-input-active"
          style={{ width: '100%', padding: '16px', color: 'var(--white)', outline: 'none', minHeight: '120px', resize: 'vertical' }}
          placeholder="We need to build a platform that..."
        />
        {errors.description && <span style={{ color: 'var(--accent2)', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.description.message}</span>}
      </div>

      <div style={{ marginBottom: '32px' }}>
        <label style={{ display: 'block', fontFamily: 'var(--font-space-mono)', fontSize: '0.7rem', color: 'var(--accent)', marginBottom: '16px', textTransform: 'uppercase' }}>Estimated Budget *</label>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['< $10k', '$10k - $50k', '$50k - $100k', '$100k+'].map(b => (
            <div 
              key={b}
              onClick={() => setValue('budget', b, { shouldValidate: true })}
              className={budget === b ? "skeuo-pressed" : "skeuo-raised"}
              style={{
                padding: '12px 20px', cursor: 'pointer',
                fontFamily: 'var(--font-space-mono)', fontSize: '0.8rem',
                border: budget === b ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.05)',
                color: budget === b ? 'var(--accent)' : 'var(--text-muted)'
              }}
            >
              {b}
            </div>
          ))}
        </div>
        {errors.budget && <span style={{ color: 'var(--accent2)', fontSize: '0.8rem', marginTop: '8px', display: 'block' }}>{errors.budget.message}</span>}
      </div>

      <div>
        <label style={{ display: 'block', fontFamily: 'var(--font-space-mono)', fontSize: '0.7rem', color: 'var(--accent)', marginBottom: '16px', textTransform: 'uppercase' }}>Timeline *</label>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['ASAP', '1-3 Months', '3-6 Months', 'Flexible'].map(t => (
            <div 
              key={t}
              onClick={() => setValue('timeline', t, { shouldValidate: true })}
              className={timeline === t ? "skeuo-pressed" : "skeuo-raised"}
              style={{
                padding: '12px 20px', cursor: 'pointer',
                fontFamily: 'var(--font-space-mono)', fontSize: '0.8rem',
                border: timeline === t ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.05)',
                color: timeline === t ? 'var(--accent)' : 'var(--text-muted)'
              }}
            >
              {t}
            </div>
          ))}
        </div>
        {errors.timeline && <span style={{ color: 'var(--accent2)', fontSize: '0.8rem', marginTop: '8px', display: 'block' }}>{errors.timeline.message}</span>}
      </div>
    </div>
  );
}

// STEP 4
function Step4() {
  const { register, formState: { errors } } = useFormContext<FormData>();
  return (
    <div>
      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '2rem', marginBottom: '8px' }}>How to reach you?</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Where should we send the proposal.</p>
      
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontFamily: 'var(--font-space-mono)', fontSize: '0.7rem', color: 'var(--accent)', marginBottom: '8px', textTransform: 'uppercase' }}>Email Address *</label>
        <input 
          type="email"
          {...register('email')}
          className="skeuo-pressed focus:skeuo-input-active"
          style={{ width: '100%', padding: '16px', color: 'var(--white)', outline: 'none' }}
          placeholder="john@acme.com"
        />
        {errors.email && <span style={{ color: 'var(--accent2)', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.email.message}</span>}
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontFamily: 'var(--font-space-mono)', fontSize: '0.7rem', color: 'var(--accent)', marginBottom: '8px', textTransform: 'uppercase' }}>Phone / WhatsApp (Optional)</label>
        <input 
          {...register('phone')}
          className="skeuo-pressed focus:skeuo-input-active"
          style={{ width: '100%', padding: '16px', color: 'var(--white)', outline: 'none' }}
          placeholder="+1 (555) 000-0000"
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
      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '2rem', marginBottom: '8px' }}>Confirm & Send</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Review your request before launching.</p>
      
      <div className="skeuo-pressed" style={{ padding: '32px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-space-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>Name</div>
            <div style={{ color: 'var(--white)', fontSize: '1rem' }}>{data.name}</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-space-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>Company</div>
            <div style={{ color: 'var(--white)', fontSize: '1rem' }}>{data.company || 'N/A'}</div>
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <div style={{ fontFamily: 'var(--font-space-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>Services Needed</div>
            <div style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>{data.services?.join(', ')}</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-space-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>Budget</div>
            <div style={{ color: 'var(--white)', fontSize: '0.9rem' }}>{data.budget}</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-space-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>Timeline</div>
            <div style={{ color: 'var(--white)', fontSize: '0.9rem' }}>{data.timeline}</div>
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <div style={{ fontFamily: 'var(--font-space-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>Email</div>
            <div style={{ color: 'var(--purple-light)', fontSize: '1rem' }}>{data.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
