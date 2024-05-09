const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.redirect('/auth/login');
  } catch (error) {
    res.status(500).send('Błąd podczas rejestracji.');
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && await user.comparePassword(password)) {
      req.session.user = user;
      res.redirect('/concert');
    } else {
      res.status(401).send('Błąd logowania.');
    }
  } catch (error) {
    res.status(500).send('Błąd serwera.');
  }
};
