import type { Database } from '../types/database.types';

export const groupByItem = (array: Database['public']['Tables']['results']['Row'][]) => {
  return array.reduce((items: { [key: string]: number }, item) => {
    items[item.result] = (items[item.result] || 0) + 1;
    return items;
  }, {});
};

export const getMaxValue = (object: { [key: string]: number }) => {
  return Math.max(
    ...Object.values(object).map((val) => {
      return Number(val);
    })
  );
};
