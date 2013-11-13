/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
  res.json({
    name: 'Bob'
  });
};

exports.guides = function (req, res) {
  res.json({
    name: 'Guides',
    guides: [
        {
          language: 'French',
          price: '995',
          description: 'French guides Rock',
          image: '/images/guideCovers/french.jpg'
        },
        {
          language: 'German',
          price: '995',
          description: 'You mentioned your interest in Flamenco dancing and now your first lesson is in full swing. Luckily, you dance more elegantly than you speak Spanish - at least this was true before you traveled with 30 WORDS. Now that you can find the words you need between spins, you can focus on more important matters such as keeping pace with your instructor.',
          image: '/images/guideCovers/german.jpg'
        },
        {
          language: 'Arabic',
          price: '995',
          description: 'Arabic guides Rock',
          image: '/images/guideCovers/arabic.jpg'
        }
      ]
  });
};