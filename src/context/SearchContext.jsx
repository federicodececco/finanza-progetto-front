import { createContext, useContext, useState } from 'react'
const searchContext = createContext()
function SearchContextProvider({ children }) {
  const [searchCont, setSearchCont] = useState([])
  return (
    <searchContext.Provider value={(searchCont, setSearchCont)}>
      {children}
    </searchContext.Provider>
  )
}
function useSearchContext() {
  const context = useContext(searchContext)
  return context
}
export { SearchContextProvider, useSearchContext }
