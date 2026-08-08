export interface JammingEvent {
  id: string;
  title: string;
  description: string | null;
  event_date: string;
  event_time: string;
  capacity: number;
  is_active: boolean;
  created_at: string;
}
