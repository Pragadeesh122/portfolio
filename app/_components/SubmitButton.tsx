"use client";
import {useFormStatus} from "react-dom";

import {ReactNode} from "react";

export default function SubmitButton({
  children,
  pendingLabel,
}: {
  children: ReactNode;
  pendingLabel: any;
}) {
  const {pending} = useFormStatus();

  return (
    <div className='flex justify-start items-center gap-6 '>
      <button
        disabled={pending}
        type='submit'
        className='bg-blue-500 dark:bg-background-500 dark:hover:bg-background-600  text-white px-6 py-3 rounded hover:bg-blue-600 disabled:bg-gray-500 dark:disabled:bg-gray-500 transition'>
        {pending ? pendingLabel : children}
      </button>
    </div>
  );
}
