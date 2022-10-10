import startCase from "lodash/startCase";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Pagination from "@mui/material/Pagination";

import Spinner from "../../../../components/Spiner/index";
import PokemonCard from "../PokemonCard/index";

import styles from "./styles.module.scss";

const ShopLayout = ({
  error,
  pokemons,
  isLoading,
  onNavigateToPokemonDetail,
  page,
  onPageChange,
}) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.title}>Welcome to our store!</div>
        <Stack spacing={2} sx={{ width: 300 }} className={styles.stack}>
          <Autocomplete
            options={pokemons.map((option) => option.name)}
            renderInput={(paramas) => (
              <TextField {...paramas} label="Search.." />
            )}
          />
        </Stack>
      </div>
      <div className={styles.pokemosContent}>
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
  );
};

export default ShopLayout;
