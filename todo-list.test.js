const Todo = require('../hard/todo-list');

describe('Todo', () => {
	let todoList;

	beforeEach(() => {
		todoList = new Todo();
	});

	test('add and getAll', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');

		expect(todoList.getAll()).toEqual([
			'Task 1',
			'Task 2',
			'Task 3',
		]);
	});

	test('remove', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');

		todoList.remove(1);
		expect(todoList.getAll()).toEqual(['Task 1', 'Task 3']);

		todoList.remove(0);
		expect(todoList.getAll()).toEqual(['Task 3']);

		expect(() => todoList.remove(2)).toThrow('Index out of bounds');
	});

	test('update', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');

		todoList.update(1, 'Updated Task 2');
		expect(todoList.get(1)).toBe('Updated Task 2');

		
		expect(() => todoList.update(3, 'Invalid Task')).toThrow('Index out of bounds');
	});

	test('get', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');

		expect(todoList.get(0)).toBe('Task 1');
		expect(todoList.get(2)).toBe('Task 3');
		expect(() => todoList.get(3)).toThrow('Index out of bounds');
	});

	test('clear', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');

		todoList.clear();
		expect(todoList.getAll()).toEqual([]);
	});

	test('remove and update with invalid indexes', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');

		expect(() => todoList.remove(5)).toThrow('Index out of bounds');

		expect(() => todoList.update(5, 'Updated Task')).toThrow('Index out of bounds');
	});

	test('add duplicate tasks', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 1');
		todoList.add('Task 3');

		expect(todoList.getAll()).toEqual([
			'Task 1',
			'Task 2',
			'Task 1',
			'Task 3',
		]);
	});
});
