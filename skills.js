Hooks.once("init", function () {
    foundry.utils.mergeObject(CONFIG.DND5E.skills, {

       cmp:{"label": "Computer Use","ability": "int"},
       eng:{"label": "Engineering","ability": "int"},
       sci:{"label": "Science","ability": "int"},
       dem:{"label": "Demolitions","ability": "int"}   

      
     
    });
  });
