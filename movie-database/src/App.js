// Import Halaman Home
import Home from "./pages/Home";
// Import Routes dan Route dari React Router.
import { Route, Routes } from "react-router-dom";
import CreateMovie from "./pages/movie/Create";
import PopularMovie from "./pages/movie/Popular";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import TopRatedMovie from "./pages/movie/TopRated";
import Layout from "./Layout";
import Coba from "./pages/movie/Trending";
import theme from "./components/theme";
// mengimport theme provider
import { ThemeProvider } from "styled-components";
import Detail from "./pages/movie/Detail";
import Trending from "./pages/movie/Trending";
import { useState } from "react";
import data from "./utils/constants/data";
import { Provider } from "react-redux";
import store from "./features/Store/store";
function App() {
  /**
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */
    const [movies, setMovies] = useState(data);

  return (
    <>
    <Provider store={store}>

    <ThemeProvider theme={theme}>

      {/*
       * Setiap halaman dibungkus olah Layout.
       * Layout digunakan oleh setiap halaman yang dirender.
       */}
       
      <Layout>
        {/*
         * Membuat Routing.
         * Bungkus Routing menggunakan Routes.
         * Buat Routing menggunakan Route.
         */}
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/movie/create" element={<CreateMovie movies={movies} setMovies={setMovies} />} />
          <Route path="/movie/:id" element={<Detail />} />

          <Route path="/movie/popular" element={<PopularMovie />} />
          <Route path="/movie/now" element={<NowPlayingMovie />} />
          <Route path="/movie/top" element={<TopRatedMovie />} />
          <Route path="/Trending" element={<Trending />} />


        </Routes>
      </Layout>
    </ThemeProvider>
    </Provider>
    </>
  );
}

export default App;
