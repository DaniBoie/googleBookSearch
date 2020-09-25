import React, { useContext } from 'react'

const BookCard = () => {

  const { search, handleInputChange, handleSearchOMDB } = useContext(MediaContext)

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
              <div key={media.title}>
                <img src={media.img} alt={media.title} />
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

export default BookCard