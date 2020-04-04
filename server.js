const axios = require('axios')
const http = require('http')
const url = require('url')
const port = process.env.PORT || 3000

const userAgent = 'Mozilla/5.0 (Series40; Nokia205.1/04.51; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/3.9.0.0.22'

/** Create JSON Prototype for Sending JSON Response */
http.ServerResponse.prototype.json = function (content, status = 200) {
  this.writeHead(status, {
    'Content-type': 'application/json'
  })
  this.write(JSON.stringify(content))
  this.end()
}

/** Handle Server */
const handleServer = async (req, res) => {
  const request = url.parse(req.url, true)
  const action = request.pathname

  if (action === '/') {
    if (!request.query.search) {
      res.json({ error: 'Search Parameter Not Found' })
    }

    try {
      const images = await getResults(request.query.search)
      const imageUrl = images[Math.floor(Math.random() * images.length)]
      const imageResponseData = await getImageData(imageUrl)
      res.end(imageResponseData, 'binary');
    } catch (message) {
      res.json({
        error: message
      }, 400)
    }
  } else {
    res.json({ error: 'Not Found' }, 404)
  }
}

const extractImages = html => {
  const imageMatchRegex = /imgres\?imgurl=(.*?)&amp;imgrefurl/gs
  let matches
  const data = []

  while (matches = imageMatchRegex.exec(html)) {
    data.push(matches[1])
  }
  return data
}

const getResults = (query) => {
  const searchUrl = `https://www.google.com/search?q=${query}&tbm=isch&tbs=isz:l`
  return axios.get(searchUrl, {
    headers: {
      'User-Agent': userAgent
    }
  }).then(response => {
    return extractImages(response.data)
  }).catch(err => {
    throw err.toJSON().message
  })
}

const getImageData = url => {
  return axios.get(url, {
    responseType: 'arraybuffer'
  }).then(response => {
    return response.data
  }).catch(err => {
    throw err.toJSON().message
  })
}

http.createServer(handleServer).listen(port, () => {
  console.log('Server running at port', port)
})