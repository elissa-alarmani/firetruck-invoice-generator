import React, { ChangeEvent, useState } from "react";

type FormProps = {
    email: string; 
    setEmail: (e: string) => void;
    recipientName: string;
    setRecipientName: (n: string) => void;
    listingUrl: string;
    setListingUrl: (l: string) => void;
    onSubmit: (e: React.FormEvent) => void;
    error?: string | null;
}

export default function Form({
    email,
    setEmail,
    recipientName,
    setRecipientName,
    listingUrl,
    setListingUrl,
    onSubmit,
    error,
  }: FormProps) {

    const [emailError, setEmailError] = useState<string | null>(null);
    const [urlError, setUrlError] = useState<string | null>(null);

    const validateEmail = (email: string) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(email);
    }

    const validateUrl = (url: string) => {
      const urlRegex = /^https:\/\/www\.withgarage\.com\/listing\//;
      return urlRegex.test(url);
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEmail(value);
      setEmailError(validateEmail(value) ? null : "Please enter a valid email address.");
    }

    const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setListingUrl(value);
      setUrlError(validateUrl(value) ? null : "Please enter a valid Garage Listing URL.");  
    }
    
    return (
      <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full max-w-md">

        <label className="flex flex-col">
          <span className="text-sm font-medium text-gray-700">
            Your email address <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="johnsmith@gmail.com"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {emailError && <p className="text-red-500 mt-1 text-sm">{emailError}</p>}
        </label>
  
         <label className="flex flex-col">
          <span className="text-sm font-medium text-gray-700">
            Name of invoice recipient <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            placeholder="Smith City Volunteer Fire Department"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium text-gray-700">
            Listing URL <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            value={listingUrl}
            onChange={handleUrlChange}
            placeholder="Enter the fire truck listing URL"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {urlError && <p className="text-red-500 mt-1 text-sm">{urlError}</p>}
        </label>
  
        <button
          type="submit"
          className="p-2 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          disabled={emailError || urlError ? true : false}
        >
          Generate Invoice
        </button>
  
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    );
  }