import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField } from "./fields";

export const profil = defineType({
  name: "profil",
  title: "Profil",
  type: "document",
  fields: [
    defineField({ name: "nama", title: "Nama", type: "string", validation: (r) => r.required() }),
    defineField({ name: "tagline", title: "Slogan singkat", type: "string" }),
    imageField("foto", "Foto profil"),
    defineField({ name: "bio", title: "Bio", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({
      name: "tautan",
      title: "Tautan (GitHub, LinkedIn, dan lainnya)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "jenis",
              title: "Platform",
              type: "string",
              options: { list: ["github", "linkedin", "instagram", "x", "youtube", "lainnya"] },
              validation: (r) => r.required(),
            }),
            defineField({ name: "url", title: "Alamat (https://...)", type: "url", validation: (r) => r.required() }),
          ],
          preview: { select: { title: "jenis", subtitle: "url" } },
        }),
      ],
    }),
    defineField({ name: "cv", title: "Berkas CV (PDF)", type: "file", options: { accept: ".pdf" } }),
  ],
});