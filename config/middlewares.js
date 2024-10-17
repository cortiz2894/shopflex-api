module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:3000", "https://tudominio.com"],
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
