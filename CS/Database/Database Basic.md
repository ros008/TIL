# 데이터베이스 기초 용어

### 엔티티 (Entity)

사람, 장소, 사물, 사건 등과 같이 독립적으로 존재하면서 고유하게 식별이 가능한 실세계의 객체이다. 예를 들어 사원번호가 2016이고 이름이 이창섭인 사워, 과목코드가 CS372인 운영체제 등이 있다. 이렇게 실체가 있는 것 뿐만 아니라 추상적인 것도 있다. 프로젝트 번호가 P101인 프로젝트, 학과 번호가 D315인 학과는 추상적인 개념의 엔티티가 될 수 있다. 엔티티는 엔티티 집합들로 분류된다.

### 엔티티 집합 (Entity Set)

동일한 속성(attribute)를 가진 엔티티들의 집합이다. 예를 들어, 한 회사의 모든 사원들은 EMPLOYEE라는 엔티티 집합을 이루고, 모든 부서들은 DEPARTMENT 엔티티 집합에 속한다. 어떤 사원은 EMPLOYEE와 MANAGER 라는 두 엔티티 집합에 속할 수 있기 때문에, 엔티티 집합에 속한 요소들이 항상 서로 다르지는 않다. 엔티티 타입(Entity Type)이라고도 한다.

### 스키마 (Schema)

데이터를 설명하는 데이터. 메타데이터(Metadata)라고도 한다. 예를 들어 `홍길동, 1993-04-02`이라는 데이터가 있을 경우에 이는 `이름, 생일` 이라는 스키마로 설명할 수 있다.

![테이블 관련 용어](https://dl.dropboxusercontent.com/s/7wuch5scloueeza/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-12-02%2017.16.29.png)

- Relation(=Table): 관계형 데이터베이스(RDBMS)에서 정보를 구분하여 저장하는 기본 단위를 말한다. 예로 부서에 관한 정보를 저장하는 부서 Relation(혹은 부서 Table)이 있다.
- Domain: Relation에서 각각의 속성(Attribute)들이 취할 수 있는 같은 타입의 원자 값들의 집합. 즉 한 속성(Attribute)에 나타날 수 있는 값의 범위이다. 예를 들면 학년 속성은 1~6까지의 값을 가질 수 있고 이를 도메인이라 한다.
- Atomic Value(원자 값): 더 이상 분리될 수 없는 값.

### Key

한 Relation에서 각각의 튜플(행)을 유일하게 식별하기 위해 사용하는 하나 혹은 그 이상의 속성들의 집합.

### 유일성과 최소성

- 유일성: 하나의 키로 어떠한 행을 바로 찾아낼 수 있는 성질. ex) 주민등록번호
- 최소성: 레코드를 식별하는데 꼭 필요한 속성들로만 구성되어 있는 성질. ex) {주민등록번호 + 학번}은 최소성을 만족시키지 않는다. 주민등록번호로만 tuple(행)을 구분할 수 있기 때문.

### 키의 종류

- 슈퍼 키(Super Key): 유일성을 만족하는 키. 예를 들면, {학번 + 이름}, {주민등록번호 + 학번}
- 복합 키(Composite Key): 2개 이상의 속성(attribute)를 사용한 키.
- 후보 키(Candidate key): 유일성과 최소성을 만족하는 키. 기본키가 될 수 있는 후보이기 때문에 후보키라고 불린다. 예를 들면, 주민등록번호, 학번 등
- 기본 키(Primary key): 후보 키에서 선택된 키. NULL값이 들어갈 수 없으며, 기본키로 선택된 속성(Attribute)은 동일한 값이 들어갈 수가 없다.
- 대체 키(Surrogate key): 후보 키 중에 기본 키로 선택되지 않은 키.
- 외래 키(Foreign Key): 어떤 테이블(Relation) 간의 기본 키(Primary key)를 참조하는 속성이다. 테이블(Relation)들 간의 관계를 나타내기 위해서 사용된다.

![키의 종류](https://dl.dropboxusercontent.com/s/l51vuclpeqkdmwr/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-12-04%2014.33.19.png)

### DBMS(Database Management System)

데이터베이스를 관리하는 시스템은 여러 종류가 있다. 아래에서 RDBMS, No-SQL이 최근 대부분의 DBMS를 차지하고 있다.

- HDBMS(Hierachical DBMS): 계층적인 형태의 DBMS. 초기 세팅이 변화하면 이에 대처하기가 힘들어 잘 쓰이지 않음. 초기 DBMS의 형태.
- NDBMS(Network DBMS): 구성과 설계가 복잡하고 데이터 종속성을 해결하지 못함.
- RDBMS(Relational DBMS, 관계형 데이터베이스 관리 시스템): 테이블과 테이블의 관계를 기반으로 하는 가장 범용적인 데이터베이스 관리 시스템. 데이터의 일관성(Consistency)를 보장함. MySQL, Oracle, SQLite 등이 있음.
- ODBMS(Object-Oriented DBMS): 정보를 객체의 형태로 표현하는 DBMS.
- No-SQL(Not-Only SQL): 데이터 간의 관계를 설정하지 않고 유연한 테이블 스키마를 가진다. 대용량 데이터/분산 처리에 적합하다는 장점이 있지만 데이터 일관성(Consistency)이 항상 보장되지 않는 단점이 있다. MongoDB, HBase, Cassandra, Redis 등이 있다.

### 데이터베이스 풀

- Connection Pool
  - 클라이언트의 요청에 따라 각 어플리케이션의 스레드에서 데이터베이스에 접근하기 위해서는 Connection이 필요하다.
  - Connection Pool은 이런 connection을 여러 개 생성해 두어 저장해 놓은 공간(캐시), 또는 이 공간의 Connection을 필요할 때 꺼내 쓰고 반환하는 기법을 말한다.
    ![Connection Pool](https://raw.githubusercontent.com/WeareSoft/tech-interview/master/contents/images/db-img/db-connection-02.png)
- DB에 접근하는 단계
  1. 웹 컨테이너가 실행되면서 DB와 연결된 Connection 객체들을 미리 생성하여 pool에 저장한다.
  2. DB에 요청 시, pool에서 connection 객체를 가져와 DB에 접근한다.
  3. 처리가 끝나면 다시 pool에 반환한다.
- Connection이 부족하면?
  - 모든 요청이 DB에 접근하고 남은 Connection이 없다면, 해당 클라이언트는 대기 상태로 전환시키고 Pool에 Connection이 반환되면 대기 상태에 있는 클라이언트에게 순차적으로 제공된다.
- 사용하는 이유?
  - 매 연결마다 Connection 객체를 생성하고 소멸시키는 비용을 줄일 수 있다.
  - 미리 생성된 Connection 객체를 사용하기 때문에 DB 접근 시간이 단축된다.
  - DB에 접근하는 Connection의 수를 제한하여, 메모리와 DB에 걸리는 부하를 조정할 수 있다.
- Thread pool
  - 비슷한 맥락으로 Thread pool이라는 개념도 있다.
  - 이 역시 매 요청마다 요청을 처리할 Thread를 만드는 것이 아니라 미리 생성한 pool 내의 Thread를 소멸시키지 않고 재사용하여 효율적으로 자원을 활용하는 방법이다.
- Thread Pool과 Connection pool
  - WAS에서 Thread pool과 Connection pool내의 Thread와 Connection의 수는 직접적으로 메모리와 관련이 있기 때문에, 많이 사용하면 할 수록 메모리를 많이 점유하게 된다. 그렇다고 반대로 메모리를 위해 적게 지정한다면, 서버에서는 많은 요청을 처리하지 못하고 대기 할 수 밖에 없다.
  - 보통 WAS의 Thread의 수가 Conncetion의 수보다 많은 것이 좋은데, 그 이유는 모든 요청이 DB에 접근하는 작업이 아니기 때문이다.
