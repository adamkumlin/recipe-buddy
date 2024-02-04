import { createContext } from "react";
import type Unit from "../types/Unit";

interface UnitsContextProps {
  children: any;
  units: Unit;
}

const UnitsContext = createContext<Unit | null>(null);


const UnitsContextProvider: React.FC<UnitsContextProps> = ({ children, units }) => {

  return (
    <UnitsContext.Provider value={units}>
        {children}
    </UnitsContext.Provider>
  );
};

export default UnitsContext;
