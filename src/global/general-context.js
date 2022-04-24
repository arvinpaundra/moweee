import { createContext } from 'react';

const GeneralContext = createContext({
  isExpandHandler: () => {},
  isExpand: true,
  searchSubmitHandler: (event) => {},
  search: 'Aladdin',
});

export default GeneralContext;
