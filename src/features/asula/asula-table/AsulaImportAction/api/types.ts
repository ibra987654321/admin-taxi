export interface ApiCreateAsulaImportRequest {
  address_ky: string;
  address_ru: string;
  basis_ky: string;
  basis_ru: string;
  company_name_ky: string;
  company_name_ru: string;
  domain_ky: string;
  domain_ru: string;
  format_ky: string;
  format_ru: string;
  location_ky: string;
  location_ru: string;
  pin: string;
  registration_date: string;
  registration_number: string;
  serial_number: string;
  speciality_ky: string;
  speciality_ru: string;
  year: number;
}

export interface ApiCreateAsulaImportResponse {
  data: boolean;
}
