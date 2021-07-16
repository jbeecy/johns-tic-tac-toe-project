# Friendly reminder not to use your real usernames or passwords, that could be bad

# TOKEN="60f1b4bd89991200172c54d4" sh curl-scripts/sign-out.sh

curl "https://tic-tac-toe-api-development.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"
