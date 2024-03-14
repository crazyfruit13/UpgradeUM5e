Hooks.once("init", function () {
    foundry.utils.mergeObject(CONFIG.DND5E.abilities, {

        vig:{"label": "Vigor", "abbreviation": "vig", "type": "mental","defaults": {"vehicle": 0} }
      
     
    });
  });
