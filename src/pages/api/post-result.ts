import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

export const POST: APIRoute = async ({ request }) => {
  const formData = Array.from((await request.formData()).entries()).map(([name, value]) => {
    return {
      name,
      value,
    };
  })[0];

  if (!formData) {
    return new Response(
      JSON.stringify({
        message: 'Select one answer',
      }),
      { status: 422 }
    );
  }

  const created_at = new Date();
  const form_name = formData.name;
  const result = formData.value;

  try {
    const supabase = createClient(import.meta.env.SUPABASE_URL, import.meta.env.SUPABASE_ANON_KEY);

    const { error, statusText } = await supabase.from('results').insert({ created_at, form_name, result });

    if (error) {
      throw new Error(error.message);
    }

    return new Response(
      JSON.stringify({
        message: statusText,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: (error as Error).message,
      }),
      { status: 500 }
    );
  }
};
