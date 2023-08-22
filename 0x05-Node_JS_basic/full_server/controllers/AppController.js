/**
 * Contains the miscellaneous route handlers.
 * @author Nwankwo Joshua <https://github.com/Joshpowerfit>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
