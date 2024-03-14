Hooks.once("init", function () {
    foundry.utils.mergeObject(CONFIG.DND5E.movementUnits, {

        ar: "Acceleration Rating",
        rc: "Range Category"
      
     
    });
  });
