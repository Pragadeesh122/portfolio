"use client";

import {useRef, useState} from "react";
import {sendEmail} from "../_lib/actions";
import toast from "react-hot-toast";
import {motion} from "framer-motion";
import {Button} from "@/app/_components/ui/button";
import {Send, Loader2, User, Mail, MessageSquare, Tag} from "lucide-react";

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
      <form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
        <div className='space-y-4'>
          <div className='relative'>
            <div className='absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 dark:text-gray-400'>
              <User className='h-5 w-5' />
            </div>
            <input
              id='name'
              name='name'
              value={formState.name}
              onChange={handleChange}
              placeholder='Your name'
              required
              className='w-full pl-12 pr-4 py-3 bg-blue-50/50 dark:bg-gray-900/50 border border-blue-100 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 transition-all duration-200 placeholder:text-blue-400/70 dark:placeholder:text-gray-500'
              disabled={pending}
            />
          </div>

          <div className='relative'>
            <div className='absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 dark:text-gray-400'>
              <Mail className='h-5 w-5' />
            </div>
            <input
              id='email'
              name='email'
              type='email'
              value={formState.email}
              onChange={handleChange}
              placeholder='Your email'
              required
              className='w-full pl-12 pr-4 py-3 bg-blue-50/50 dark:bg-gray-900/50 border border-blue-100 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 transition-all duration-200 placeholder:text-blue-400/70 dark:placeholder:text-gray-500'
              disabled={pending}
            />
          </div>

          <div className='relative'>
            <div className='absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 dark:text-gray-400'>
              <Tag className='h-5 w-5' />
            </div>
            <input
              id='subject'
              name='subject'
              value={formState.subject}
              onChange={handleChange}
              placeholder='Subject'
              required
              className='w-full pl-12 pr-4 py-3 bg-blue-50/50 dark:bg-gray-900/50 border border-blue-100 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 transition-all duration-200 placeholder:text-blue-400/70 dark:placeholder:text-gray-500'
              disabled={pending}
            />
          </div>

          <div className='relative'>
            <div className='absolute left-4 top-6 text-blue-500 dark:text-gray-400'>
              <MessageSquare className='h-5 w-5' />
            </div>
            <textarea
              id='message'
              name='message'
              rows={6}
              value={formState.message}
              onChange={handleChange}
              placeholder='Your message'
              required
              className='w-full pl-12 pr-4 py-3 bg-blue-50/50 dark:bg-gray-900/50 border border-blue-100 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 transition-all duration-200 placeholder:text-blue-400/70 dark:placeholder:text-gray-500'
              disabled={pending}
            />
          </div>
        </div>

        <div className='flex justify-end'>
          <Button
            type='submit'
            disabled={pending}
            className='px-6 py-3 flex gap-2 items-center bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-300/30 dark:shadow-blue-900/20 transition-all duration-300 transform hover:scale-[1.02]'>
            {pending ? (
              <>
                <Loader2 className='h-5 w-5 animate-spin' />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className='h-5 w-5' />
                <span>Send Message</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
