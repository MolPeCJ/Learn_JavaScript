// Поиск в ширину в графе

let graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function breadthSearch(graph, start, end) {
    let queue = []; // воссоздаем граф

    queue.push(start); // добавляем стартовую вершину

    while (queue.length > 0) { // пока в очереди есть хотя бы 1 элемент
        let current = queue.shift(); // извлекаем стартовый элемент

        if (!graph[current]) {
            graph[current] = []; // никуда нет пути из вершины
        }

        if (graph[current].includes(end)) {
            return true; // содержит конечную точку
        } else {
            queue = [...queue, ...graph[current]]; 
        }
    }

    return false;
}

console.log(breadthSearch(graph, 'a', 'g'));