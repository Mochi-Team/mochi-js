export class StatusError extends Error {
  status: number;
  data: string;
  hostname: string;

  constructor(status: number, message: string, data: string, hostname: string) {
    super(message);
    this.status = status;
    this.data = data;
    this.hostname = hostname;
  }
}
