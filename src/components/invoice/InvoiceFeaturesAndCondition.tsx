import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { InvoiceFeaturesAndConditionProps } from '@/types/InvoiceProps';

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
    width: '48%',
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

const formatNumberWithCommas = (number: number) =>
  number.toLocaleString('en-US');

const getCurrentYear = () => new Date().getFullYear();

export const InvoiceFeaturesAndConditionSection: React.FC<
  InvoiceFeaturesAndConditionProps
> = ({
  itemBrand,
  mileage,
  itemAge,
  itemLength,
  itemWidth,
  itemHeight,
  itemWeight,
  tankSize,
  pumpSize,
  hasPumpTest,
  hasServiceRecords,
  hasRust,
  isFourWheelDrive,
}) => {
  const specifications = [
    `Brand: ${itemBrand}`,
    `Mileage: ${mileage !== null ? formatNumberWithCommas(mileage) + ' miles' : 'Not Available'}`,
    itemAge !== null ? `Age: ${getCurrentYear() - itemAge} years` : null,
    itemLength
      ? `Dimensions: ${formatNumberWithCommas(
          itemLength,
        )}ft x ${formatNumberWithCommas(
          itemWidth,
        )}ft x ${formatNumberWithCommas(itemHeight)}ft`
      : null,
    itemWeight ? `Weight: ${formatNumberWithCommas(itemWeight)} lbs` : null,
    tankSize ? `Tank Size: ${formatNumberWithCommas(tankSize)} gallons` : null,
    pumpSize ? `Pump Size: ${formatNumberWithCommas(pumpSize)} GPM` : null,
  ].filter(Boolean);

  const condition = [
    hasServiceRecords
      ? 'Service Records: Available'
      : 'Service Records: Not Available',
    hasPumpTest ? 'Pump Test: Available' : 'Pump Test: Not Available',
    hasRust ? 'Rust: Yes' : 'Rust: No',
    isFourWheelDrive ? 'Drive: 4WD enabled' : 'Drive: Not 4WD',
  ].filter(Boolean);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* Item Specifications */}
        <View style={styles.column}>
          <Text style={styles.header}>Item Specifications</Text>
          {specifications.map((spec, index) => (
            <Text key={index} style={styles.item}>
              {spec}
            </Text>
          ))}
        </View>

        {/* Condition */}
        <View style={styles.column}>
          <Text style={styles.header}>Condition</Text>
          {condition.map((cond, index) => (
            <Text key={index} style={styles.item}>
              {cond}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};
