interface ArtifactSet {
  id: string;
  name: string;
  description?: string;
}

export interface Artifact {
  id: string;
  name: string;
  min_rarity: number;
  max_rarity: number;
  flower?: ArtifactSet;
  plume?: ArtifactSet;
  sands?: ArtifactSet;
  goblet?: ArtifactSet;
  circlet?: ArtifactSet;
  one_pc?: string;
  two_pc?: string;
  four_pc?: string;
}
