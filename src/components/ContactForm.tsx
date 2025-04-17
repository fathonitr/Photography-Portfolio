// components/ContactForm.tsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    services: [] as string[],
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter(s => s !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('Message sent!');
      setFormData({ name: '', email: '', message: '', services: [] });
    } else {
      setStatus('Failed to send.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center">Contact Me</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full p-2 border border-gray-300 rounded"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full p-2 border border-gray-300 rounded"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <div>
        <p className="mb-1">What are you interested in?</p>
        <div className="flex flex-wrap gap-4">
          {['Weddings', 'Portraits', 'Events', 'Product', 'Other'].map(service => (
            <label key={service} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={service}
                checked={formData.services.includes(service)}
                onChange={handleCheckbox}
              />
              {service}
            </label>
          ))}
        </div>
      </div>

      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full p-2 border border-gray-300 rounded"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
      >
        Send
      </button>

      {status && <p className="text-center text-sm text-gray-600">{status}</p>}
    </form>
  );
}
