import React from "react";

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
    return (
      <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full max-w-md">

        <label className="flex flex-col">
          <span className="text-sm font-medium text-gray-700">
            Your email address <span className="text-red-500">*</span>
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johnsmith@gmail.com"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
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
            type="url"
            value={listingUrl}
            onChange={(e) => setListingUrl(e.target.value)}
            placeholder="Enter the fire truck listing URL"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </label>
  
        <button
          type="submit"
          className="p-2 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Generate Invoice
        </button>
  
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    );
  }