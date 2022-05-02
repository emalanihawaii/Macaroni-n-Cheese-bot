module.exports = {
  name: 'messageCreate',
  execute(message) {
    if (message.author.bot) return;
    const arr = ["mac", "alex", "finley", "finch", "thomas", "cal", "calum", "arc", "arcadia"];
    const emalani = "700848908133203978";
    const arc = "298541191169835020";
    const arr2 = [emalani, emalani, emalani, emalani, "259862586219036683", "931638540268339280", "931638540268339280", arc, arc];
    for (const name of arr) {
      if (!message.content.toLowerCase().includes(`\\${name}`) && (message.content.toLowerCase().startsWith(`${name} `) || message.content.toLowerCase().includes(` ${name} ` || `${name}?` || `${name}!` || `${name},` || `${name}.`|| `${name}'`) || message.content.toLowerCase().endsWith(` ${name}`)|| message.content.toLowerCase() === name)) {
        return message.channel.send(`<@${arr2[arr.indexOf(name)]}>`);
      }
    }
  },
};