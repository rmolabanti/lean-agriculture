// How do we describe Plant and how to grow it ?
// we must record the decisions, alternatives, and trade-offs that led to it.
// Concrete examples are important too, because they help you see in action.
export interface Plant {
  id: number;

  //Which encompasses the description, identification, nomenclature, and classification of organisms.
  taxonomy?: string;

  //Intent / what is it about
  //A short statement that answers the following questions:
  //What does the plant do / look like ?
  //What is its rationale and intent?
  //What particular use or problem does it address?
  basicInfo?:string;

  //Other well-known names for the Plant, if any.
  commonNames? : string;

  // Why should you go for this plant.
  // The advantages?
  // The details / scenario will help you understand the more abstract description of the plant  that follows.
  motivation? : string;

  //Soil/Potting Media:
  //Light:
  //Temperature:
  //Water:
  //Fertilizer:
  //Other items
  //What are their responsibilities.
  //How to use them / tips if any to carry out their responsibilities.
  growing? : string;

  // Where can we get them
  // Where can we get the plant?
  // Where can we get the items required?
  stores? : string;

  // Choosing Your Plant
  // Choose the right spot.
  // Planting methods
  settingUp?: string

  // Propagating
  // Trimming
  // Shaping
  // Different stages in the plant life
  // What pitfalls, hints, or techniques should you be aware of when implementing
  // Any specific issues
  propagating? : string;

  // What are the trade-offs and results of growing this plant?
  // What aspect of systems it is in effects by it?
  // What should do
  // What are do not’s
  // Pests controlling
  commonProblems? : string;

  //Images from different ages.
  //Images of different shapes / types
  //Images of leaves / other parts to easily identify
  images? : string;

  // Examples of the practical uses of plants / its products in real life
  // We include at least two examples from different domains.
  uses? : string;

  // What  pants are closely related to this one?
  // What are the important differences?
  // With which other plants should this one be used?
  relatedPlants? : string;
}
