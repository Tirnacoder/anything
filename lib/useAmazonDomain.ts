"use client";
// lib/useAmazonDomain.ts
// React hook to fetch and return the Amazon domain based on user locale
import { useState, useEffect } from 'react';
import { getAmazonDomain } from './getAmazonDomain';

export function useAmazonDomain() {
  // State for storing the resolved Amazon domain (e.g. 'com', 'in', 'com.au')
  const [domain, setDomain] = useState<string>('com');

  useEffect(() => {
    // On mount, resolve the domain and update state
    getAmazonDomain()
      .then((resolved) => {
        setDomain(resolved);
      })
      .catch(() => {
        // On error, keep default 'com'
        setDomain('com');
      });
  }, []);

  return domain; // Return the current Amazon domain to consumers
}