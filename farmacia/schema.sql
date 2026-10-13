Enum roles {
  ADMIN
  PHARMACY
  PATIENT
}

Table users {
  id UUID [pk]
  auth_id INTEGER [NOT NULL]
  role VARCHAR(50) [not null]
  created_at TIMESTAMP [not null, default: `now()`]
  updated_at TIMESTAMP [not null, default: `now()`]
}

Table addresses {
  id UUID [pk]
  street VARCHAR(255)
  number VARCHAR(20)
  complement VARCHAR(100)
  neighborhood VARCHAR(100)
  city VARCHAR(255) [not null]
  state VARCHAR(2) [not null]
  zip_code VARCHAR(9)
}

Table pharmacies {
  id UUID [pk]
  name VARCHAR(255) [not null]
  address_id UUID
  cnpj VARCHAR(18) [unique]
  created_at TIMESTAMP [not null, default: `now()`]
  updated_at TIMESTAMP [not null, default: `now()`]
}

Table pharmacy_users {
  id UUID [pk]
  user_id UUID [not null]
  pharmacy_id UUID [not null]
  created_at TIMESTAMP [not null, default: `now()`]
}

Table patients {
  id UUID [pk]
  user_id UUID [not null, unique]
  created_at TIMESTAMP [not null, default: `now()`]
  updated_at TIMESTAMP [not null, default: `now()`]
}

Table health_records {
  id UUID [pk]
  patient_id UUID [not null]
  type VARCHAR(50) [not null]
  title VARCHAR(255)
  description TEXT
  recorded_at TIMESTAMP
  created_at TIMESTAMP [not null, default: `now()`]
}

Table health_record_files {
  id UUID [pk]
  health_record_id UUID [not null]
  file_name VARCHAR(255) [not null]
  file_url TEXT [not null]
  created_at TIMESTAMP [not null, default: `now()`]
}

Ref: pharmacies.address_id > addresses.id
Ref: pharmacy_users.user_id > users.user_id
Ref: pharmacy_users.pharmacy_id > pharmacies.id
Ref: patients.user_id > users.user_id
Ref: health_records.patient_id > patients.id
Ref: health_record_files.health_record_id > health_records.id