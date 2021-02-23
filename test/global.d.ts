// import feito de maneira implicita para que o typescript sobrescreva a interface e não trate o modulo como local,
// que aconteceria caso adicionassemos o import no inicio do arquivo

declare namespace NodeJS {
    interface Global {
        testRequest: import('supertest').SuperTest<import('supertest').Test>
    }
}