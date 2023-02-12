export type ProvidedList<T, ID> = readonly [
  {
    readonly type: T;
    readonly id: 'LIST';
  },
  ...{
    readonly type: T;
    readonly id: ID;
  }[]
];
