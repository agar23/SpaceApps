
// TODO - move these threshold numbers to a config file
const determineBadgeColor = (score) => {
  let color;
  if (score >= 0 && score < 25) {
    color = 'red';
  } else if (score >= 25 && score < 50) {
    color = 'orange';
  } else if (score >= 50 && score < 75) {
    color = 'yellow';
  } else if (score >= 75 && score <= 100) {
    color = 'lightgreen';
  } else {
    color = 'grey';
  }
  return color;
}

export {
  determineBadgeColor
}
