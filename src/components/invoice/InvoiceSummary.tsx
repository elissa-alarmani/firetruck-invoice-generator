import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { ListingResponseData } from '@/types/ListingResponseData';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    width: '48%',
  },
  label: {
    fontWeight: 'bold',
    color: '#808080',
    fontSize: 12,
    marginBottom: 5,
  },
  value: {
    fontWeight: 500,
    color: 'black',
    fontSize: 12,
  },
});

const InvoiceSummary = ({
  listingData,
  recipientName,
  email,
}: {
  listingData: ListingResponseData;
  recipientName: string;
  email: string;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Bill To:</Text>
          <Text style={styles.value}>{recipientName}</Text>
          <Text style={styles.value}>{email}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>From:</Text>
          <Text style={styles.value}>{listingData.user.email}</Text>
          <Text style={styles.value}>
            {listingData.addressPrimary}
            {listingData.addressSecondary &&
              `, ${listingData.addressSecondary}`}
          </Text>
          <Text style={styles.value}>
            {listingData.addressCity}, {listingData.addressState}{' '}
            {listingData.addressZip}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InvoiceSummary;
