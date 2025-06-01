"use client"; 
// lib/getAmazonDomain.ts
// Fetches the correct Amazon domain (com, in, or com.au) based on user location
// Uses ipapi.co for geolocation and falls back to browser language if needed

export async function getAmazonDomain(): Promise<string> {
  try {
    // Try to fetch geolocation data from ipapi.co
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    const country: string = data.country;
    // Default domain for US
    let domain = 'com';
    if (country === 'IN') {
      domain = 'in';
    } else if (country === 'AU' || country === 'NZ') {
      domain = 'com.au';
    }
    return domain;
  } catch (error) {
    // If IP-based fetch fails, use browser language
    // get browser language, with fallback to first entry in languages array
    const lang = navigator.language || navigator.languages[0] || '';
    let domain = 'com';
    if (lang.includes('IN')) {
      domain = 'in';
    } else if (lang.includes('AU') || lang.includes('NZ')) {
      domain = 'com.au';
    }
    return domain;
  }
}
