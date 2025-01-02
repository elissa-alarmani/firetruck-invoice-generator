import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { extractListingId, fetchListing } from '../api';
import { ListingResponseData } from '@/types/ListingResponseData';

const mock = new MockAdapter(axios);
const API_BASE_URL = 'https://garage-backend.onrender.com';

describe('Listing Utilities', () => {
  afterEach(() => {
    mock.reset();
  });

  describe('extractListingId', () => {
    it('should extract the listing ID from a valid URL', () => {
      const url =
        'https://www.withgarage.com/listing/2003-Ford-F550-Rescue-fdd3f8c6-5d79-4dac-af01-48bb0a1e61f9';
      expect(extractListingId(url)).toBe(
        'fdd3f8c6-5d79-4dac-af01-48bb0a1e61f9',
      );
    });

    it('should throw an error for an invalid URL', () => {
      const url = 'https://www.withgarage.com/listing/invalid-url';
      expect(() => extractListingId(url)).toThrow(
        'Invalid listing URL. Please check the URL and try again.',
      );
    });
  });

  describe('fetchListing', () => {
    it('should fetch listing data for a valid URL', async () => {
      const url =
        'https://www.withgarage.com/listing/2003-Ford-F550-Rescue-fdd3f8c6-5d79-4dac-af01-48bb0a1e61f9';
      const mockResponse: ListingResponseData = {
        id: 'fdd3f8c6-5d79-4dac-af01-48bb0a1e61f9',
        createdAt: '2023-12-01T00:00:00Z',
        updatedAt: '2023-12-02T00:00:00Z',
        listingTitle: '2003 Ford F550 Rescue',
        sellingPrice: 50000,
        imageUrls: ['https://example.com/image1.jpg'],
        listingStatus: 1,
        tags: ['firetruck', 'truck'],
        categories: [101],
        itemBrand: 'Ford',
        listingDescription: 'A testing description',
        itemAge: 20,
        itemLength: 25,
        itemWidth: 25,
        itemHeight: 25,
        itemWeight: 250000,
        addressPrimary: '123 Main St',
        addressSecondary: '',
        addressCity: 'Boston',
        addressZip: '02120',
        addressState: 'MA',
        mileage: 30000,
        hasServiceRecords: true,
        hasRust: false,
        isFourWheelDrive: true,
        tankSize: 500,
        pumpSize: 200,
        hasPumpTest: true,
        aerialLength: null,
        isAuction: false,
        expirationDate: null,
        finalPrice: null,
        vin: '123VIN123',
        userId: 'user123',
        user: {
          id: 'user123',
          email: 'user@example.com',
        },
      };

      mock
        .onPost(`${API_BASE_URL}/getListing`, {
          id: 'fdd3f8c6-5d79-4dac-af01-48bb0a1e61f9',
        })
        .reply(200, {
          result: { listing: mockResponse },
        });

      const result = await fetchListing(url);
      expect(result).toEqual(mockResponse);
    });

    it('should throw an error if the fetch fails', async () => {
      const url = 'https://www.withgarage.com/listing/201-48bb0a1e61f9';

      mock
        .onPost(`${API_BASE_URL}/getListing`, { id: '201-48bb0a1e61f9' })
        .reply(500);

      await expect(fetchListing(url)).rejects.toThrow(
        'Failed to fetch listing data. Please try again later.',
      );
    });
  });
});
