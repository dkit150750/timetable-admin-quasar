export default interface ResponseError {
  response: {
    status: number;
    data: {
      errors: unknown;
    };
  };
}
