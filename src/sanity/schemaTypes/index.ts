import type { SchemaTypeDefinition } from "sanity";
import { profil } from "./profil";
import { proyek } from "./proyek";
import { tulisan } from "./tulisan";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profil, proyek, tulisan],
};