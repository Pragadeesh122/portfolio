import SubmitButton from "../_components/SubmitButton";
import {sendEmail} from "../_lib/actions";

export default function Page() {
  return (
    <div>
      <h1 className='text-4xl font-bold'>Let&apos;s Connect</h1>
      <p className='mt-4'>
        Feel free to reach out to me via email or follow me on social media.
      </p>
      <form action={sendEmail} className='mt-8 space-y-4'>
        <div>
          <label className='block text-lg font-medium' htmlFor='name'>
            Name
          </label>
          <input
            className='w-full border p-2 rounded'
            type='text'
            id='name'
            name='name'
            required
          />
        </div>
        <div>
          <label className='block text-lg font-medium' htmlFor='email'>
            Email
          </label>
          <input
            className='w-full border p-2 rounded'
            type='email'
            id='email'
            name='email'
            required
          />
        </div>
        <div>
          <label className='block text-lg font-medium' htmlFor='message'>
            Message
          </label>
          <textarea
            className='w-full border p-2 rounded'
            id='message'
            name='message'
            rows={4}
            required></textarea>
        </div>
        <SubmitButton pendingLabel='Sending...' >Send</SubmitButton>
      </form>
    </div>
  );
}
