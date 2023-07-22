
const dayjs = require('dayjs');


//module export
module.exports = (inputTime) => {
  const formattedTime = dayjs(inputTime).format('MMM DD, YYYY [at] hh:mm a');
  return formattedTime;
};
