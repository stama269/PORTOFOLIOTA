import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField } from "./fields";

export const tulisan = defineType({
  name: "tulisan",
  title: "Tulisan (Blog)",
  type: "document",
  fields: [
    defineField({ name: "judul", title: "Judul", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "judul", maxLength: 80 }, validation: (r) => r.required() }),
    defineField({ name: "tanggal", title: "Tanggal terbit", type: "date" }),
    defineField({ name: "ringkasan", title: "Ringkasan", type: "text", rows: 3, validation: (r) => r.max(220) }),
    imageField("sampul", "Foto sampul"),
    defineField({
      name: "isi",
      title: "Isi tulisan",
      type: "array",
      of: [
        { type: "block" },
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Teks alternatif (wajib)", type: "string", validation: (r) => r.required() })],
        }),
      ],
    }),
    defineField({ name: "tag", title: "Tag", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),
    defineField({ name: "terbit", title: "Terbitkan di situs", type: "boolean", initialValue: false }),
  ],
  preview: { select: { title: "judul", subtitle: "tanggal", media: "sampul" } },
});