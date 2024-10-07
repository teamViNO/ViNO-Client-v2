export interface NotifyItemProps {
  state: "success" | "fail";
  type: "video" | "notice";
  alarm_id: number;
  video_id?: number;
  title?: string;
  content: string;
  is_confirm: number;
  created_at: string;
}
