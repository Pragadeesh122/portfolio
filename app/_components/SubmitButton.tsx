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
    <div className='flex justify-start items-center gap-6 '>
      <button
        disabled={pending}
        type='submit'
        className='text-md bg-blue-500 dark:bg-background-500 dark:hover:bg-background-600  text-white px-8 py-3 rounded hover:bg-blue-600 disabled:bg-gray-500 dark:disabled:bg-gray-500 transition'>
        {pending ? pendingLabel : children}
      </button>
    </div>
  );
}
