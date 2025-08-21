'use client';

import { useState } from 'react';
import Script from 'next/script';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Script
        async
        id="vectorshift-chat-widget"
        src="https://app.vectorshift.ai/chatWidget.js"
        strategy="afterInteractive"
      />
<button
  onClick={() => setOpen((v) => !v)}
  style={{
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
    padding: '12px 18px',
    borderRadius: '30px',
    background: '#2563eb',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    style={{ display: 'inline' }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8l-4 1 1-3.2A7.963 7.963 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
  {open ? 'Close Chat' : 'Open Chat'}
</button>

      {open && (
        <iframe
          src="https://app.vectorshift.ai/chatbots/deployed/68a6b03e9fb981b08c65fd07"
          width="400px"
          height="500px"
          style={{
            border: 'none',
            position: 'fixed',
            bottom: '70px',
            right: '20px',
            margin: 0,
            zIndex: 999,
            boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
            borderRadius: '12px',
            background: '#fff',
          }}
          allow="clipboard-read; clipboard-write; microphone"
        />
      )}
    </>
  );
}