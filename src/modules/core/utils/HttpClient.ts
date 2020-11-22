/**
 * In prod App it will be better to have Resource for each service
 * which will hold information about it(tokens, keys and etc).
 * Here is defined only GET method. With POST, PUT etc methods
 * and Resource - implementation of sendRequest, provideUrlWithKey - will be different
 */
const apiToken = '48ad73f67dfe40498fb9e45e892f05dd';

export class HttpClient {
  static GET(url: string, queryParams: Record<string, any> = {}): Promise<any> {
    return HttpClient.sendRequest(url, queryParams);
  }

  private static sendRequest(url: string, queryParams: Record<string, any>): Promise<any> {
    return fetch(HttpClient.appendQueryString(url, queryParams))
      .then(response => response.json());
  }

  private static appendQueryString(url: string, queryParams: Record<string, any>): string {
    const params: Record<string, any> = { ...queryParams, api_key: apiToken };
    return Object.keys(params)
      .reduce((acc, key) => acc + `${key}=${params[key]}&`, `${url}?`)
  }
}
