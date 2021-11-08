module.exports = {
  quote: function(quote) {
    const { id, content, author } = quote;
    return { id, content, author };
  },
};
