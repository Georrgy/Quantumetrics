export type Item = {
    from : string;
    to : string;
    value : number;
    amount : number;
    total : number;
};

export type SelectIthem = { id: string, name: string };

export type DataResponse = {
  [key: string]: {
    [key: string]: number;
  };
};