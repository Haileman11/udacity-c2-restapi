export const config = {
  "dev": {
    "username": "master",
    "password": "password",
    "database": "udagramdatabase",
    "host": "udagramdatabaseinstance-1.cdrsize5pznl.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-haile-dev"
  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
