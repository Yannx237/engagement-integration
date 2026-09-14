import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';

// Preserves the existing UI-only confirmation. No request is sent to a server.
export function useFormConfirmation() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    },
    []
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    setFormSubmitted(true);
    timeoutRef.current = setTimeout(() => setFormSubmitted(false), 5000);
  }

  return { formSubmitted, handleSubmit };
}
