## Array
---
  - 데이터들이 순서대로 쭉 늘어선 배열의 형식
  - 논리적 저장 순서와 물리적 저장 순서가 일치한다
  - 인덱스로 해당 원소에 접근이 가능하다. O(1) 즉, random access가 가능하다
  - 삭제 또는 삽입 시 원소들을 shift 해줘야 하므로 최악의 경우 O(n)의 시간이 걸린다.
  - 제한적인 크기를 갖는다.
  - stack 영역에 할당
  ![ArrayList](https://camo.githubusercontent.com/6994ce74b5cef2b2aeec714e1069fa83f6c5ebd8c675a7fb5686c67ca591ae53/68747470733a2f2f74312e6461756d63646e2e6e65742f6366696c652f746973746f72792f393935453636333935423143464437443130)
  - Array List는 Array선언 시 크기를 정해줘야한다는 단점을 보완한 것이다.    

</br>

## Linked List
---
  - 자료의 주소 값으로 서로 연결되어 있는 구조
  - 특정 원소에 접근하기 위해서는 첫 번째 우너소부터 다 확인해야함 O(n) 즉, 순차 접근 sequential access
  - 삭제 또는 삽입 시 뒤로 밀거나 채우는 과정 없이 단지 주소만 서로 연결시켜 주면 되기 때문에 array 보다 빠르다
  - 탐색 시간은 O(n)
  - heap 영역에 할당
    ![LinkedList](https://camo.githubusercontent.com/9fd9aeb83db72a1d2cfffce4bc9c407a508e2f23cb28c0bc39d1b9c920e330a9/68747470733a2f2f74312e6461756d63646e2e6e65742f6366696c652f746973746f72792f393932353041333435423143464436393043)