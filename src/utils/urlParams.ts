export function getUrlParams(): URLSearchParams {
  return new URLSearchParams(window.location.search);
}

export function getAllParams(): Record<string, string> {
  const params = getUrlParams();
  const result: Record<string, string> = {};
  params.forEach((value, key) => {
    result[key] = value;
  });
  return result;
}

export function appendParamsToUrl(baseUrl: string): string {
  const params = getUrlParams();
  const url = new URL(baseUrl);

  params.forEach((value, key) => {
    url.searchParams.append(key, value);
  });

  return url.toString();
}

declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: Record<string, unknown>) => void;
  }
}

export function trackInitiateCheckout() {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'InitiateCheckout');
  }
}
