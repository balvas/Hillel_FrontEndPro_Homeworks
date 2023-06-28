import { useState, useEffect } from 'react';

export function useSortedList(items) {
   const [sortBy, setSortBy] = useState('name');
   const [sortedItems, setSortedItems] = useState(items);

   useEffect(() => {
      const newSortedItems = [...items];
      if (sortBy === 'name') {
         newSortedItems.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortBy === 'rating') {
         newSortedItems.sort((a, b) => b.hotel_rating - a.hotel_rating);
      }
      setSortedItems(newSortedItems);
   }, [items, sortBy]);

   return [sortedItems, sortBy, setSortBy];
}