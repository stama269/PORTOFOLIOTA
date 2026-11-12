import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField } from "./fields";

export const proyek = defineType({
  name: "proyek",
  title: "Proyek",
  type: "document",
  fields: [
    defineField({ name: "judul", title: "Judul proyek", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "judul", maxLength: 80 }, validation: (r) => r.required() }),
    defineField({ name: "ringkasan", title: "Ringkasan (kartu)", type: "text", rows: 3, validation: (r) => r.required().max(200) }),
    imageField("sampul", "Foto sampul"),
    defineField({
      name: "galeri",
      title: "Galeri foto",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Teks alternatif (wajib)", type: "string", validation: (r) => r.required() })],
        }),
      ],
    }),
    defineField({ name: "deskripsi", title: "Penjelasan lengkap", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "teknologi", title: "Teknologi yang dipakai", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),
    defineField({ name: "tautanLive", title: "Tautan situs (live)", type: "url" }),
    defineField({ name: "tautanKode", title: "Tautan kode (GitHub)", type: "url" }),
    defineField({ name: "tahun", title: "Tahun", type: "number" }),
    defineField({ name: "unggulan", title: "Tampilkan sebagai unggulan di beranda", type: "boolean", initialValue: false }),
    defineField({ name: "urutan", title: "Urutan tampil (1 paling awal)", type: "number" }),
  ],
  preview: { select: { title: "judul", subtitle: "ringkasan", media: "sampul" } },
});