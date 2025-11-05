pipeline {
    agent any // Jenkins가 실행될 환경
    tools { dockerTool 'docker-cli' }
    environment {
        // 이 실습에서 사용할 이미지와 컨테이너 이름
        IMAGE_NAME = 'my-local-react-app'
        CONTAINER_NAME = 'my-react-app-container'
    }

    stages {
        // 1. Git에서 코드 가져오기 (이후 Jenkins가 자동으로 실행)
        stage('Checkout') {
            steps {
                echo 'Checking out code from Git...'
            }
        }

        // 2. Docker 이미지 빌드
        stage('Build Docker Image') {
            steps {
                script {
                    // :latest 대신 $BUILD_NUMBER (Jenkins 변수)를 태그로 사용
                    sh "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} ."
                }
            }
        }

        // 3. 로컬에 배포 (새 컨테이너 실행)
        stage('Deploy to Local') {
            steps {
                script {
                    // 1. (안전) 기존 컨테이너가 있으면 멈추고 삭제
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"

                    // 2. 새 컨테이너 실행 (호스트 8081 포트 <-> 컨테이너 80 포트 연결)
                    echo "Starting new container on http://localhost:8081"
                    sh "docker run -d -p 8081:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}:${BUILD_NUMBER}"
                }
            }
        }
    }
}