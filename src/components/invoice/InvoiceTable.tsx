import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { InvoiceTableProps } from '@/types/InvoiceProps';

const styles = StyleSheet.create({
  table: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e4e4e4',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e4e4e4',
    flex: 1,
    textAlign: 'center',
  },
  header: {
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: 'white',
  },
  totalsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: 10,
    marginRight: 10,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  value: {
    fontSize: 12,
    textAlign: 'right',
  },
  totals: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export const InvoiceTable: React.FC<InvoiceTableProps> = ({
  sellingPrice,
  listingTitle,
}) => {
  const subtotal = sellingPrice;
  const tax = 0;
  const total = subtotal + tax;

  return (
    <>
      {/* Itemized Table */}
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, styles.header]}>Item</Text>
          <Text style={[styles.tableCell, styles.header]}>Quantity</Text>
          <Text style={[styles.tableCell, styles.header]}>Price</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>{listingTitle}</Text>
          <Text style={styles.tableCell}>1</Text>
          <Text style={styles.tableCell}>${subtotal.toLocaleString()}</Text>
        </View>
      </View>

      {/* Totals Section */}
      <View style={styles.totalsContainer}>
        <View style={styles.totalRow}>
          <Text style={styles.label}>Subtotal:</Text>
          <Text style={styles.value}>${subtotal.toLocaleString()}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.label}>Tax:</Text>
          <Text style={styles.value}>$0.00</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totals}>Total:</Text>
          <Text style={styles.totals}>${total.toLocaleString()}</Text>
        </View>
      </View>
    </>
  );
};
