import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { InvoiceAuctionProps } from '@/types/InvoiceProps';

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
    borderTop: '1px solid #e0e0e0',
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    width: '100%',
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    paddingBottom: 2,
  },
  item: {
    fontSize: 12,
    marginBottom: 3,
  },
});

export const InvoiceAuction: React.FC<InvoiceAuctionProps> = ({
  expirationDate,
  finalPrice,
}) => {
  const auctionDetails = [
    expirationDate
      ? `Auction Expiration: ${new Date(expirationDate).toLocaleDateString(
          'en-US',
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          },
        )}`
      : 'Auction Expiration: Not Available',
    finalPrice !== null
      ? `Final Price: $${finalPrice.toLocaleString('en-US')}`
      : 'Final Price: Not Available',
  ].filter(Boolean);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.header}>Auction Details</Text>
          {auctionDetails.map((detail, index) => (
            <Text key={index} style={styles.item}>
              {detail}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};
