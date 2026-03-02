"use client";

import {useRef, useState} from "react";
import {sendEmail} from "../_lib/actions";
import {toast} from "sonner";
import {motion} from "framer-motion";
import {Send, Loader2} from "lucide-react";

function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  disabled,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}) {
  return (
    <div className='relative'>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required
        disabled={disabled}
        placeholder=' '
        className='peer w-full px-4 pt-5 pb-2 bg-gray-800/30 border border-gray-800/50 rounded-xl text-gray-200 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all duration-200 placeholder-transparent disabled:opacity-50'
      />
      <label
        htmlFor={id}
        className='absolute left-4 top-2 text-[10px] font-mono uppercase tracking-wider text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-emerald-500'>
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({
  id,
  label,
  value,
  onChange,
  disabled,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled: boolean;
}) {
  return (
    <div className='relative'>
      <textarea
        id={id}
        name={id}
        rows={5}
        value={value}
        onChange={onChange}
        required
        disabled={disabled}
        placeholder=' '
        className='peer w-full px-4 pt-5 pb-2 bg-gray-800/30 border border-gray-800/50 rounded-xl text-gray-200 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all duration-200 placeholder-transparent disabled:opacity-50 resize-none'
      />
      <label
        htmlFor={id}
        className='absolute left-4 top-2 text-[10px] font-mono uppercase tracking-wider text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-emerald-500'>
        {label}
      </label>
    </div>
  );
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = e.target;
    setFormState((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setPending(true);
      const data = new FormData(formRef.current!);

      const formData = {
        name: data.get("name"),
        email: data.get("email"),
        subject: data.get("subject"),
        message: data.get("message"),
      };

      await sendEmail(formData);
      toast.success("Message sent successfully!");
      formRef.current!.reset();
      setFormState({name: "", email: "", subject: "", message: ""});
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setPending(false);
    }
  };

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className='w-full'>
      <form ref={formRef} onSubmit={handleSubmit} className='space-y-4'>
        <FloatingInput
          id='name'
          label='Your name'
          value={formState.name}
          onChange={handleChange}
          disabled={pending}
        />
        <FloatingInput
          id='email'
          label='Email address'
          type='email'
          value={formState.email}
          onChange={handleChange}
          disabled={pending}
        />
        <FloatingInput
          id='subject'
          label='Subject'
          value={formState.subject}
          onChange={handleChange}
          disabled={pending}
        />
        <FloatingTextarea
          id='message'
          label='Your message'
          value={formState.message}
          onChange={handleChange}
          disabled={pending}
        />

        <button
          type='submit'
          disabled={pending}
          className='w-full py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-white text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed'>
          {pending ? (
            <>
              <Loader2 className='h-4 w-4 animate-spin' />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className='h-4 w-4' />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
