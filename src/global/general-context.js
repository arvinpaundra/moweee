import { createContext } from 'react';

const GeneralContext = createContext({
  isExpandHandler: () => {},
  isExpand: null,
  searchSubmitHandler: (event) => {},
  search: 'Aladdin',
});

export default GeneralContext;
