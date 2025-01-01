import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { ListingResponseData } from "@/types/ListingResponseData";

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
    borderTop: "1px solid #e0e0e0",
    paddingTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    width: "48%",
  },
  header: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    paddingBottom: 2,
  },
  item: {
    fontSize: 12,
    marginBottom: 3,
  },
});

const formatNumberWithCommas = (number: number) =>
  number.toLocaleString("en-US");

const getCurrentYear = () => new Date().getFullYear();

const FeaturesAndConditionSection = ({
  listingData,
}: {
  listingData: ListingResponseData;
}) => {
  const specifications = [
    `Brand: ${listingData.itemBrand}`,
    `Mileage: ${listingData.mileage !== null ? formatNumberWithCommas(listingData.mileage) + " miles" : "Not Available"}`,
    listingData.itemAge !== null ? `Age: ${getCurrentYear() - listingData.itemAge} years` : null,
    listingData.itemLength
      ? `Dimensions: ${formatNumberWithCommas(
          listingData.itemLength
        )}ft x ${formatNumberWithCommas(
          listingData.itemWidth
        )}ft x ${formatNumberWithCommas(listingData.itemHeight)}ft`
      : null,
    listingData.itemWeight
      ? `Weight: ${formatNumberWithCommas(listingData.itemWeight)} lbs`
      : null,
    listingData.tankSize
      ? `Tank Size: ${formatNumberWithCommas(listingData.tankSize)} gallons`
      : null,
    listingData.pumpSize
      ? `Pump Size: ${formatNumberWithCommas(listingData.pumpSize)} GPM`
      : null,
  ].filter(Boolean);

  const condition = [
    listingData.hasServiceRecords
      ? "Service Records: Available"
      : "Service Records: Not Available",
    listingData.hasRust ? "Rust: Yes" : "Rust: No",
    listingData.isFourWheelDrive !== null
      ? listingData.isFourWheelDrive
        ? "Drive: 4WD enabled"
        : "Drive: Not 4WD"
      : null,
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

export default FeaturesAndConditionSection;
