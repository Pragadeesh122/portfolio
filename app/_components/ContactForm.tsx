"use client";

import {useRef, useState} from "react";
import SubmitButton from "./SubmitButton";
import {sendEmail} from "../_lib/actions";
import toast from "react-hot-toast";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setPending(true);
      const data = new FormData(formRef.current!);

      const formData = {
        name: data.get("name"),
        email: data.get("email"),
        message: data.get("message"),
      };

      await sendEmail(formData);
      toast.success("Message sent successfully!");
      formRef.current!.reset();
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setPending(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className='mt-6 space-y-4 flex flex-col gap-3'>
      <div>
        <label className='block text-md mb-1 font-semibold' htmlFor='name'>
          Name
        </label>
        <input
          className='w-full border p-2 rounded border-slate-400 dark:border-slate-600 '
          type='text'
          id='name'
          name='name'
          required
        />
      </div>
      <div>
        <label className='block text-md font-semibold mb-1 ' htmlFor='email'>
          Email
        </label>
        <input
          className='w-full border p-2 rounded-md   border-slate-400 dark:border-slate-600 '
          type='email'
          id='email'
          name='email'
          required
        />
      </div>
      <div>
        <label
          className='block text-md font-semibold rounded-md mb-1'
          htmlFor='message'>
          Message
        </label>
        <textarea
          className='w-full border p-2 rounded-md   border-slate-400  dark:border-slate-600'
          id='message'
          name='message'
          rows={4}
          required></textarea>
      </div>
      <SubmitButton pendingLabel='Sending...' pending={pending}>
        Let&apos;s Connect
      </SubmitButton>
    </form>
  );
}
