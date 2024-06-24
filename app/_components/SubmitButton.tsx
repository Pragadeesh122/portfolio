"use client";
import {ReactNode} from "react";

export default function SubmitButton({
  children,
  pendingLabel,
  pending,
}: {
  children: ReactNode;
  pendingLabel: string;
  pending: boolean;
}) {
  return (
    <div className='flex'>
      <button
        disabled={pending}
        type='submit'
        className='text-md bg-slate-700 dark:bg-gray-800 dark:hover:bg-gray-900  text-white font-semibold px-10 py-3 rounded-full hover:bg-slate-800 disabled:bg-gray-500 dark:disabled:bg-gray-500 transition'>
        {pending ? pendingLabel : children}
      </button>
    </div>
  );
}
