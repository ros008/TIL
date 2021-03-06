## TCP/IP UDP

두 프로토콜의 가장 큰 차이점은 `신뢰성`이다. TCP는 데이터의 무결성을 보장한다. 하지만 UDP 는 데이터가 손실될 수 있다.

## TCP 특징

TCP는 `무결성을 보장`하는 통신방법이기 때문에 데이터가 손실되면 다시 서버에게 요청하여 해당 데이터를 받아온다. 또한 데이터의 `전송 순서를 보장하며 안정적`이라는 특징 때문에 대부분의 통신 방법으로 사용된다. 안정적인 통신을 위해 통신 이전에 `handshake`과정을 수행하여 송수신부가 연결을 수행한 후 데이터를 주고받는다. TCP 헤더에는 다음과 간은 정보들이 들어있다.

1. 출발지 및 목적지의 포트번호
2. 데이터 중 패킷의 순서
3. handshake시 정보를 전송하고 확인하기 위한 플래그 비트
4. 헤더의 크기
5. 데이터가 손실되었는지 확인할 수 있는 체크섬
6. 윈도우 사이즈, 긴급포인터, 옵션 등등

헤더의 크기가 UDP 보다 상대적으로 크기 때문에 UDP보다 속도가 느리고 부하가 크다.

## UDP 특징

UDP는 `무결성을 보장하지 않는 통신방법`이기 때문에 데이터가 손실되었다면 해당 데이터를 버려버린다. 또한 데이터의 전송 `순서 역시 보장하지 않는다`. 안정적인 통신이 필요하지 않아 `handshake과정을 수행하지 않는 특징`이 있다. UDP헤더에는 다음과 같은 정보들이 들어있다.

1. 출발지 및 목적지의 포트번호
2. 헤더의 크기
3. 데이터가 손실되었는지 확인할 수 있는 체크섬

TCP 헤더에 비해 매우 적은양의 내용만 들어가 있어 TCP 보다 상대적으로 빠르고 부하가 적다. 데이터의 무결성 보다는 전달 속도가 중요한 `스트리밍 서비스`와 같은 곳에서 사용한다. 그 외에 DNS, VoIP 등에 사용 된다.
