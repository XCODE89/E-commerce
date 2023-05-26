const bodyParse = (req) =>{
    let entries = Object.entries(req.body);
    let updatedEntries = entries.map((entry) => {
      if (entry[0] === "email" || entry[0] === "nickname") {
        return entry;
      } else {
        return [entry[0], entry[1][0].toUpperCase() + entry[1].slice(1)];
      }
    });
    req.body = Object.fromEntries(updatedEntries);
}

module.exports = bodyParse
