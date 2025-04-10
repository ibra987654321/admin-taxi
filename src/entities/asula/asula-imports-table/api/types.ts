export interface AsulaImportTableItemType {
  created_at: string;
  modified_at: string;
  address_ky: string;
  address_ru: string;
  basis_ky: string;
  basis_ru: string;
  call_number: string;
  certificate_num: string;
  company_name: string;
  contingent: number;
  contingent_com: string;
  domain_ky: string;
  domain_ru: string;
  duplicate: string;
  expiration_date: string;
  format_ky: string;
  format_ru: string;
  full_name_ky: string;
  full_name_ru: string;
  location_ky: string;
  location_ru: string;
  order_number: string;
  pin: string;
  position_ky: string;
  position_ru: string;
  registration_date: string;
  registration_num: string;
  serial_number: string;
  speciality_ky: string;
  speciality_ru: string;
  supplement_num: number;
  supplement_prof: number;
  type: string;
  without_right_to: string;
  id_license_import: number;
  reg_minjust_ru: string;
  reg_minjust_ky: string;
  city: string;
  year: number;
}

export interface AsulaImportTablePaginationType {
  total: number;
  limit: number;
  currentPage: number;
  totalPages: number;
}
export interface AsulaImportTableDataType {
  data: AsulaImportTableItemType[];
  pagination: AsulaImportTablePaginationType;
}

export interface AsulaImportTableRequest {
  page: number;
  limit: number;
}
