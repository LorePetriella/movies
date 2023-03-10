export type User = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  birthdate: Date;
  sessiontoken?: string | null;
};

export type SignUpForm = Omit<User, "id" | ("birthdate" & { birthdate: Date })>;
export type SignUpPayload = SignUpForm;

export type LoginForm = {
  email: string;
  pass: string;
};

export type SearchForm = {
  query: string | null;
  page?: string | null;
};

export type Movie = {
  title: string;
  id: number;
  poster_path: string;
  overview: string;
  backdrop_path?: string | null;
  budget: string;
  homepage: string;
  release_date: string;
  vote_count: number;
  production_companies: Companies[];
};
export type FormField = {
  query: string;
};
// export type SectionDetails = {

// };

export type Companies = {
  name: string;
};
