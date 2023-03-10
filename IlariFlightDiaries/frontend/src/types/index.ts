export interface Diary {
  id: number;
  date: string;
  weather: string;
  visibility: string;
}

export interface DiaryWithComment extends Diary{
  comment:string
}

export type NewDiary = Omit<DiaryWithComment,"id">

export interface ValidationError {
  status: number;
  data:string
}
