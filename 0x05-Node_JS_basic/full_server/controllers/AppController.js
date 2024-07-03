export class AppController {
  static getHomepage(request, response) {
    return response.send('Hello Holberton School!');
  }
}
