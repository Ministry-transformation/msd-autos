export type Vehicle = {
  id: string;
  name: string;
  price: string;
  year: string;
  fuel: string;
  mileage: string;
  power: string;
  image: string;
  imageAlt: string;
  listing: string;
  tag: string;
};

// Snapshot of six MSD Autos listings checked on 3 October 2026.
// Availability and price can change; the dealer listing remains the source of truth.
export const vehicles: Vehicle[] = [
  {
    id: 'peugeot-508-sw',
    name: 'PEUGEOT 508 SW Allure 2.0 BlueHDi 180 Autom.',
    price: '€7,900', year: '2015', fuel: 'Diesel', mileage: '193,000 km', power: '180 CV', tag: 'Budget pick',
    image: 'https://a.ccdn.es/cnet/vehicles/20772118/195da8f6-9f81-4f1a-ac71-c3ced4c1e29f.jpg/252x189cut/',
    imageAlt: 'Photo from MSD Autos listing for Peugeot 508 SW',
    listing: 'https://www.coches.net/peugeot-508-sw-allure-20-bluehdi-180-autom-5p-diesel-2015-en-alicante-71501000-covo.aspx',
  },
  {
    id: 'toyota-auris-hybrid',
    name: 'TOYOTA Auris 1.8 140H Hybrid Feel',
    price: '€9,000', year: '2015', fuel: 'Hybrid', mileage: '275,500 km', power: '136 CV', tag: 'Hybrid',
    image: 'https://a.ccdn.es/cnet/vehicles/20772133/2d72aacd-25ea-487f-9eb8-2646d8e10629.jpg/252x189cut/',
    imageAlt: 'Photo from MSD Autos listing for Toyota Auris Hybrid',
    listing: 'https://www.coches.net/toyota-auris-18-140h-hybrid-feel-5p-electrico-hibrido-2015-en-alicante-71500992-covo.aspx',
  },
  {
    id: 'audi-q5',
    name: 'AUDI Q5 3.0 TDI quattro S tronic',
    price: '€11,250', year: '2012', fuel: 'Diesel', mileage: '227,000 km', power: '240 CV', tag: 'Mid-range',
    image: 'https://a.ccdn.es/cnet/vehicles/20777746/ab032d12-c14f-4d29-af08-fc04cfc05323.jpg/252x189cut/',
    imageAlt: 'Photo from MSD Autos listing for Audi Q5',
    listing: 'https://www.coches.net/audi-q5-30-tdi-240cv-quattro-s-tronic-5p-diesel-2012-en-alicante-71510757-covo.aspx',
  },
  {
    id: 'nissan-qashqai',
    name: 'NISSAN QASHQAI dCi 130 CV ACENTA',
    price: '€10,900', year: '2018', fuel: 'Diesel', mileage: '178,000 km', power: '130 CV', tag: 'Mid-range',
    image: 'https://a.ccdn.es/cnet/vehicles/20787557/4afcdb7b-cea0-4c67-a149-75f2c59ec7ed.jpg/252x189cut/',
    imageAlt: 'Photo from MSD Autos listing for Nissan Qashqai',
    listing: 'https://www.coches.net/nissan-qashqai-dci-96-kw-130-cv-acenta-5p-diesel-2017-en-alicante-71522066-covo.aspx',
  },
  {
    id: 'bmw-530d-gt',
    name: 'BMW Serie 5 530d xDrive Gran Turismo',
    price: '€13,500', year: '2011', fuel: 'Diesel', mileage: '233,000 km', power: '245 CV', tag: 'Mid-range',
    image: 'https://a.ccdn.es/cnet/vehicles/20772142/4c426822-628e-4502-8abb-4a5e03ec8b65.jpg/252x189cut/',
    imageAlt: 'Photo from MSD Autos listing for BMW 530d xDrive Gran Turismo',
    listing: 'https://www.coches.net/bmw-serie-5-530d-xdrive-gran-turismo-5p-diesel-2012-en-alicante-71500990-covo.aspx',
  },
  {
    id: 'bmw-x5-xdrive40d',
    name: 'BMW X5 xDRIVE40d',
    price: '€12,900', year: '2010', fuel: 'Diesel', mileage: '222,000 km', power: '306 CV', tag: 'Mid-range',
    image: 'https://a.ccdn.es/cnet/vehicles/20772147/029f4347-7896-4f04-a2ae-11a41347186a.jpg/252x189cut/',
    imageAlt: 'Photo from MSD Autos listing for BMW X5 xDrive40d',
    listing: 'https://www.coches.net/bmw-x5-xdrive40d-5p-diesel-2010-en-alicante-71500986-covo.aspx',
  },
];
