const sample = {
  name: "Jane Doe",
  position: "Puesto de trabajo",
  bio_data: {
    email: "jane.doe@gmail.com",
    phone: "+34 654 789 097",
    website: "jane-doe-is-the-best.com",
    github: "http://jane-doe.github.io"
  },
  profile:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  experience: [
    {
      company: "Nombre de la empresa",
      roles: [
        {
          role: "Technical Evangelist",
          from: "junio de 2011",
          until: "enero de 2014",
          achievements: [
            "Contribución al lanzamiento de nuevos productos y funcionalidades",
            "Venta por Canal",
            "Reclutamiento",
            "Evangelismo Técnico"
          ]
        }
      ]
    },
    {
      company: "Nombre de la empresa",
      roles: [
        {
          role: "CTO",
          from: "septiembre de 2003",
          until: "junio de 2011",
          achievements: [
            "Contribución al lanzamiento de nuevos productos y funcionalidades",
            "Venta por Canal",
            "Reclutamiento",
            "Evangelismo Técnico"
          ]
        }
      ]
    }
  ]
};

export { sample };