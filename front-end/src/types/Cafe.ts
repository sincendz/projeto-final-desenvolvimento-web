// Definindo nosso tipo
export type Cafe = {
  id: number;
  name: string;
  price: number;
  summary: string;
  cover: Cover;
  index?:number;
};

type Cover = {
  id: number;
  url: string;
};

export type User = {
  id: number;
  username: string;
  role: Role;
  email: string;
};

type Role = {
  name: string;
};

export interface ApplicationError {
  error: {
    name: string;
    message: string;
  };
}
