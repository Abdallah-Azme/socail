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

// garment types
export type GarmentType = {
  id: string;
  description: string;
  price: number;
  server: string;
  title: string;
  photo: string;
  gender: Gender;
};

enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export type GarmentTypeAllProperties = {
  id: string;
  description: string;
  price: number;
  server: string;
  title: string;
  photo: string;
  gender: Gender;
  garmentOwner: {
    id: string;
    username: string;
    characterName: string;
    server: string;
    contactInfo: string;
  };
};
// item types
export type ItemType = {
  id: string;
  description: string;
  price: number;
  server: string;
  title: string;
  photo: string;
  quantity: number;
};

export type ItemTypeAllProperties = {
  id: string;
  description: string;
  price: number;
  server: string;
  title: string;
  photo: string;
  itemOwner: {
    id: string;
    username: string;
    characterName: string;
    server: string;
    contactInfo: string;
  };
};
