Hooks.once("init", function () {
    foundry.utils.mergeObject(CONFIG.DND5E.toolProficiencies, {

       med: "Medical Kit",
       eng: "Engineering Kit",
       dru: "Drug Kit"

      
     
    });
  });
