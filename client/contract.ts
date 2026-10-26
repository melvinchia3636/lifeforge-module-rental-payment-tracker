export type EndpointEntriesList_OutputOK = {
  id: string;
  month: number;
  year: number;
  previous_meter_reading: number;
  current_meter_reading: number;
  electricity_used: number;
  electricity_rate: number;
  utility_bill: number;
  rental_fee: number;
  meter_reading_image: string;
  bank_statement: string;
  amount_paid: number;
  wallet_entry_id: string;
  created: string;
  updated: string;
}[];
export type EndpointEntriesRemove_OutputNO_CONTENT = void;
export type EndpointWalletGetWalletTemplates_OutputOK = {
  id: string;
  name: string;
  type: "expenses";
  amount: number;
  particulars: string;
  asset: string | null;
  category: {
    id: string;
    name: string;
    icon: string;
    color: string;
  };
  ledgers: string[];
  location_name: string;
  location_coords: {
    lat: number;
    lon: number;
  } | null;
}[];

export interface Contract {
  entries: {
    cleanupOrphanedWalletLinks: EndpointEntriesCleanupOrphanedWalletLinks;
    create: EndpointEntriesCreate;
    getById: EndpointEntriesGetById;
    linkWalletTransaction: EndpointEntriesLinkWalletTransaction;
    list: EndpointEntriesList;
    remove: EndpointEntriesRemove;
    unlinkWalletTransaction: EndpointEntriesUnlinkWalletTransaction;
    update: EndpointEntriesUpdate;
  };
  settings: {
    get: EndpointSettingsGet;
    update: EndpointSettingsUpdate;
  };
  wallet: {
    getWalletTemplates: EndpointWalletGetWalletTemplates;
  };
}
export interface EndpointEntriesCleanupOrphanedWalletLinks {
  method: "post";
  input: {};
  output: {
    OK: EndpointEntriesCleanupOrphanedWalletLinks_OutputOK;
  };
  media: null;
}
export interface EndpointEntriesCleanupOrphanedWalletLinks_OutputOK {
  cleanedCount: number;
  entries: string[];
}
export interface EndpointEntriesCreate {
  method: "post";
  input: {
    body?: EndpointEntriesCreate_InputBody;
  };
  output: {
    CREATED: EndpointEntriesCreate_OutputCREATED;
  };
  media: {meter_reading_image: {optional: true}; bank_statement: {optional: true}};
}
export interface EndpointEntriesCreate_InputBody {
  month: number;
  year: number;
  previous_meter_reading: number;
  current_meter_reading: number;
  electricity_used: number;
  electricity_rate: number;
  utility_bill: number;
  rental_fee: number;
  amount_paid: number;
  wallet_entry_id?: string;
  auto_create_wallet_transaction?: boolean;
}
export interface EndpointEntriesCreate_OutputCREATED {
  id: string;
  month: number;
  year: number;
  previous_meter_reading: number;
  current_meter_reading: number;
  electricity_used: number;
  electricity_rate: number;
  utility_bill: number;
  rental_fee: number;
  meter_reading_image: string;
  bank_statement: string;
  amount_paid: number;
  wallet_entry_id: string;
  created: string;
  updated: string;
}
export interface EndpointEntriesGetById {
  method: "get";
  input: {
    query?: EndpointEntriesGetById_InputQuery;
  };
  output: {
    OK: EndpointEntriesGetById_OutputOK;
  };
  media: null;
}
export interface EndpointEntriesGetById_InputQuery {
  id: string;
}
export interface EndpointEntriesGetById_OutputOK {
  id: string;
  month: number;
  year: number;
  previous_meter_reading: number;
  current_meter_reading: number;
  electricity_used: number;
  electricity_rate: number;
  utility_bill: number;
  rental_fee: number;
  meter_reading_image: string;
  bank_statement: string;
  amount_paid: number;
  wallet_entry_id: string;
  created: string;
  updated: string;
}
export interface EndpointEntriesLinkWalletTransaction {
  method: "post";
  input: {
    body?: EndpointEntriesLinkWalletTransaction_InputBody;
  };
  output: {
    OK: EndpointEntriesLinkWalletTransaction_OutputOK;
  };
  media: null;
}
export interface EndpointEntriesLinkWalletTransaction_InputBody {
  entryId: string;
  transactionId: string;
}
export interface EndpointEntriesLinkWalletTransaction_OutputOK {
  id: string;
  month: number;
  year: number;
  previous_meter_reading: number;
  current_meter_reading: number;
  electricity_used: number;
  electricity_rate: number;
  utility_bill: number;
  rental_fee: number;
  meter_reading_image: string;
  bank_statement: string;
  amount_paid: number;
  wallet_entry_id: string;
  created: string;
  updated: string;
}
export interface EndpointEntriesList {
  method: "get";
  input: {};
  output: {
    OK: EndpointEntriesList_OutputOK;
  };
  media: null;
}
export interface EndpointEntriesRemove {
  method: "post";
  input: {
    query?: EndpointEntriesRemove_InputQuery;
  };
  output: {
    NO_CONTENT: EndpointEntriesRemove_OutputNO_CONTENT;
  };
  media: null;
}
export interface EndpointEntriesRemove_InputQuery {
  id: string;
}
export interface EndpointEntriesUnlinkWalletTransaction {
  method: "post";
  input: {
    body?: EndpointEntriesUnlinkWalletTransaction_InputBody;
  };
  output: {
    OK: EndpointEntriesUnlinkWalletTransaction_OutputOK;
  };
  media: null;
}
export interface EndpointEntriesUnlinkWalletTransaction_InputBody {
  entryId: string;
}
export interface EndpointEntriesUnlinkWalletTransaction_OutputOK {
  id: string;
  month: number;
  year: number;
  previous_meter_reading: number;
  current_meter_reading: number;
  electricity_used: number;
  electricity_rate: number;
  utility_bill: number;
  rental_fee: number;
  meter_reading_image: string;
  bank_statement: string;
  amount_paid: number;
  wallet_entry_id: string;
  created: string;
  updated: string;
}
export interface EndpointEntriesUpdate {
  method: "post";
  input: {
    query?: EndpointEntriesUpdate_InputQuery;
    body?: EndpointEntriesUpdate_InputBody;
  };
  output: {
    OK: EndpointEntriesUpdate_OutputOK;
  };
  media: {meter_reading_image: {optional: true}; bank_statement: {optional: true}};
}
export interface EndpointEntriesUpdate_InputQuery {
  id: string;
}
export interface EndpointEntriesUpdate_InputBody {
  month?: number;
  year?: number;
  previous_meter_reading?: number;
  current_meter_reading?: number;
  electricity_used?: number;
  electricity_rate?: number;
  utility_bill?: number;
  rental_fee?: number;
  amount_paid?: number;
  wallet_entry_id?: string;
}
export interface EndpointEntriesUpdate_OutputOK {
  id: string;
  month: number;
  year: number;
  previous_meter_reading: number;
  current_meter_reading: number;
  electricity_used: number;
  electricity_rate: number;
  utility_bill: number;
  rental_fee: number;
  meter_reading_image: string;
  bank_statement: string;
  amount_paid: number;
  wallet_entry_id: string;
  created: string;
  updated: string;
}
export interface EndpointSettingsGet {
  method: "get";
  input: {};
  output: {
    OK: EndpointSettingsGet_OutputOK;
  };
  media: null;
}
export interface EndpointSettingsGet_OutputOK {
  id: string;
  initial_prepayment: number;
  initial_meter_reading: number;
  electricity_rate: number;
  utility_bill: number;
  rental_fee: number;
  link_with_wallet: boolean;
  wallet_template_id: string;
}
export interface EndpointSettingsUpdate {
  method: "post";
  input: {
    body?: EndpointSettingsUpdate_InputBody;
  };
  output: {
    OK: EndpointSettingsUpdate_OutputOK;
  };
  media: null;
}
export interface EndpointSettingsUpdate_InputBody {
  initial_prepayment?: number;
  initial_meter_reading?: number;
  electricity_rate?: number;
  utility_bill?: number;
  rental_fee?: number;
  link_with_wallet?: boolean;
  wallet_template_id?: string;
}
export interface EndpointSettingsUpdate_OutputOK {
  id: string;
  initial_prepayment: number;
  initial_meter_reading: number;
  electricity_rate: number;
  utility_bill: number;
  rental_fee: number;
  link_with_wallet: boolean;
  wallet_template_id: string;
}
export interface EndpointWalletGetWalletTemplates {
  method: "get";
  input: {};
  output: {
    OK: EndpointWalletGetWalletTemplates_OutputOK;
  };
  media: null;
}
