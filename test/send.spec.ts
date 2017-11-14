import * as ava from 'ava';
import { XMLHttpRequest } from '../xml-http-request';
import { HttpServer } from './helpers/server';

function contextualize<T>(getContext: () => T): ava.RegisterContextual<T> {
	ava.test.beforeEach(t => {
		Object.assign(t.context, getContext());
	});
	return ava.test;
}

const test = contextualize(() => ({
	xhr: new XMLHttpRequest()
}));

test.before(async () => {
	await HttpServer.serverStarted;
});

test.beforeEach(t => {
	t.context.xhr = new XMLHttpRequest();
});

test.todo('XMLHttpRequest #send works with ASCII DOMStrings');
test.todo('XMLHttpRequest #send works with UTF-8 DOMStrings');
test.todo('XMLHttpRequest #send works with ArrayBufferViews');
test.todo('XMLHttpRequest #send works with ArrayBufferViews with set index and length');
test.todo('XMLHttpRequest #send works with ArrayBuffers');
test.todo('XMLHttpRequest #send works with node.js Buffers');
test.todo('XMLHttpRequest #send sets POST headers correctly when given null data');
