import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { ListingResponseData } from '@/types/ListingResponseData';
import { InvoiceTemplate } from './invoice/InvoiceTemplate';

interface InvoicePreviewProps {
  isOpen: boolean;
  listingData: ListingResponseData | null;
  recipientName: string;
  email: string;
  listingUrl: string;
  onDownload: () => void;
}

export function InvoicePreview({
  isOpen,
  listingData,
  recipientName,
  email,
  listingUrl,
  onDownload,
} : InvoicePreviewProps)  {
  if (!listingData) return null;

  return (
    <div
      className={`mt-8 w-full max-w-lg overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen' : 'max-h-0'
      } rounded-md border border-gray-300 bg-white shadow-md`}
    >
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">Invoice Preview</h2>
          <button
            onClick={onDownload}
            className="rounded-md bg-orange-500 p-2 font-bold text-white hover:bg-orange-600 focus:outline-none focus:ring-1 focus:ring-orange-500"
          >
            Download Invoice
          </button>
        </div>
        <PDFViewer style={{ width: '100%', height: '60vh' }}>
          <InvoiceTemplate
            listingData={listingData}
            recipientName={recipientName}
            email={email}
            listingUrl={listingUrl}
          />
        </PDFViewer>
      </div>
    </div>
  );
}
