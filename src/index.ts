import NepaliDateConverter from "./NepaliDateConverter";

const ADToBS = (date: string | Date) => {
  const converter = new NepaliDateConverter(date);
  return converter._getToBsDate();
}

export { ADToBS };

export default NepaliDateConverter;
