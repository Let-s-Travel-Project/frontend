// City 관련
export interface City {
  // filter(arg0: (list: City) => boolean): unknown;
  id: number;
  countryCode: string;
  cityName: string;
  cityNameTranslated: string;
  cityPhotoURL?: string;
}

// Place
export interface Place {
  placeSeq: number;
  placeId: string;
  displayName: string;
  countryCode: string;
  city: string;
  formattedAddress: string;
  location: {
    latitude: number;
    longitude: number;
  };
  primaryType: string;
  googleMapsUri: string;
}
