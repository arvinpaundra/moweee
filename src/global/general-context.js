import { createContext } from 'react';

const GeneralContext = createContext({
  isExpandHandler: () => {},
  isExpand: false,
  searchSubmitHandler: (event) => {},
  search: 'Aladdin',
});

export default GeneralContext;
