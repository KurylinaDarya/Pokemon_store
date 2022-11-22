import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { pokemonsSelector } from "../../../selectors/index";

import { loadPokemons } from "../reducers";

import { usePagination } from "../../../hooks/usePagination";

import { ROUTE_NAMES } from "../../../routes/routeNames";

import ShopLayout from "../components/Layout/index";

const ShopContainer = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const pokemons = useSelector(pokemonsSelector);

  const [page, handlePageChange] = usePagination(1);

  const handleNavigateToPokemonDetail = useCallback(
    (id) => {
      navigate(`${ROUTE_NAMES.SHOP}/${id}`);
    },
    [navigate]
  );

  useEffect(() => {
    if (page > 0) {
      dispatch(loadPokemons(page));
    }
  }, [dispatch, page, handlePageChange]);

  //   const handleNavigateToPokemonDetail = useCallback(
  //     (pokemonId) => {
  //       navigate(`${ROUTE_NAMES.SHOP}/${pokemonId}`);
  //     },
  //     [navigate]
  //   );

  //   useEffect(() => {
  //     dispatch(loadPokemons(page));
  //   }, [dispatch, page]);

  return (
    <ShopLayout
      page={page}
      error={pokemons.error}
      pokemons={pokemons.data}
      onPageChange={handlePageChange}
      isLoading={pokemons.isLoading}
      onNavigateToPokemonDetail={handleNavigateToPokemonDetail}
    />
  );
};

export default ShopContainer;
