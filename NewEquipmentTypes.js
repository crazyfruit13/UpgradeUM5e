Hooks.once("init", function () {
    foundry.utils.mergeObject(CONFIG.DND5E.equipmentTypes, {

       exl: "Exo-Armor Light",
       exm: "Exo-Armor Medium",
       exh: "Exo-Armor Heavy",
       cybernetics: "Cybernetics",
       amo: "Armor Mod",

      
     
    });
  });
