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
