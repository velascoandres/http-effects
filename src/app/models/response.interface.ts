export interface ResponseInterface<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
  ad: Add;
}

interface Add {
  company: string;
  url: string;
  text: string;
}
