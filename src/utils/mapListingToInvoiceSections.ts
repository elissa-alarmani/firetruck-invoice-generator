import { ListingResponseData } from '@/types/ListingResponseData';
import {
  InvoiceHeaderProps,
  InvoiceSummaryProps,
  InvoiceTableProps,
  FeaturesAndConditionProps,
  InvoiceDetailsProps,
} from '@/types/InvoiceProps';

export function mapListingToInvoiceSections(
  listingData: ListingResponseData,
  recipientName: string,
  email: string,
  listingUrl: string,
): {
  headerProps: InvoiceHeaderProps;
  summaryProps: InvoiceSummaryProps;
  tableProps: InvoiceTableProps;
  featuresProps: FeaturesAndConditionProps;
  detailsProps: InvoiceDetailsProps;
} {
  return {
    headerProps: {
      id: listingData.id,
      sellingPrice: listingData.sellingPrice,
    } as InvoiceHeaderProps,
    summaryProps: {
      userEmail: listingData.user.email,
      addressPrimary: listingData.addressPrimary,
      addressSecondary: listingData.addressSecondary,
      addressCity: listingData.addressCity,
      addressState: listingData.addressState,
      addressZip: listingData.addressZip,
      recipientName,
      email,
    } as InvoiceSummaryProps,
    tableProps: {
      sellingPrice: listingData.sellingPrice,
      listingTitle: listingData.listingTitle,
    } as InvoiceTableProps,
    featuresProps: {
      itemBrand: listingData.itemBrand,
      mileage: listingData.mileage,
      itemAge: listingData.itemAge,
      itemLength: listingData.itemLength,
      itemWidth: listingData.itemWidth,
      itemHeight: listingData.itemHeight,
      itemWeight: listingData.itemWeight,
      tankSize: listingData.tankSize,
      pumpSize: listingData.pumpSize,
      hasPumpTest: listingData.hasPumpTest,
      hasServiceRecords: listingData.hasServiceRecords,
      hasRust: listingData.hasRust,
      isFourWheelDrive: listingData.isFourWheelDrive,
    } as FeaturesAndConditionProps,
    detailsProps: {
      listingDescription: listingData.listingDescription,
      imageUrls: listingData.imageUrls,
      listingUrl,
    } as InvoiceDetailsProps,
  };
}
