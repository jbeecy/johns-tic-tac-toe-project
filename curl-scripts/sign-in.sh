# Friendly reminder not to use your real usernames or passwords, that could be bad

# EMAIL="email@example.co" PASSWORD="john" sh curl-scripts/sign-in.sh

curl "https://tic-tac-toe-api-development.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
    }
  }'

echo
