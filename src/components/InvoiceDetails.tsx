import React from "react";
import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import { ListingResponseData } from "@/types/ListingResponseData";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    // padding: 15,
  },
  descriptionContainer: {
    marginBottom: 15,
    paddingBottom: 10,
  },
  header: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  description: {
    fontSize: 12,
    color: "#555",
    lineHeight: 1.6,
    textAlign: "justify",
  },
  imageContainer: {
    alignItems: "flex-start",
    marginTop: 15,
  },
  image: {
    width: "25%", 
    height: "auto",
    border: "1px solid #d0d0d0",
    borderRadius: 5,
  },
  noImage: {
    fontSize: 12,
    color: "#999",
  },
});

const InvoiceDetails = ({
  listingData,
}: {
  listingData: ListingResponseData;
}) => {
  return (
    <View style={styles.container}>
      {/* Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.header}>Description</Text>
        <Text style={styles.description}>{listingData.listingDescription}</Text>
      </View>

      {/* Image */}
      <View style={styles.imageContainer}>
        {listingData.imageUrls?.[0] ? (
          <Image style={styles.image} src={listingData.imageUrls[0]} />
        ) : (
          <Text style={styles.noImage}>No image available</Text>
        )}
      </View>
    </View>
  );
};

export default InvoiceDetails;
