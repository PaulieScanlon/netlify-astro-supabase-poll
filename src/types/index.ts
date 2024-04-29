export interface Result {
  created_at: string;
  form_name: string;
  id: number;
  result: string;
}

export interface PollProps {
  submitted: string | null;
  results: { [key: string]: number };
  maxValue: Number;
  totalVotes: Number;
}

export interface Field {
  id: string;
  label: string;
}

export interface FormConfig {
  form_name: string;
  fields: Field[];
}
