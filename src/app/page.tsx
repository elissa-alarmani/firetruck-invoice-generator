"use client";

import React, { useState } from "react";
import Form from "../components/InvoiceForm";
import { fetchListing } from "../services/api";
import { ListingResponseData } from "@/types/ListingResponseData";

export default function Home() {
  const [recipientName, setRecipientName] = useState("");
  const [email, setEmail] = useState("");
  const [listingUrl, setListingUrl] = useState("");
  const [listingData, setListingData] = useState<ListingResponseData | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recipientName || !email || !listingUrl) {
      setError("All fields are required.");
      return;
    }

    try {
      setError(null);
      const data = await fetchListing(listingUrl); 
      setListingData(data);
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching listing data.");
      setListingData(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Fire Truck Invoice Generator</h1>
      <p className="text-gray-600 mb-4">
        Fill out the information below to receive a personalized invoice.
      </p>

      <Form
        email={email}
        setEmail={setEmail}
        recipientName={recipientName}
        setRecipientName={setRecipientName}
        listingUrl={listingUrl}
        setListingUrl={setListingUrl}
        onSubmit={handleFormSubmit}
        error={error}
      />

      {/* Preview listing data for developing */}
      {listingData && (
        <div className="mt-8 w-full max-w-lg p-4 border border-gray-300 rounded-md shadow-md bg-white">
          <h2 className="text-lg font-bold">Invoice</h2>
          <p><strong>Recipient Name:</strong> {recipientName}</p>
          <p><strong>Email Address:</strong> {email}</p>
          <p><strong>Listing Title:</strong> {listingData.listingTitle}</p>
          <p><strong>Price:</strong> ${listingData.sellingPrice.toLocaleString()}</p>
          <p><strong>Description:</strong> {listingData.listingDescription}</p>
          
        </div>
      )}
    </div>
  );
}
