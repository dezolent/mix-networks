/*
  # Add ATA Category to Hardware Products

  1. Changes
    - Update the category check constraint to include 'ata' as a valid category
    - This allows Analog Telephone Adapters to be tracked separately from routers and gateways
  
  2. Notes
    - Existing data will not be affected by this migration
    - Products can now be categorized as: pots_replacement, ip_phones, routers_gateways, headsets, paging, or ata
*/

DO $$
BEGIN
  ALTER TABLE hardware_products DROP CONSTRAINT IF EXISTS hardware_products_category_check;
  
  ALTER TABLE hardware_products 
  ADD CONSTRAINT hardware_products_category_check 
  CHECK (category IN ('pots_replacement', 'ip_phones', 'routers_gateways', 'headsets', 'paging', 'ata'));
END $$;