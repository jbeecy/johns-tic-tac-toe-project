# calls game

#!/bin/sh

API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/games"

curl "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
