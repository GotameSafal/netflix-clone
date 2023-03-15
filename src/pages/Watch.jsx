import { Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import MovieContainer from '../components/MovieContainer';
import axios from 'axios';
const api_key = `6c296658b41bc30da88d672398b156ba`;
const webUrl = `https://api.themoviedb.org/3/movie/`;

const Watch = () => {
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [toprated, setToprated] = useState([]);
  const [nowPlaying, setNowplaying] = useState([]);

  useEffect(() => {
    const getApi = async (movieType, states) => {
      try {
        const {
          data: { results },
        } = await axios.get(
          `${webUrl}/${movieType}?api_key=${api_key}&language=en-Us&page=1`
        );
        states(results);
      } catch (err) {
        console.log(err);
      }
    };
    getApi('popular', setPopular);
    getApi('upcoming', setUpcoming);
    getApi('top_rated', setToprated);
    getApi('now_playing', setNowplaying);
  }, []);
  return (
    <>
      <Stack
        className="background"
        border={`2px solid white`}
        h={['60vh']}
      ></Stack>
      {console.log(popular)}
      <MovieContainer
        id={'popular'}
        title={`Popular in Netflix`}
        arr={popular}
      />
      <MovieContainer id='upcoming' title={`Upcoming`} arr={upcoming}/>
      <MovieContainer id='toprated' title={`Top Rated`} arr={toprated} />
      <MovieContainer
        id={'nowplaying'}
        title={`Now Playing`}
        arr={nowPlaying}
      />
    </>
  );
};

export default Watch;
