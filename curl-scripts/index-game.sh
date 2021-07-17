# calls games

# TOKEN:1522f6c34f86edb0c33b3d3f32fd9803 sh curl-scripts/index-games.sh

API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/games"

curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
