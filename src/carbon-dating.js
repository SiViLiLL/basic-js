const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
   // Был дан изотоп carbon-14, период полураспада которого равен 5730 лет (согласно таблице из источника) и начальная активность (initialActivity) равна 15 распадов/мин, и активность этого изотопа в образце (sampleActivity)
	// константа k = 0.693/период полураспада 
	const k = Math.log(2)/HALF_LIFE_PERIOD ;
	return (isNaN(+sampleActivity) || typeof sampleActivity === 'number' || typeof sampleActivity === 'object' || +sampleActivity <= 0 || +sampleActivity > 15 )? false: Math.ceil(Math.log(MODERN_ACTIVITY/+sampleActivity)/k)
}

module.exports = {
  dateSample
};
