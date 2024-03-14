Hooks.once("init", function () {
    foundry.utils.mergeObject(CONFIG.DND5E.currencies, {

        dol:{"label": "Credits($)","abbreviation": "$","conversion": 1}

      
     
    });
  });
