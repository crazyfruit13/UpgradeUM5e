Hooks.once("init", function () {
    foundry.utils.mergeObject(CONFIG.DND5E.skills, {

       com:{"label": "Commune","ability": "vig"},
       det:{"label": "Detection","ability": "vig"},
       ind:{"label": "Induce","ability": "vig"},
        

      
     
    });
  });
