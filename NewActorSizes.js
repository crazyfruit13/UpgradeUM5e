Hooks.once("init", function () {
    foundry.utils.mergeObject(CONFIG.DND5E.actorSizes, {

      col : {
         label: "Colossal",
         abbreviation: "Col",
         token: 5,
         capacityMultiplier: 10
       },

       imm : {
         label: "Immense",
         abbreviation: "Imm",
         token: 6,
         capacityMultiplier: 12
       },

       tit : {
         label: "Titanic",
         abbreviation: "Tit",
         token: 7,
         capacityMultiplier: 14
       },
      
       cit : {
         label: "City",
         abbreviation: "Col",
         token: 8,
         capacityMultiplier: 16
       },

       pla : {
         label: "Planetary",
         abbreviation: "Pla",
         token: 9,
         capacityMultiplier: 18
       },

       cos : {
         label: "Cosmic",
         abbreviation: "Cos",
         token: 10,
         capacityMultiplier: 20
       }
     
    });
  });
