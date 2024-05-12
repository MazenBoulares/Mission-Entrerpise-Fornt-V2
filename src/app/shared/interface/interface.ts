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
