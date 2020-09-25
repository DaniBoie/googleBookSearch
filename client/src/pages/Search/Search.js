import Typography from '@material-ui/core/Typography';
import MediaContext from '../../utils/MediaContext'
import React, {useState} from 'react'
import Form from '../../components/Form'
import API from '../../utils/API'

const Home = () => {

  // SETTING up media state and the data.
  const [mediaState, setMediaState] = useState({
    search: '',
    media: []
  })

  // HANDLING the inputs on the page.
  mediaState.handleInputChange = event => {
    setMediaState({...mediaState, [event.target.name]: event.target.value})
  }

  // HANDLING the search for media
  mediaState.handleSearchOMDB = event => {
    event.preventDefault()
    // CALLS api to get data from OMDB API
    API.getBook(mediaState.search)
    .then(({data}) => {
      setMediaState({...mediaState, media: data, search: ''})
    })
    .catch(err => console.log(err))
  }

  //STUDY!
  mediaState.handleSaveMedia = imdbID => {
    const saveMedia = mediaState.media.filter(x => x.imdbID === imdbID)[0]
    API.saveBook(saveMedia)
    .then(() => {
      const media = mediaState.media.filter(x => x.imdbID !== imdbID)
      setMediaState({ ...mediaState, media})
    })
  }

  return (
    <>
    <hr />
      <Typography variant="h6">
        Movie/TV Search
          </Typography>
        <MediaContext.Provider value={mediaState}>
      <Form />
    {
      mediaState.media.length > 0 ? (
        mediaState.media.map(media => (
          <div key={media.imdbID}>
            <img src={media.poster} alt={media.title}/>
            <h3>{media.title}</h3>
            <h4>Type: {media.type}</h4>
            <h4>Year: {media.year}</h4>
            <h5>OMDB ID: {media.imdbID}</h5>
            <button onClick={() => mediaState.handleSaveMedia(media.imdbID)}>Save</button>
          </div>
        ))
      ) : null
    }
      </MediaContext.Provider>
    </>
  )
}

export default Home