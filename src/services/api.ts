import axios from 'axios';
import { ListingResponseData } from '@/types/ListingResponseData';

const API_BASE_URL = 'https://garage-backend.onrender.com';

export const extractListingId = (url: string): string => {
  const match = url.match(/-([a-f0-9-]+)$/i);
  if (!match) {
    throw new Error('Invalid listing URL. Please check the URL and try again.');
  }
  return match[1];
};

export const fetchListing = async (
  url: string,
): Promise<ListingResponseData> => {
  try {
    const id = extractListingId(url);
    const response = await axios.post(`${API_BASE_URL}/getListing`, { id });
    return response.data.result.listing;
  } catch (error) {
    console.error('Error fetching listing:', error);
    throw new Error('Failed to fetch listing data. Please try again later.');
  }
};
