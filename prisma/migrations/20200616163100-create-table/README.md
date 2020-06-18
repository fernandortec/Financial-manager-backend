# Migration `20200616163100-create-table`

This migration has been generated at 6/16/2020, 4:31:00 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Emprestimo" (
"cpf" text  NOT NULL ,"data_nascimento" text  NOT NULL ,"parcelas" integer  NOT NULL ,"taxa_juros_simples" Decimal(65,30)  NOT NULL ,"uf" text  NOT NULL ,"valor" integer  NOT NULL ,"valor_total" integer  NOT NULL )

CREATE UNIQUE INDEX "Emprestimo.cpf" ON "public"."Emprestimo"("cpf")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200616163100-create-table
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+datasource db {
+  provider = "postgresql"
+  url      = "postgres://zwzlgdop:A5_JTaiDaRzVwmWZdc3jqAkgQl9fScQC@ruby.db.elephantsql.com:5432/zwzlgdop"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Emprestimo {
+  cpf String @unique
+  uf String
+  data_nascimento String
+  valor Int
+  taxa_juros_simples Float
+  parcelas Int
+  valor_total Int
+}
```


