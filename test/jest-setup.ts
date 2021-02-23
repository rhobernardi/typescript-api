// Inicialização o servidor para todos os testes funcionais

import { SetupServer } from '@src/server';
import supertest from 'supertest';

// inicializar para nos o server de testes -> app em modo de teste
beforeAll(() => {
    const server = new SetupServer();
    server.init();
    global.testRequest = supertest(server.getApp());
});