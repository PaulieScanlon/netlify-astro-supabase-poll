import type { Result } from '../types';

export const groupByItem = (array: Result[]) => {
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

export const getTotalVotes = (object: { [key: string]: number }) => {
  return Object.values(object).reduce((items, item) => items + item, 0);
};
