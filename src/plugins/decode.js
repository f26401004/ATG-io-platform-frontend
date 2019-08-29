import pako from 'pako'


function decode(encodedData) {
  let decodedData = window.atob(encodedData)
  let charData = decodedData.split('').map(x => x.charCodeAt(0))
	let binData = new Uint8Array(charData)
  let data = pako.inflate(binData)
  decodedData = String.fromCharCode.apply(null, new Uint16Array(data))
	return decodedData
}

export default decode