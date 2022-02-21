CREATE TABLE "user" (
  "user_id" SERIAL PRIMARY KEY NOT NULL,
  "username" varchar(18) UNIQUE,
  "email" varchar(255) NOT NULL,
  "created_at" timestamp NOT NULL,
  "password_hash" varchar(255) NOT NULL
);

CREATE TABLE "dentist" (
  "dentist_id" SERIAL PRIMARY KEY NOT NULL,
  "name" varchar(18) NOT NULL,
  "last_name" varchar(18) NOT NULL,
  "user_id" int,
  FOREIGN KEY (user_id) 
    REFERENCES "user" (user_id)
);

CREATE TABLE "patient" (
  "patient_id" SERIAL PRIMARY KEY NOT NULL,
  "name" varchar(18) NOT NULL,
  "last_name" varchar(18) NOT NULL,
  "birthdate" timestamp,
  "gender" varchar(1),
  "email" varchar(45),
  "cellphone" varchar(45),
  "user_id" int,
  FOREIGN KEY (user_id) 
    REFERENCES "user" (user_id)
);

CREATE TABLE "appointment" (
  "appointment_id" SERIAL PRIMARY KEY NOT NULL,
  "start_time" timestamp,
  "patient_accepted" boolean,
  "completed" boolean,
  "description" text,
  "notes" text,
  "dentist_id" int,
  "patient_id" int,
  FOREIGN KEY (patient_id) 
    REFERENCES "patient" (patient_id),
  FOREIGN KEY (dentist_id) 
    REFERENCES "dentist" (dentist_id)
);

CREATE TABLE "records" (
  "record_id" SERIAL PRIMARY KEY NOT NULL,
  "description" text,
  "notes" text,
  "dentist_id" int,
  "patient_id" int,
  "appointment_id" int,
  FOREIGN KEY (patient_id) 
    REFERENCES "patient" (patient_id),
  FOREIGN KEY (dentist_id) 
    REFERENCES "dentist" (dentist_id),
  FOREIGN KEY (appointment_id) 
    REFERENCES "appointment" (appointment_id)  
);

CREATE INDEX ON "user" ("user_id");

CREATE INDEX ON "user" ("username");

CREATE INDEX ON "dentist" ("dentist_id");

CREATE INDEX ON "dentist" ("name");

CREATE INDEX ON "dentist" ("last_name");

CREATE INDEX ON "dentist" ("user_id");

CREATE INDEX ON "patient" ("patient_id");

CREATE INDEX ON "patient" ("name");

CREATE INDEX ON "patient" ("last_name");

CREATE INDEX ON "patient" ("user_id");

CREATE INDEX ON "appointment" ("appointment_id");

CREATE INDEX ON "appointment" ("patient_id");

CREATE INDEX ON "appointment" ("dentist_id");

CREATE INDEX ON "appointment" ("start_time");

CREATE INDEX ON "records" ("record_id");

CREATE INDEX ON "records" ("appointment_id");

CREATE INDEX ON "records" ("patient_id");

CREATE INDEX ON "records" ("dentist_id");

COMMENT ON COLUMN "appointment"."notes" IS 'Content of the appointment';

COMMENT ON COLUMN "records"."notes" IS 'Content of the appointment';
