import Card from "../components/Card/Card";
import NewElement from "../components/NewElement/NewElement";
import { useCharacter } from "../hook/useCharacter";

const Character = () => {
  let [character] = useCharacter({});

  return (
    <div className="character bg-dark">
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <NewElement title={"Character"} />
          {character &&
            character.map((item) => {
              return (
                <Card
                  image={String(item.image)}
                  full_name={`${item.name} ${item.surname}`}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Character;
