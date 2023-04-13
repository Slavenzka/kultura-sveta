import { MouseEventHandler, ReactNode } from "react"

export interface StoreDataTypes {
  date: number;
  range: {
    from: number;
    to: number;
  };
  textarea: string;
  table: {
    selection: string[] | null;
  };
  isVisible: boolean;
  filteredList: any;
}

type ActionCreatorType<T> = (argument: T) => void;

interface RenderFunctionArgTypes {
  store: StoreDataTypes;
  updateRange: ActionCreatorType<any>;
  updateSelectSync: ActionCreatorType<any>;
  updateTextarea: ActionCreatorType<string>
  toggleTargetVisibility: MouseEventHandler<HTMLButtonElement>;
  updateFilteredListSelection: ActionCreatorType<any>;

}

export interface StoriesStoreProviderProps {
  children: (arg: RenderFunctionArgTypes) => ReactNode
}
