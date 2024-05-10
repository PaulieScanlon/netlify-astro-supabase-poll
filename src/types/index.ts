export interface PollProps {
  // These are the props the form component receives
  submitted: string | null; // This determines if the form or results are displayed
  results: { [key: string]: number }; // This is a reduced object that calculates the amount of times each result has been submitted to the database
  maxValue: Number; // This value is calculated by reducing all the results from the database
  totalVotes: Number; // This is the total amount of results from the database
}

export interface FormConfig {
  // This the shape of the form components config object
  form_name: string; // The name of the form.
  fields: Field[]; //  An array of the Field shape
}

export interface Field {
  // This is the shape of the form fields
  id: string; // The id of the input field
  label: string; // The label of the input field
}
