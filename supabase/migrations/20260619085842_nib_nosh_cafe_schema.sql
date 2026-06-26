/*
# Nib & Nosh Cafe - Core Schema

## Summary
Creates all tables needed for the Nib & Nosh Cafe website backend.

## Tables Created

### 1. `reservations`
Stores table reservation requests made by customers.
- id, name, email, phone, date, time, guests, special_requests, status, created_at

### 2. `party_bookings`
Stores private party/event booking inquiries.
- id, name, email, phone, event_type, event_date, start_time, guests, budget_range, special_requirements, status, created_at

### 3. `jamming_events`
Stores upcoming jamming/music events for registration.
- id, title, description, event_date, event_time, capacity, is_active, created_at

### 4. `jamming_registrations`
Stores customer registrations for jamming events.
- id, event_id (FK), name, email, phone, instrument, created_at

### 5. `contact_messages`
Stores contact form submissions.
- id, name, email, phone, subject, message, created_at

## Security
- RLS enabled on all tables.
- All tables allow anon + authenticated access (single-tenant, public-facing cafe website, no user accounts).
*/

-- Reservations
CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  guests integer NOT NULL DEFAULT 2,
  special_requests text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_reservations" ON reservations;
CREATE POLICY "anon_select_reservations" ON reservations FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_reservations" ON reservations;
CREATE POLICY "anon_insert_reservations" ON reservations FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_reservations" ON reservations;
CREATE POLICY "anon_update_reservations" ON reservations FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_reservations" ON reservations;
CREATE POLICY "anon_delete_reservations" ON reservations FOR DELETE TO anon, authenticated USING (true);

-- Party Bookings
CREATE TABLE IF NOT EXISTS party_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  event_type text NOT NULL,
  event_date date NOT NULL,
  start_time text NOT NULL,
  guests integer NOT NULL,
  budget_range text,
  special_requirements text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE party_bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_party_bookings" ON party_bookings;
CREATE POLICY "anon_select_party_bookings" ON party_bookings FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_party_bookings" ON party_bookings;
CREATE POLICY "anon_insert_party_bookings" ON party_bookings FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_party_bookings" ON party_bookings;
CREATE POLICY "anon_update_party_bookings" ON party_bookings FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_party_bookings" ON party_bookings;
CREATE POLICY "anon_delete_party_bookings" ON party_bookings FOR DELETE TO anon, authenticated USING (true);

-- Jamming Events
CREATE TABLE IF NOT EXISTS jamming_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  event_date date NOT NULL,
  event_time text NOT NULL,
  capacity integer NOT NULL DEFAULT 20,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE jamming_events ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_jamming_events" ON jamming_events;
CREATE POLICY "anon_select_jamming_events" ON jamming_events FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_jamming_events" ON jamming_events;
CREATE POLICY "anon_insert_jamming_events" ON jamming_events FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_jamming_events" ON jamming_events;
CREATE POLICY "anon_update_jamming_events" ON jamming_events FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_jamming_events" ON jamming_events;
CREATE POLICY "anon_delete_jamming_events" ON jamming_events FOR DELETE TO anon, authenticated USING (true);

-- Jamming Registrations
CREATE TABLE IF NOT EXISTS jamming_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid NOT NULL REFERENCES jamming_events(id) ON DELETE CASCADE,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  instrument text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE jamming_registrations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_jamming_registrations" ON jamming_registrations;
CREATE POLICY "anon_select_jamming_registrations" ON jamming_registrations FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_jamming_registrations" ON jamming_registrations;
CREATE POLICY "anon_insert_jamming_registrations" ON jamming_registrations FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_jamming_registrations" ON jamming_registrations;
CREATE POLICY "anon_update_jamming_registrations" ON jamming_registrations FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_jamming_registrations" ON jamming_registrations;
CREATE POLICY "anon_delete_jamming_registrations" ON jamming_registrations FOR DELETE TO anon, authenticated USING (true);

-- Contact Messages
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_contact_messages" ON contact_messages;
CREATE POLICY "anon_select_contact_messages" ON contact_messages FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_contact_messages" ON contact_messages;
CREATE POLICY "anon_update_contact_messages" ON contact_messages FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_contact_messages" ON contact_messages;
CREATE POLICY "anon_delete_contact_messages" ON contact_messages FOR DELETE TO anon, authenticated USING (true);

-- Seed sample jamming events
INSERT INTO jamming_events (title, description, event_date, event_time, capacity, is_active)
VALUES
  ('Friday Night Jam', 'An open-mic jamming session for musicians of all skill levels. Bring your instrument and your passion!', '2026-07-04', '07:00 PM', 25, true),
  ('Acoustic Evening', 'Intimate acoustic performances in our cozy garden courtyard. Register to perform or simply enjoy the vibe.', '2026-07-11', '06:30 PM', 20, true),
  ('Blues & Brews Night', 'Blues-themed jam session paired with our signature beverages. Perfect for soulful evenings.', '2026-07-18', '07:30 PM', 30, true)
ON CONFLICT DO NOTHING;
