export class Seguimista {
  id: string;
  avatar: Avatar;
  full_name: string;
  date_of_birth: string;
  nickname: string;
  profession: string;
  address: string;
  neighborhood: string;
  city: string;
  email: string;
  mobile_phone: string;
  landline_phone: string;
}

type Avatar = {
  id: string;
  name: string;
  mimetype: string;
  data: string;
};
