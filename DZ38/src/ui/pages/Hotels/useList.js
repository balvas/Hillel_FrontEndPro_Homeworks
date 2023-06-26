// Core
import { useEffect } from 'react';
import { push } from 'redux-first-history';
import { useSelector, useDispatch } from 'react-redux';
// Engine
import hotelsSelectors from '../../../engine/core/hotels/selectors';
import { links } from '../../../engine/config/links';

export const useList = () => {
  const dispatch = useDispatch();
  const items = useSelector(hotelsSelectors.items);
  const loading = useSelector(hotelsSelectors.loading);
  useEffect(() => {
    if (items.length === 0) {
      dispatch(push(links.main));
    }
  }, []);
  return {
    items,
    loading,
  };
};
