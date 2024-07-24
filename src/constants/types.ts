// pets types
export type PetTypeAllProperties = {
  id: string;
  type: string;
  price: number;
  title: string;
  description: string;
  star: number;
  hasApproved: boolean;
  server: string;
  status: string;
  createAt: string;
  updatedAt: string;
  petOwner: {
    id: string;
    username: string;
    characterName: string;
    server: string;
    contactInfo: string;
  };
  photos: {
    imageUrl: string;
  }[];
};

export type PetType = {
  id: string;
  type: string;
  description: string;
  image: string;
  price: number;
  server: string;
  title: string;
  photos: {
    imageUrl: string;
  }[];
};

// gears types
export type GearType = {
  id: string;
  gearType: string;
  description: string;
  characterClass: string;
  element: string;
  maxElementValue: string;
  price: number;
  server: string;
  title: string;
  photo: string;
};

export type GearTypeAllProperties = {
  id: string;
  gearType: string;
  description: string;
  characterClass: string;
  element: string;
  maxElementValue: string;
  price: number;
  server: string;
  title: string;
  photo: string;
  gearOwner: {
    id: string;
    username: string;
    characterName: string;
    server: string;
    contactInfo: string;
  };
};
