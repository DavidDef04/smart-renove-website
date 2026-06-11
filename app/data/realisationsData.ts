import { SITE_IMAGES } from './siteImages';

export type RealisationProject = {
  id: number;
  title: string;
  location: string;
  category: string;
  description: string;
  image: string;
};

export const REALISATIONS: RealisationProject[] = SITE_IMAGES.realisations.map((project, index) => ({
  id: index + 1,
  ...project,
}));
