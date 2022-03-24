CREATE TABLE "items" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(80) NOT NULL,
	"quantity" DECIMAL NOT NULL,
	"unit" varchar(20) NOT NULL,
	"purchased" BOOLEAN DEFAULT false
);

INSERT INTO "items" ("name", "quantity", "unit")
VALUES ('gum', 4, 'packs'), ('bananas', 2, 'bunches'), ('coffee', .5, 'lbs')