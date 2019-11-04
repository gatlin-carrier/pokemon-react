class Pokemon {
  constructor(
    name,
    moves,
    ability,
    status,
    heldItem,
    types,
    sprites,
    stats,
    weight,
    forms
  ) {
    this.name = name;
    this.moves = moves;
    this.ability = ability;
    this.status = status;
    this.heldItem = heldItem;
    this.types = types;
    this.sprites = sprites;
    this.stats = stats;
    this.weight = weight;
    this.forms = forms;
  }
}

export default Pokemon;
