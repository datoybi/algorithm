문제 : https://github.com/tony9402/baekjoon/tree/main/graph_traversal

# DFS

최대한 깊이 내려간 뒤, 더이상 깊이 갈 곳이 없을 경우 옆으로 이동

- 모든 노드를 방문하고자 하는 경우 선택
- DFS가 BFS보다 더 간단함
- 검색 속도 자체는 BFS보다 느림

### 동작방식

1. 방문 여부를 기록하기 위해 배열 visited를 사용하며, 배열 visited값을 false로 초기화한다.
2. 노드를 방문할 때마다 해당 노드의 visited 배열 값을 true로 변경한다.
3. 해당 노드(v)와 연결된 노드 중에 방문하지 않은 노드(node)가 있다면 방문하지 않은 노드를 시작점으로 하여 DFS를 다시 시작한다.

```jsx
function dfs(graph, v, visited) {
  // 현재 노드를 방문 처리
  visited[v] = true;
  console.log(v);

  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  graph[node].map((v) => {
    if (!visited[v]) {
      visited[v] = true;
      dfs(graph, node, visited);
    }
  });
}

const graph = [[1, 2, 3], [0, 6], [0], [0, 4, 5], [3], [3], [1]];
const visited = Array(6).fill(false);

dfs(graph, 0, visited);
```

### WHEN

- `모든 정점을 방문`하는 것이 주요한 문제일 때 사용
- `경로의 특징`을 저장해둬야 하는 문제
  예를들면, 각 정점에 숫자가 적혀있고 a부터 b까지 가는 경로를 구하는데 경로에 같은 숫자가 있으면 안된다는 문제나 각각의 경로마다 특징을 저장해둬야 할 때는 DFS 사용

---

# BFS

최대한 넓게 이동한 다음, 더이상 갈 수 없을 때 아래로 이동

- 주로 두 노드 사이의 최단경로를 찾고 싶을 때 사용

### 동작방식

1. 탐색 시작 노드를 큐에 삽입하고 방문 처리한다.
2. 큐에서 노드를 꺼내 해당 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 삽입하고 방문 처리한다.
3. `2`번의 과정을 더 이상 수행할 수 없을 때까지 반복한다.

```jsx
function bfs(graph, start, visited) {
  const queue = [];
  queue.push(start);
  visited[start] = true;

  while (queue.length !== 0) {
    const v = queue.shift();
    console.log(v);

    for (const node of graph[v]) {
      graph[v].map((node) => {
        if (!visited[node]) {
          queue.push(node);
          visited[node] = true;
        }
      });
    }
  }
}

const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
const visited = Array(6).fill(false);
bfs(graph, 0, visited);
// 0 1 2 4 5 3
```

### WHEN

- `모든 정점을 방문`하는 것이 주요한 문제일 때 사용
- `최단거리`를 구해야 하는 문제
  미로 찾기 등 최단거리를 구해야 할 경우, BFS가 유리합니다. 왜냐하면 DFS로 경로를 검색할 경우 처음으로 발견되는 해답이 최단거리가 아닐 수 있지만, BFS는 현재 노드에서 가까운 곳부터 찾기때문에 해답이 곧 최단거리입니다.

---

# 시간복잡도

깊이 우선 탐색(Depth First Search), 너비 우선 탐색(Breadth First Search)의 시간복잡도는 같습니다.

- 인접 행렬: O(V^2)
- 인접 리스트: O(deg(1) + deg(2) + … + dev(V)) = O(E)

방향 그래프에서 최대 간선의 수(E) = N(N-1)
무방향 그래프에서 최대 간선의 수(E) = N(N-1)/2

---
