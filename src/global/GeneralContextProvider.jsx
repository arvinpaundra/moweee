import { useEffect, useReducer, useState } from 'react';
import GeneralContext from './general-context';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return { searchState: action.payload };
    default:
      return state;
  }
};

const GeneralContextProvider = (props) => {
  const { children } = props;

  const [general, dispatchGeneral] = useReducer(reducer, { searchState: 'Aladdin' });

  const [isExpand, setIsExpand] = useState(null);

  const onExpandHandler = () => {
    setIsExpand((prevState) => !prevState);
  };

  useEffect(() => {
    onExpandHandler();
  }, []);

  const onSubmitHandler = (event) => {
    dispatchGeneral({ type: 'INPUT_CHANGE', payload: event.target.value });
  };

  console.log(isExpand);

  return (
    <GeneralContext.Provider
      value={{
        isExpandHandler: onExpandHandler,
        isExpand: isExpand,
        searchSubmitHandler: onSubmitHandler,
        search: general.searchState,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
