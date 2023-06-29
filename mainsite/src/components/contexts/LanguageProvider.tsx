import React, { createContext } from 'react'
export const LanguageContext = createContext({})
type Props = { children: any }
const LanguageProvider = ({ children }: Props) => {
  return (
    <LanguageContext.Provider value={{}}>{children}</LanguageContext.Provider>
  )
}
LanguageProvider.defaultProps = {
  chiildren: undefined,
}
export default LanguageProvider