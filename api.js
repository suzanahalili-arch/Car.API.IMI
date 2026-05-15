# API - Menaxhim Makinash

Ky është dokumentimi i API për sistemin e menaxhimit të makinave.

## GET /cars
Kthen listën e makinave.

Shembull përgjigjeje:
[
  {
    "id": 1,
    "model": "Audi A4",
    "year": 2018,
    "price": 15000
  }
]

## POST /cars
Shton një makinë të re.

Body:
{
  "model": "Emri Modelit",
  "year": 2020,
  "price": 10000
}
