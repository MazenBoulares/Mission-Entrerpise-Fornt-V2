export interface attachment{
  title: string;
  size: string;icon: string;
  color: string;
  path: string;
}

export interface notification{
  title: string;
  subTitle?: string;
  time: string;
  icon: string;
  color: string;
  reply: boolean;
  img: images[]
}

export interface images{
  url: string;
  fileType: string;
}

export interface message{
  name: string;
  message: string;
  status: string;
  img: string;
  path: string;
}

export interface dashboardWidgets{
  title: string;
  subTitle: string;
  status?: string;
  pr?: string;
  text? : string;
  icon: string;
  color: string;
  trending: boolean;
  trending_icon?: string;
}

export interface propertyDetails{
  id: number;
  type: string;
  img: images[];
  thumbnail: string;
  propertyStatus: string;
  country: string;
  title: string;
  price: number;
  details: string;
  home?: string;
  bed: string;
  bath: string;
  sqft: number;
  rooms: number;
  date: string;
  propertyType: string | number;
  agencies: string;
  labels: string[];
  sale?: boolean;
  fees?: boolean;
  openHouse?: boolean;
  sold?: boolean;
}


export interface steps{
  id: number;
  title: string;
  subTitle: string;
  stepNumber: number;
  disabled: boolean
}

export interface users{
  id: number;
  title: string;
  subTitle: string;
  img: string;
  mobile: string;
  email: string;
  fax: string;
  property: number;
  newUser?: boolean
}





export interface recentPropertyData{
  name: string;
  city:string;
  rate: string;
  deposit: string;
  start_date: string;
  url: string;
  margin?: boolean
}

export interface reports{
  from_to_date: string;
  created_date: string;
  img: string;
}



//new user 

// Interface for Property Seeker
// export interface PropertySeeker {
//   userId: number | null;
//   username: string;
//   password: string;
//   token: any; // Change the type according to your needs
//   email: string;
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   address: string;
//   dateOfBirth: string;
//   registrationDate: string;
//   desiredLocation: string;
//   minBudget: number;
//   maxBudget: number;
//   preferredPropertyType: string;
//   notificationEnabled: boolean;
// }

// // Interface for Admin
// export interface Admin {
//   userId: number | null;
//   username: string;
//   password: string;
//   token: any; // Change the type according to your needs
//   email: string;
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   address: string;
//   dateOfBirth: string;
//   registrationDate: string;
//   department: string;
//   role: string;
//   superAdmin: boolean;
//   accessLevel: number;
// }

// // Interface for Landlord
// export interface Landlord {
//   userId: number | null;
//   username: string;
//   password: string;
//   token: any; // Change the type according to your needs
//   email: string;
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   address: string;
//   dateOfBirth: string;
//   registrationDate: string;
//   propertyType: string;
//   numberOfProperties: number;
//   company: string;
//   active: boolean;
//   rating: number;
// }


// export type users2 = PropertySeeker | Admin | Landlord;


export interface User {
  userId: number;
  username: string;
  password: string;
  token: any; // Change the type according to your needs
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  dateOfBirth: number; // Assuming this is in milliseconds
  registrationDate: number; // Assuming this is in milliseconds
  department?: string; // This property is specific to Admin users
  role?: string; // This property is specific to Admin users
  superAdmin?: boolean; // This property is specific to Admin users
  accessLevel?: number; // This property is specific to Admin users
  desiredLocation?: string; // This property is specific to Property Seeker users
  minBudget?: number; // This property is specific to Property Seeker users
  maxBudget?: number; // This property is specific to Property Seeker users
  preferredPropertyType?: string; // This property is specific to Property Seeker users
  notificationEnabled?: boolean; // This property is specific to Property Seeker users
  propertyType?: string; // This property is specific to Landlord users
  numberOfProperties?: number; // This property is specific to Landlord users
  company?: string; // This property is specific to Landlord users
  active?: boolean; // This property is specific to Landlord users
  rating?: number; // This property is specific to Landlord users
  userType?: String;
}
