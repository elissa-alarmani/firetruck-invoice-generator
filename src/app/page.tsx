'use client';

import { saveAs } from 'file-saver';
import React, { useState } from 'react';
import Form from '../components/InvoiceForm';
import { fetchListing } from '../services/api';
import { ListingResponseData } from '@/types/ListingResponseData';
import { pdf } from '@react-pdf/renderer';
import Image from 'next/image';
import { InvoiceTemplate } from '@/components/invoice/InvoiceTemplate';
import { InvoicePreview } from '@/components/InvoicePreview';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [recipientName, setRecipientName] = useState('');
  const [email, setEmail] = useState('');
  const [listingUrl, setListingUrl] = useState('');
  const [listingData, setListingData] = useState<ListingResponseData | null>(
    null,
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
        setError('An error occurred while fetching listing data.');
      }
      setListingData(null);
    }
  };

  const handleDownload = async () => {
    if (!listingData) {
      console.error('No listing data available for generating the invoice.');
      return;
    }
    const blob = await pdf(
      <InvoiceTemplate
        listingData={listingData}
        recipientName={recipientName}
        email={email}
        listingUrl={listingUrl}
      />,
    ).toBlob();
    const fileName = `Garage-Invoice-${listingData.id}.pdf`;

    saveAs(blob, fileName);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-grow flex-col items-center justify-start bg-gray-50 p-8">
        <a
          href="https://www.withgarage.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/garage-holiday-logo.svg"
            alt="Garage Invoice Logo"
            width={300}
            height={160}
            className="mb-2"
          />
        </a>
        <h1 className="mb-4 text-2xl font-bold">
          Fire Truck Invoice Generator
        </h1>
        <p className="mb-2 text-gray-600">
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
        <InvoicePreview
          isOpen={isAccordionOpen}
          listingData={listingData}
          recipientName={recipientName}
          email={email}
          listingUrl={listingUrl}
          onDownload={handleDownload}
        />
      </main>
      <Footer />
    </div>
  );
}
