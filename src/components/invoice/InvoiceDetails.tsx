import React from 'react';
import { View, Text, StyleSheet, Image } from '@react-pdf/renderer';
import { InvoiceDetailsProps } from '@/types/InvoiceProps';

/* eslint-disable jsx-a11y/alt-text */

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  descriptionContainer: {
    marginBottom: 15,
    paddingBottom: 10,
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 12,
    color: '#555',
    lineHeight: 1.6,
    textAlign: 'justify',
  },
  imageContainer: {
    alignItems: 'flex-start',
    marginTop: 15,
  },
  image: {
    width: '25%',
    height: 'auto',
    border: '1px solid #d0d0d0',
    borderRadius: 5,
  },
  noImage: {
    fontSize: 12,
    color: '#999',
  },
  listingLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  listingText: {
    fontSize: 12,
    color: '#555',
    marginBottom: 5,
  },
  listingLink: {
    fontSize: 10,
    color: '#0073e6',
    textDecoration: 'underline',
    wordBreak: 'break-all',
  },
});

const InvoiceDetails: React.FC<InvoiceDetailsProps> = ({
  listingDescription,
  imageUrls,
  listingUrl,
}) => {
  return (
    <View style={styles.container}>
      {/* Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.header}>Description</Text>

        {/* Viewing Listing Link */}
        <View style={styles.listingLinkContainer}>
          <Text style={styles.listingText}>View listing: </Text>
          <Text style={styles.listingLink}>{listingUrl}</Text>
        </View>
        <Text style={styles.description}>{listingDescription}</Text>
      </View>

      {/* Image */}
      <View style={styles.imageContainer}>
        {imageUrls?.[0] ? (
          <Image style={styles.image} src={imageUrls[0]} />
        ) : (
          <Text style={styles.noImage}>No image available</Text>
        )}
      </View>
    </View>
  );
};

export default InvoiceDetails;
