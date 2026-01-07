/*
  # Create Library Resources Table

  1. New Tables
    - `library_resources`
      - `id` (uuid, primary key)
      - `title` (text, required) - Resource title
      - `description` (text) - Brief description of the resource
      - `category` (text, required) - Category: 'blog', 'data_sheet', or 'use_case'
      - `image_url` (text) - URL to resource thumbnail/image
      - `content_url` (text) - Link to the full resource
      - `published_date` (date, required) - Publication date
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Record update timestamp

  2. Security
    - Enable RLS on `library_resources` table
    - Add policy for public read access (resources are public content)
*/

CREATE TABLE IF NOT EXISTS library_resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  category text NOT NULL CHECK (category IN ('blog', 'data_sheet', 'use_case')),
  image_url text,
  content_url text,
  published_date date NOT NULL DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE library_resources ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Library resources are publicly readable"
  ON library_resources
  FOR SELECT
  TO anon, authenticated
  USING (true);