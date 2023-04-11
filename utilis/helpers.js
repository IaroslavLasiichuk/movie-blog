module.exports = {
  format: ()=> (new Date(), "'Today is a' eeee"),
  //=> "Today is a Friday"
  
  formatDistance: ()=> (subDays(new Date(), 3), new Date(), { addSuffix: true }),
  //=> "3 days ago"
  
  formatRelative: ()=> (subDays(new Date(), 3), new Date()),

    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_year: () => {
      const d = new Date();
      let year = d.getFullYear();
    return year;
  },
    
  };
  