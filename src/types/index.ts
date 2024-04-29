export interface PollProps {
  submitted: string | null;
  results: { [key: string]: number };
  maxValue: Number;
  totalVotes: Number;
}

export interface FormConfig {
  form_name: string;
  fields: Field[];
}

export interface Field {
  id: string;
  label: string;
}
