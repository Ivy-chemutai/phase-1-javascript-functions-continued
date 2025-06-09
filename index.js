 function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
  return "roller-skate";

  const saturdayFun = function(activity) {
    console.log(`This Saturday, I want to ${activity}!`);
  };

 }
function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
    return "go to the office";
    const mondayWork = function(activity) {
      console.log(`This Monday, I will ${activity}.`);
    }
}
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
    return "You are *special*!";

      return function(adjective) {
        const encouragingPromptFunction = wrapAdjective("!!!")
     console.log(encouragingPromptFunction("a dedicated programmer"));

      };
    };
  };
