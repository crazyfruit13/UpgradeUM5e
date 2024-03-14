Hooks.once("init", function () {
    foundry.utils.mergeObject(CONFIG.DND5E.armorTypes, {

       exl: "Exo-Armor Light",
       exm: "Exo-Armor Medium",
       exh: "Exo-Armor Heavy",
       amo: "Armor Mod",
       
      
     
    });
  });
