export type User = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  birthdate: Date;
  sesiontoken?: string | null;
};

export type SignUpForm = Omit<User, "id" | ("birthdate" & { birthdate: Date })>;
export type SignUpPayload = SignUpForm;

export type LoginForm = {
  email: string;
  pass: string;
};

export type Movie = {
  title: string;
};

export type MovieBanner = {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
};
