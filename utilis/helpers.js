//Import the function you want to use
const { format } = require('date-fns');

//Today's date
const date = new Date();
const currentYear = format(new Date(), 'yyyy');
const time = format(date, 'EEEE,MMMM do, yyyy hh:mm a');

module.exports = { currentYear, time };
  