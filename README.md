
# Dream Coding - 유닛테스트와 TDD  *study*    

### Test Pyramid
- E2E Test (end-to-end)
UI 테스트, 사용자 테스트 ,실제 사용 플로우를 테스트
- Integration Test 통합 테스트
여러 단위를 통합했을때 상호작용을 테스트
- Unit Test 단위 테스트 
함수, 모듈, 클래스 등 개별적, 독립적인 단위를 테스트
---
### TDD process

1. 요구 사항 분석 및 이해
2. 설계 
3. 테스트 코드작성, 실행 
4. 의도적으로 실패하기
5. 충족요건 내에서만 코드 작성, 테스트 통과  
*1-5 반복*
----
### 테스트 코드의 구조
- arrange (given)
- act (when)
- assert (then)
---
### 좋은 테스트의 원칙 *FIRST*

**Fast** 느린것에 대한 의존성 낮추기   
→ 파일, 데이터베이스, 네트워크에 대한 의존은 mock ,stub 사용하여 테스트  

**Isolated** 테스트 독립성 유지   
→ 최소한의 유닛으로 검증하기. 독립적이고, 집중적으로 유지  

**Repeatable** 실행할 때마다 동일한 결과를 유지  
→ 환경에 영향을 받지 않도록 작성  

**Self-validating**  스스로 결과를 검증하기   
→결과값의 수동적인 비교 X, 자동화를 통한 검증단계 (CI/CD)  

**Timely** 시기적절하게 테스트 코드 작성  
→사용자에게 배포되기 이전에 테스트 코드 작성  

---
### 테스트 범위 *Right-BICEP*

*모든 요구 사항이 정상 동작 하는지 확인 : 모든 결과가 정확한지 확인*

**Boundary conditions**  모든 코너 케이스에 대해 테스트를 하기  
→ 잘못된 포맷의 인풋, null, 특수문자, 잘못된 이메일, 작은 숫자, 큰 숫자, 중복, 순서가 맞지 않음  

**Inverse relationship** 역관계를 적용해서 결과값을 확인  
→일관성을 유지 (덧셈→뺄셈,추가→제거)  

**Cross-check** 다른 수단을 이용해서 결과값이 맞는지 확인  
→추가된 과일 ==전체과일-예전의 과일 갯수, A알고리즘(직접 구현한 알고리즘) == B알고리즘(라이브러리)  

**Error conditions**  불행한 경로에 대해 우아하게 처리 하는가?  
→네트워크 에러, 메모리 부족, 데이터베이스 중지 ...  

**Performance characteristics**  성능 확인은 테스트를 통해 정확한 수치로 확인  
→성능 개선의 척도와 확인도 데이터를 통해 확인  

---
### 테스트의 조건 *CORRECT*

**Conformance** 특정 포맷을 준수  
→ 전화번호, 이메일, 아이디, 파일 확장자...  

**Ordering** 순서 조건 확인하기  
→ 순서가 중요한 경우   

**Range** 숫자의 범위  
→ 제한된 범위보다 작거나 큰 경우  

**Reference** 외부 의존성 유무, 특정한 조건의 유무  
→ ~일때, ~가 되어 있을때, 어떤 특정한 상황/상태일때 이런 동작을 한다  

**Existence** 값이 존재 하지 않을때 어떻게 동작?  
→ null, undefined, 0  

**Cardinality** 0-1-N 법칙에 따라 검증  
→ 하나도 없을때, 하나만 있을때, 여러개가 있을때  

**Time** 상대, 절대, 동시의 일들  
→ 순서가 맞지 않은 경우, 소비한 시간, 지역 시간  

---
[*JEST OFFICIAL DOCS*](https://jestjs.io/)  
