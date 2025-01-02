import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { InvoiceSummaryProps } from '@/types/InvoiceProps';

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

export function InvoiceSummary ({
  userEmail,
  addressPrimary,
  addressSecondary,
  addressCity,
  addressState,
  addressZip,
  recipientName,
  email,
}: InvoiceSummaryProps) {
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
          <Text style={styles.value}>{userEmail}</Text>
          <Text style={styles.value}>
            {addressPrimary}
            {addressSecondary && `, ${addressSecondary}`}
          </Text>
          <Text style={styles.value}>
            {addressCity}, {addressState} {addressZip}
          </Text>
        </View>
      </View>
    </View>
  );
}
