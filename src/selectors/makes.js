import { createSelector } from "reselect";

// Super simple selector
export const makesSelector = state => state.makes.makes;

const competitors = (allMakes, make, isCommon = false) =>
  allMakes.reduce((a, cv) => {
    if (cv.make_id !== make.make_id && cv.make_country === make.make_country) {
      if (!isCommon || cv.make_is_common === "1") {
        a.push(cv);
      }
    }
    return a;
  }, []);

// Selector with calculation
export const makesWithCompetitors = state =>
  state.makes.makes.map(make => ({
    competitorCount: competitors(state.makes.makes, make).length,
    commonCompetitorCount: competitors(state.makes.makes, make, true).length,
    ...make,
  }));

// Reselector
export const makesWithCompetitors2 = createSelector(
  makesSelector,
  makes =>
    makes.map(make => ({
      competitorCount: competitors(makes, make).length,
      commonCompetitorCount: competitors(makes.makes, make, true).length,
      ...make,
    })),
);
