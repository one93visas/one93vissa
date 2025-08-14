
export interface University {
  university: string;
  country: "USA" | "UK";
  scholarship: string;
  requirements: {
    [key: string]: string | number | undefined;
  };
}

    