export type InvoiceHeaderProps = {
  id: string;
  sellingPrice: number;
};

export type InvoiceSummaryProps = {
  userEmail: string;
  addressPrimary: string;
  addressSecondary: string;
  addressCity: string;
  addressState: string;
  addressZip: string;
  recipientName: string;
  email: string;
};

export type InvoiceTableProps = {
  sellingPrice: number;
  listingTitle: string;
};

export type FeaturesAndConditionProps = {
  itemBrand: string;
  mileage: number;
  itemAge: number;
  itemLength: number;
  itemWidth: number;
  itemHeight: number;
  itemWeight: number;
  tankSize: number;
  pumpSize: number;
  hasPumpTest: boolean;
  hasServiceRecords: boolean;
  hasRust: boolean;
  isFourWheelDrive: boolean;
};

export type InvoiceDetailsProps = {
  listingDescription: string;
  imageUrls: string[];
  listingUrl: string;
};
