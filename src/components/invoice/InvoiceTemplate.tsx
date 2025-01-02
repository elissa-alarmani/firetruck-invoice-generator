import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import InvoiceHeader from './InvoiceHeader';
import InvoiceSummary from './InvoiceSummary';
import InvoiceTable from './InvoiceTable';
import InvoiceDetails from './InvoiceDetails';
import { ListingResponseData } from '@/types/ListingResponseData';
import FeaturesAndConditionSection from './FeaturesAndCondition';

import { Font } from '@react-pdf/renderer';

Font.register({
  family: 'Inter',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyeMZhrib2Bg-4.ttf',
      fontWeight: 100,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfMZhrib2Bg-4.ttf',
      fontWeight: 200,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZhrib2Bg-4.ttf',
      fontWeight: 300,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf',
      fontWeight: 400,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf',
      fontWeight: 500,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf',
      fontWeight: 600,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZhrib2Bg-4.ttf',
      fontWeight: 700,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZhrib2Bg-4.ttf',
      fontWeight: 800,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuBWYMZhrib2Bg-4.ttf',
      fontWeight: 900,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Inter',
    backgroundColor: '#ffffff',
  },
});

const InvoiceTemplate = ({
  listingData,
  recipientName,
  email,
  listingUrl,
}: {
  listingData: ListingResponseData;
  recipientName: string;
  email: string;
  listingUrl: string;
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <InvoiceHeader listingData={listingData} />
        <InvoiceSummary
          listingData={listingData}
          recipientName={recipientName}
          email={email}
        />
        <InvoiceTable listingData={listingData} />
        <FeaturesAndConditionSection listingData={listingData} />
        <InvoiceDetails listingData={listingData} listingUrl={listingUrl} />
      </Page>
    </Document>
  );
};

export default InvoiceTemplate;
