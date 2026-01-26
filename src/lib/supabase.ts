import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface LibraryResource {
  id: string;
  title: string;
  description: string | null;
  category: 'blog' | 'data_sheet' | 'use_case';
  image_url: string | null;
  content_url: string | null;
  published_date: string;
  created_at: string;
  updated_at: string;
}

export interface HardwareProduct {
  id: string;
  title: string;
  description: string[];
  category: 'pots_replacement' | 'ip_phones' | 'routers_gateways' | 'headsets' | 'paging' | 'ata';
  device_class: string | null;
  make: string | null;
  model: string | null;
  image_url: string | null;
  datasheet_url: string;
  created_at: string;
  updated_at: string;
}
