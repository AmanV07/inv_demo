CREATE DATABASE sustainability;

CREATE TABLE petrol(
  sr_no SERIAL PRIMARY KEY,
  pfrom VARCHAR(255),
  pto VARCHAR(255),
  cty VARCHAR(255),
  qty VARCHAR(255),
  uom VARCHAR(255)
);