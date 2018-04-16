import {MockBackend, MockConnection} from '@angular/http/testing';
import {BaseRequestOptions, Headers, Http, RequestMethod, Response, ResponseOptions} from '@angular/http';

export function mockBackendFactory(backend: MockBackend, options: BaseRequestOptions) {
  backend.connections.subscribe((connection: MockConnection) => {
    if (connection.request.url.endsWith('/login') && connection.request.method === RequestMethod.Post) {
      const body = JSON.parse(connection.request.getBody());
      checkCredentials(body, connection);
    } else if (connection.request.url.endsWith('/admin') && connection.request.method === RequestMethod.Get) {
      if (connection.request.headers.get('Authorization') === 'fakeToken') {
        connection.mockRespond(new Response(new ResponseOptions({status: 200})));
      } else {
        connection.mockRespond(new Response(new ResponseOptions({status: 401})));
      }
    } else {
      connection.mockRespond(new Response(new ResponseOptions({status: 404})));
    }
  });
  return new Http(backend, options);
}

function checkCredentials(body: any, connection: MockConnection) {
  if (body.user === 'admin' && body.password === '123') {
    connection.mockRespond(new Response(generateMockResponseOptions()));
  } else {
    connection.mockError(new Error('Wrong credentials'));
  }
}

function generateMockResponseOptions(): ResponseOptions {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Set-Authorization', 'fakeToken');

  return new ResponseOptions({
    headers: headers,
    status: 200,
    url: 'your-app.com/login',
  });
}
