"use client";

import React, { useState } from "react";
import Form from "../components/InvoiceForm";
import { fetchListing } from "../services/api";
import { ListingResponseData } from "@/types/ListingResponseData";
import InvoiceTemplate from "@/components/InvoiceTemplate";
import { PDFViewer } from "@react-pdf/renderer";

export default function Home() {
  const [recipientName, setRecipientName] = useState("");
  const [email, setEmail] = useState("");
  const [listingUrl, setListingUrl] = useState("");
  const [listingData, setListingData] = useState<ListingResponseData | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null);
      const data = await fetchListing(listingUrl);
      setListingData(data);
      setIsAccordionOpen(true);
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
      {/* Form Component */}
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

      {/* Accordion Section */}
      <div
        className={`mt-8 w-full max-w-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isAccordionOpen ? "max-h-screen" : "max-h-0"
        } border border-gray-300 rounded-md shadow-md bg-white`}
      >
        <div className="p-4">
          {listingData && (
            <>
              <h2 className="text-lg font-bold mb-4">Invoice Preview</h2>
              <PDFViewer style={{ width: "100%", height: "60vh" }}>
                <InvoiceTemplate listingData={listingData} recipientName={recipientName} email={email} />
              </PDFViewer>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
