import { defineField } from "sanity";

export const imageField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Teks alternatif (wajib)",
        type: "string",
        validation: (r) => r.required(),
      }),
    ],
  });