import startCase from "lodash/startCase";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

import Spinner from "../../../../components/Spinner/index";
import PokemonCard from "../PokemonCard/index";

import styles from "./styles.module.scss";

const ShopLayout = ({
  page,
  error,
  pokemons,
  isLoading,
  onPageChange,
  onNavigateToPokemonDetail,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Welcome to our store!</div>
      <div className={styles.pokemosContent}>
        <div className={styles.pokemosItem}>
          {isLoading ? (
            <Spinner />
          ) : (
            pokemons?.map(({ id, name, image, price }) => (
              <PokemonCard
                key={id}
                id={id}
                name={startCase(name)}
                image={image}
                price={price}
                onNavigateToPokemonDetail={() => onNavigateToPokemonDetail(id)}
              />
            ))
          )}
          {error && <div style={{ color: "red" }}>{error}</div>}
        </div>

        <div>
          <Stack spacing={2}>
            <Pagination
              count={10}
              page={page}
              boundaryCount={1}
              color="primary"
              onChange={onPageChange}
              disabled={isLoading}
              className={styles.pagination}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default ShopLayout;
