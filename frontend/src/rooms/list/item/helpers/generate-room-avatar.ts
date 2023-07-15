const options = {
  headers: {
    'X-Api-Key': 'G7ZELAyDBvIbzOhQp0aOAg==KcevLLoAZrrpPm7g',
    'Accept': 'image/jpg'
  }
}
export const generateRoomAvatar = (setAvatar: (e: any) => void) => fetch("https://api.api-ninjas.com/v1/randomimage?category=nature", options)
  .then(result => setAvatar(result))
  .catch(e => console.log('Error: ', e))
