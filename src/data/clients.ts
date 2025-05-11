// FILEPATH: c:/Users/Kromm/Desktop/cpanelversioncoculturaesparza/src/data/clients.ts

export interface Client {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export const clients: Client[] = [
    {
      id: 1,
      name: 'Cocultura Esparza',
      email: 'coculturaesparza@gmail.com',
      password: 'coculturaesparza',
      role: 'admin',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // Add more clients as needed
  ];