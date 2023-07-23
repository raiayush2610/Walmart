// this is file for formating the nuber in file
export const numberFormat = val =>

  Number.isInteger(val) ? val : val.toFixed(2);
