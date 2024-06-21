import ContactForm from "../_components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Feel free to reach out to me via email or follow me on social media.",
};
export default function Page() {
  return (
    <div>
      <h1 className='text-4xl font-bold'>Let&apos;s Connect</h1>
      <p className='mt-4 text-lg'>
        Feel free to reach out to me via email or follow me on social media.
      </p>
      <ContactForm />
    </div>
  );
}
