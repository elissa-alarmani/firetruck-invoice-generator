"use client";

import { saveAs } from 'file-saver';
import React, { useState } from "react";
import Form from "../components/InvoiceForm";
import { fetchListing } from "../services/api";
import { ListingResponseData } from "@/types/ListingResponseData";
import InvoiceTemplate from "@/components/invoice/InvoiceTemplate";
import { PDFViewer } from "@react-pdf/renderer";
import { pdf } from '@react-pdf/renderer';
import Image from 'next/image';

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
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An error occurred while fetching listing data.");
      }
      setListingData(null);
    }
  };


  const handleDownload = async () => {
    if (!listingData) {
      console.error("No listing data available for generating the invoice.");
      return;
    }
    const blob = await pdf(
      <InvoiceTemplate
        listingData={listingData} 
        recipientName={recipientName}
        email={email}
        listingUrl={listingUrl}
      />
    ).toBlob();
    const fileName = `Garage-Invoice-${listingData.id}.pdf`;

    saveAs(blob, fileName);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8 bg-gray-50">
      <a href="https://www.withgarage.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/garage-holiday-logo.svg"
          alt="Garage Invoice Logo"
          width={300}
          height={160}
          className="mb-2"
        />
      </a>
      <h1 className="text-2xl font-bold mb-4">Fire Truck Invoice Generator</h1>
      <p className="text-gray-600 mb-2">
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
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Invoice Preview</h2>
                <button
                  onClick={handleDownload}
                  className="p-2 font-bold rounded-md focus:outline-none focus:ring-1 bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500"
                >
                  Download Invoice
                </button>
              </div>
              <PDFViewer style={{ width: "100%", height: "60vh" }}>
                <InvoiceTemplate
                  listingData={listingData}
                  recipientName={recipientName}
                  email={email}
                  listingUrl={listingUrl}
                />
              </PDFViewer>
            </>
          )}
        </div>
      </div>
    </div>
  );
}