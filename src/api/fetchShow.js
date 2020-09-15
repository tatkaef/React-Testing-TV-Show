import axios from "axios";

export const fetchShow = (setShow, setSeasons, formatSeasons) => {
  axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
      setShow(res.data);
      setSeasons(formatSeasons(res.data._embedded.episodes));
    });
};
