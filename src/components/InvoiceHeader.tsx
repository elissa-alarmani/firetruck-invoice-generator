import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { ListingResponseData } from "@/types/ListingResponseData";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 20,
        borderBottom: "1px solid #d0d0d0",
    },
    leftColumn: {
        flexDirection: "column",
        alignItems: "center",
        width: "40%",
    },
    logo: {
        width: 80,
        height: "auto",
        marginBottom: 5,
    },
    companyName: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
    },
    rightColumn: {
        flexDirection: "column",
        alignItems: "flex-start",
        width: "30%",
    },
    invoiceTitle: {
        fontSize: 24,
        fontWeight: 900,
        marginBottom: 5,
    },
    dateLabel: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },

    label: {
        fontSize: 12,
    },
    invoiceDateLabel: {
        fontSize: 12,
        color: "#808080",
        fontWeight: "bold",
        marginRight: 4,
    },
    invoiceBalanceDue: {
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 5,
        backgroundColor: "#F0F0F0",
        padding: 5,
        borderRadius: 5,
        border: "1px solid #F0F0F0",
        textAlign: "center",
    },
});

const InvoiceHeader = ({
    listingData,
}: {
    listingData: ListingResponseData;
}) => {
    return (
        <View style={styles.container}>
            {/* Left: Logo */}
            <View style={styles.leftColumn}>
                {/* <Image style={styles.logo} src="src/components/garage-invoice-logo.png" /> Update the path */}
                <Text style={styles.companyName}>Garage Technologies, Inc.</Text>
            </View>

            {/* Right: Invoice Details */}
            <View style={styles.rightColumn}>
                <Text style={styles.invoiceTitle}>INVOICE</Text>
                <Text style={styles.label}># {listingData.id.slice(0, 9)}</Text>
                <View style={styles.dateLabel}>
                    <Text style={styles.invoiceDateLabel}>
                        Date:  
                    </Text>
                    <Text style={styles.label}>
                        {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </Text>
                </View>
                <Text style={styles.invoiceBalanceDue}>
                    Balance Due: {`$${listingData.sellingPrice.toLocaleString()}`}
                </Text>
            </View>
        </View>
    );
};

export default InvoiceHeader;
