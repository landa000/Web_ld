# 깃이란 무엇인가?

소프트웨어 개발 및 관리에서 자료를 버전/기간/작성내용 순서에 따라 문서를 관리하는 버전관리시스템이라 한다.<br />
이는 한사람이 혼자 작업을 진행할 수도 있지만, 하나의 데이터를 여러 사람이 관리하여 처리 할 수도 있다.<br /> 

---

## 핵심 키워드

- git config --global user.name "사용자명"
- git config --global user.email "이메일"
- git clone 주소(url)
- git status 상태확인
- git add 파일 또는 폴더명
- git commit -m "내용요약"
- git push
- git pull
- git reset 유사ctrl+z(1회)
- git reset HEAD^



---



## git 사용법 기초-1



1.  컴퓨터에 연결할 사용자의 계정을 등록한다.(사용자이름, 이메일)<br />
   ```shell
   $ git config --global user.name "사용자이름"
   $ git config --global user.email "이메일"
   
   ```
   
2.  github 사이트에서 개인 저장소를 생성한다.

   - 사이트에서 'new repository'를 클릭
   - 이름생성, 자료공개여부(공개), readme파일생성 여부

3. 내컴퓨터에서 github사이트에 있는 주소에 담긴 자료를 그대로 복제한다.<br />
```shell
$ git clone http://---------------.git
```
4. 최초의 테스트 및 파일인식은 'README.md' 파일 생성 후 내용 작성<br />

``` shell
$ touch README.md
$ eco "readme파일 생성 및 체크" >> README.md				
```

5. 선택자료를 첨부 및 내용요약 작성 그리고 전송<br />

``` shell
$ git add 파일/폴더선택
$ git commit -m "첨부 될 내용요약"
$ git push 전송

$ git add * (전체첨부)
```

6. 자료의 상태점검은 수시로 해야한다.

``` shell
$ git status
```

7.  혹여 다른 컴퓨터 clone된 상태라면, 서버의 자료를 업데이트로 설정해야 한다.

   ``` shell
   $ git pull
   ```