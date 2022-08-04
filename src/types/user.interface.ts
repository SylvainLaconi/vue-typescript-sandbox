export default interface User {
  firstName: string;
  id: string;
  lastName: string;
  picture: string;
  title: string;
  gender?: string;
  email?: string;
  dateOfBirth?: string;
  phone?: string;
  location?: {
    street: string;
    city: string;
    state: string;
    country: string;
    timezone: string;
  };
  registerDate?: string;
  updatedDate?: string;
}
