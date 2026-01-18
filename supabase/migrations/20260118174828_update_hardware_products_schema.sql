/*
  # Update Hardware Products Schema

  1. Changes
    - Add `device_class` column (text) - Wired or Wireless
    - Add `make` column (text) - Manufacturer name
    - Add `model` column (text) - Model name/number
    - Modify `description` to be TEXT instead of array for single feature line
    - Update category check constraint to match CSV device types
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'hardware_products' AND column_name = 'device_class'
  ) THEN
    ALTER TABLE hardware_products ADD COLUMN device_class text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'hardware_products' AND column_name = 'make'
  ) THEN
    ALTER TABLE hardware_products ADD COLUMN make text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'hardware_products' AND column_name = 'model'
  ) THEN
    ALTER TABLE hardware_products ADD COLUMN model text;
  END IF;
END $$;