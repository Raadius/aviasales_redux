export default class AviasalesService {
  _searchId = null;

  async getSearchId() {
    try {
      const response = await fetch('https://aviasales-test-api.kata.academy/search').then((result) => result.json());
      this._searchId = response.searchId;
    } catch (error) {
      console.log(error);
    }
  }

  async getTickets() {
    const result = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${this._searchId}`);
    if (!result.ok) {
      throw new Error('Код ошибки: ' + result.status);
    }
    return result.json();
  }
}
