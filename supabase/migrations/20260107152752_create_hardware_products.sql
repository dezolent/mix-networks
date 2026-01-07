/*
  # Create Hardware Products Table

  1. New Tables
    - `hardware_products`
      - `id` (uuid, primary key)
      - `title` (text, required) - Product name
      - `description` (text array, required) - 3-5 bullet points describing the product
      - `category` (text, required) - Category: 'pots_replacement', 'ip_phones', 'routers_gateways', 'headsets', or 'paging'
      - `image_url` (text) - URL to product image
      - `datasheet_url` (text, required) - Link to product datasheet
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Record update timestamp

  2. Security
    - Enable RLS on `hardware_products` table
    - Add policy for public read access (products are public content)
*/

CREATE TABLE IF NOT EXISTS hardware_products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text[] NOT NULL,
  category text NOT NULL CHECK (category IN ('pots_replacement', 'ip_phones', 'routers_gateways', 'headsets', 'paging')),
  image_url text,
  datasheet_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE hardware_products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Hardware products are publicly readable"
  ON hardware_products
  FOR SELECT
  TO anon, authenticated
  USING (true);